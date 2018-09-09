import React, {Component} from 'react';
import Player from '../innerComponents/Player';
import BackFrame from '../innerComponents/BackFrame';
import './Profile.css';
import GuideImage from '../img/theGuide.png';
import moment from 'moment';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icon from '../innerComponents/Icon';
import ReactPlayer from 'react-player';
import { fetchErrorHandler } from '../helper/helperfunctions';
import PlayerLinkIcon from "../innerComponents/PlayerLinkIcon";
import {Link} from 'react-router-dom';
import {calculateRunnerFame} from '../helper/countRunnerFame';

class Profile extends Component{
	constructor(props){
		super(props);
		this.state={
			player:{},
      recentRun:{},
      fameData:{}
		}
	}

	componentDidMount(){
	  this.loadPlayer(this.props.match.params.id);
	  this.loadRecentRun(this.props.match.params.id);
	  this.loadFame(this.props.match.params.id);
	}

	loadPlayer(id){
		fetch("https://www.speedrun.com/api/v1/users/"+id)
	    .then(fetchErrorHandler)
	    .then(player => {
	    	this.setState({player:player.data});
	    })
  }

	loadRecentRun(id){
    fetch("https://www.speedrun.com/api/v1/runs?user="+id+"&status=verified&orderby=verify-date&direction=desc")
      .then(fetchErrorHandler)
      .then(data => {
        this.setState({recentRun:data.data[0]});
      })
  }

  //TODO: load runners personal bests and calculate a 'fame'
  loadFame(id){
    fetch("https://www.speedrun.com/api/v1/users/" + id + "/personal-bests")
			.then(fetchErrorHandler)
			.then(data => {
				let fameData = calculateRunnerFame(data);
				this.setState({fameData})
			})
  }

	render(){
		const {id} = this.props.match.params;
		if(Object.keys(this.state.player).length !== 0 ){
			const {player, recentRun, fameData} = this.state;
			//TODO: add an individual's runs and some type of measurement system/fame for ranking purposes
			return(
				<div className="profileBody">
          <Grid fluid>
            <Row>
              <Col>
                <h1 style={{color:player["name-style"]["color-to"].light}} className="profilePlayerName"><Player id={id}/></h1>
                {(player.location) && <p><Icon icon="airplane" /> Location: {player.location.country.names.international} </p>}
                {(player.signup) && <p> Member of <a href={player.weblink}>speedrun.com</a> since {moment(player.signup).format('MM-DD-YY')} </p>}
                {(Object.keys(this.state.recentRun).length !== 0) && <div>
                  <p><Link className="recentRunLink" to={"/speedrun/" + recentRun.id}>My most recent speedrun: (includes non-Terraria games)</Link></p><ReactPlayer className="profileVideo" url={recentRun.videos.links[0].uri} playing controls width={480} height={270}/>
                </div>}
              </Col>
              <Col className="profilePortrait">
                <p>Extremely inaccurate portrait: </p><img className="portraitImage" src={GuideImage} alt="Terraria Guide" />
								{(Object.keys(fameData).length !== 0) && <div>
                  <p>My Terraria Speedrun fame: {fameData.fame}</p>
                  <p>My World Records: {fameData.place["1"]}</p>
                  <p>My Silver Medals: {fameData.place["2"]}</p>
                  <p>My Bronze Medals: {fameData.place["3"]}</p>

                </div>}
              </Col>
            </Row>
            <Row className="profileIcons">
              {(player.youtube) && <PlayerLinkIcon site="youtube" player={player}/>}
              {(player.twitter) && <PlayerLinkIcon site="twitter" player={player}/>}
              {(player.twitch) && <PlayerLinkIcon site="twitch" player={player}/>}
            </Row>
          </Grid>
				</div>
			)
		}	else {
      return(
        <div>
          <Player id={id}/>
					<p>Loading player data...</p>
        </div>
      )
    }
  }
}

export default BackFrame(Profile)
