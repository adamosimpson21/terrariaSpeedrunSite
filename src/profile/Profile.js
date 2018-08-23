import React, {Component} from 'react'
import Player from '../innerComponents/Player'
import BackFrame from '../innerComponents/BackFrame'
import './Profile.css'
import GuideImage from '../img/theGuide.png'
import moment from 'moment'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      player: {}
    }
  }

  componentDidMount () {
	  this.loadPlayer(this.props.match.params.id)
  }

  loadPlayer (id) {
    fetch('https://www.speedrun.com/api/v1/users/' + id)
	    .then(resp => {
		    if (!resp.ok) {
		        if (resp.status >= 400 && resp.status < 500) {
		          	return resp.json().then(data => {
			            let err = {errorMessage: data.message}
			            throw err
		         	})
		        } else {
			        let err = {errorMessage: 'Please try again later. Server down'}
			        throw err
	        	}
		    }
		    return resp.json()
	    })
	    .then(data => {
	    	this.setState({player: data})
	    	console.log(data)
	    })
  }

  render () {
    const {id} = this.props.match.params
    if (Object.keys(this.state.player).length === 0) {
      return (
        <div>
          <Player id={id} />
        </div>
      )
    } else {
      const player = this.state.player.data
      // TODO: add more user features and styles!
      // TODO: connect a variety of APIs to add more depth to a user's profile
      // TODO: add an individual's runs and some type of measurement system/score for ranking purposes
      // TODO: Style names in accordance to Speedrun.com API
      return (
        <div className='profileBody'>
          <h3>The human, the myth, the legend:<br /><Player id={id} /> </h3>
          <p>Extremely inaccurate portrait: <img className='portraitImage' src={GuideImage} alt='Terraria Guide' /></p>
          {player.location ? <p> Location: {player.location.country.names.international} </p> : null}
          {player.youtube ? <p> Follow me on youtube! <a href={player.youtube.uri} target='_blank'>Youtube!</a></p> : null}
          {player.signup ? <p> Member of speedrun.com since {moment(player.signup).format('MM-DD-YY')} </p> : null}
          {player.twitter ? <p> My Twitter <a href={player.twitter.uri} target='_blank'>Twitter</a></p> : null}
          {player.twitch ? <p> My Twitch <a href={player.twitch.uri} target='_blank'>Twitch</a></p> : null}
        </div>
      )
    }
  }
}

export default BackFrame(Profile)
