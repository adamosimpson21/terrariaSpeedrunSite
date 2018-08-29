import React, {Component} from 'react';
import BackFrame from '../innerComponents/BackFrame';
import {fetchErrorHandler, formattedDuration} from "../helper/helperfunctions";
import {categoryIDLookUp} from '../helper/idTables';
import Player from '../innerComponents/Player';
import moment from 'moment';

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
        console.log(run);
      })
  }

  render(){
    const {run} = this.state
    if(Object.keys(run).length !== 0 ){
      const difficulty = run.category.data.variables.data.forEach(variableObj => {
        for(let property in run.values){
          if(property===variableObj.id){
            //TODO: get category variables and values through embedding
            // console.log("property is " + property + " variableObj name is " + variableObj.values.values["5lmo3ej1"].label)
          }
        }
      })
      return(<div>
        <p>category: {run.category.data.name}</p>
        <p>date submitted is : {run.date}</p>
        <p>game is : Terraria</p>
        <p>runner is : <Player id={run.players[0].id}/></p>
        <p>status is : {run.status.status}</p>
        {run.status["verify-date"]&&<p>verified at : {moment(run.status["verify-date"]).format('MM-DD-YY')}</p>}
        {run.status.examiner&&<p>examined by : <Player id={run.status.examiner}/></p>}
        {/*<p>variables:{categoryIDLookUp.category.variables}</p>*/}
        <p>time: {formattedDuration(run.times.primary)}</p>

      </div>)
    } else {
      return (<div>
        <p>Loading this run...</p>
      </div>)
    }
  }
}

export default BackFrame(Speedrun);