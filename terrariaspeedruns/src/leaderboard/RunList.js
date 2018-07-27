import React, {Component} from 'react';
import './RunList.css';
import {runnerIdToNames, categoryIDLookUp} from '../helper/idTables.js';
import RunDescription from './RunDescription';
import {formattedDuration, buildURL} from '../helper/helperfunctions';

class RunList extends Component{
	constructor(props){
	    super(props);
	      this.state= {
	      runs: []
	    }	
	}


	//componentWillMount and componentWillUpdate are deprecated. 
  componentDidMount(){
    this.loadRuns(this.props.category, this.props.diff, this.props.seed, categoryIDLookUp[this.props.category].variables["Patch Used"]["1.3.5"]);
  }

	//When the handler changes the state, make a new API call
  componentDidUpdate(prevProps){
  	//prevent infinite loops of updating
  	if (this.props !== prevProps) {
	    this.loadRuns(this.props.category, this.props.diff, this.props.seed, categoryIDLookUp[this.props.category].variables["Patch Used"]["1.3.5"]);
	  }
  	}

  loadRuns(category, difficulty, seed, version){
	var varObj = {};
	//TODO: clean this up more, there has to be a better way to set this variable ane make this more readable
	varObj[categoryIDLookUp[category].variables.Difficulty.id] = categoryIDLookUp[category].variables.Difficulty[difficulty]
	varObj[categoryIDLookUp[category].variables.Seeds.id] = categoryIDLookUp[category].variables.Seeds[seed]
	varObj[categoryIDLookUp[category].variables["# of Players"].id] = categoryIDLookUp[category].variables["# of Players"]["1 Player"]
	varObj[categoryIDLookUp[category].variables["Patch Used"].id] = categoryIDLookUp[category].variables["Patch Used"]["1.3.5"]

	//fetching using the full URL, currently can vary by difficulty, seed, and category
	fetch(buildURL(categoryIDLookUp[category].categoryID, varObj))
	//error handling
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
    //set the state of the runs! woo!!
    .then(data => {
     let runs = data.data.runs;
     this.setState({runs:runs});
    })
  }

	render(){
		//TODO:make this pretty, it's the main info that'll be looked at using this site, but right now it's basically plaintext
		//TODO: convert date into more readable string
	const allRuns = this.state.runs.map((run) =>(
		<RunDescription
			runner={runnerIdToNames[run.run.players[0].id]}
			date={run.run.submitted}
			time = {formattedDuration(run.run.times.primary)}
		/>
	))
	     	
				
		return(
	        <div className="App-intro">
	        	{allRuns}
	        </div>
		)
	}
}

export default RunList;