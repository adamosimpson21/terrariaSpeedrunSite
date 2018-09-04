import React, {Component} from 'react';
import BackFrame from '../innerComponents/BackFrame';
import {fetchErrorHandler, formattedDuration} from "../helper/helperfunctions";
import {categoryIDLookUp} from "../helper/idTables";
import Player from '../innerComponents/Player';
import moment from 'moment';
import ReactPlayer from 'react-player';
import './Speedrun.css'

class Speedrun extends Component {
  constructor (props){
    super(props);
    this.state={
      run:{}
    }
  }

  componentDidMount(){
    this.loadRun(this.props.match.params.id)
  }

  loadRun(runId){
    fetch("https://www.speedrun.com/api/v1/runs/"+runId + "?embed=category.variables")
      .then(fetchErrorHandler)
      .then(run => {
        this.setState({run:run.data});
      })
  }

  render(){
    const {run} = this.state
    const terrariaID = "kdk4e21m"
    if(Object.keys(run).length !== 0 && run.game===terrariaID){
      const variableStrings = {}
      let categoryName = run.category.data.name
      if(run.category.data.name==='1 Player' || '2 Players'){
        for(let boss in categoryIDLookUp){
          if(categoryIDLookUp[boss].id === run.level){
            categoryName = boss;
          }
        }
      }
      run.category.data.variables.data.forEach(variableObj => {
        for(let property in run.values){
          if(property===variableObj.id){
            variableStrings[variableObj.name] = variableObj.values.values[run.values[property]].label;
          }
        }
      })
      return(<div>
        <h2>{categoryName}, {variableStrings.Difficulty}, {variableStrings.Seeds} in {variableStrings["Patch Used"]}</h2>
        <h4>By:<Player id={run.players[0].id}/> {run.players[1]&&<span> and <Player id={run.players[1].id}/> </span>}({run.players[1] ? '2 Players' : '1 Player'}) in {formattedDuration(run.times.primary)}</h4>
        <ReactPlayer className="speedrunVideo" url={run.videos.links[0].uri} playing controls width={720} height={480}/>
        {run.comment&&<p className="commentBody">Comment: {run.comment}</p>}
        <p>Submitted on {run.date}</p>
        <p>Current status is {run.status.status}</p>
        {run.status["verify-date"]&&<p>This run was verified on {moment(run.status["verify-date"]).format('MM-DD-YY')}{run.status.examiner&& <span> by <Player id={run.status.examiner}/></span>} </p>}
        <p><a href={run.weblink}>Watch me on speedrun.com!</a></p>
      </div>)
    } else if(Object.keys(run).length !== 0 && run.game!==terrariaID) {
      return (<div>
        <p>This run does not appear to be a Terraria speedrun. It will not display correctly on this site. If you believe this is an error, please contact BandsWithLegends through discord</p>
      </div>)
    } else {
      return (<div>
        <p>Loading this run...</p>
        <p>If this persists for more than 15 seconds, there has been an error fetching this speedrun.</p>
      </div>)
    }
  }
}

export default BackFrame(Speedrun);