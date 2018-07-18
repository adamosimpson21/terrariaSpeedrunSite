import React, {Component} from 'react';
import './RunList.css';
import {runnerIdToNames} from './idTables.js'
import RunDescription from './RunDescription';

class RunList extends Component{
	constructor(props){
	    super(props);
	      this.state= {
	      runs: []
	    }
	  }

  componentWillMount(){
    this.loadRuns();
  }

  loadRuns(){
	 fetch('https://www.speedrun.com/api/v1/categories/zd3yzvn2/records')
    .then(resp=>{
      if(!resp.ok){
        if(resp.status>=400 && resp.status <500){
          return resp.json().then(data=> {
            let err= {errorMessage:data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later. Server down'};
          throw err
        }
      }
    return resp.json();
    })
    .then(data => {
     let runs = data.data[0].runs;
     this.setState({runs:runs});
     console.log("state", this.state.runs);
    })
  }

	render(){
	const allRuns = this.state.runs.map((run) =>(
		<RunDescription
			runner={runnerIdToNames[run.run.players[0].id]}
			date={run.run.submitted}
			time = {run.run.times.primary}
		/>
	))
	     	
				
		return(
	        <div className="App-intro">
	        	{allRuns}
	          <RunDescription runner="BandsWithLegends" time="00:45:00" date="07/12/18"/>
	          <RunDescription runner="TVGBadger" time="00:45:01" date="07/13/18"/>
	        </div>
		)
	}
}

export default RunList;