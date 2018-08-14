import React, {Component} from 'react';
import './RunList.css';
import {categoryIDLookUp} from '../helper/idTables.js';
import RunDescription from './RunDescription';
import {formattedDuration, buildURL} from '../helper/helperfunctions';
import moment from 'moment';

class RunList extends Component{
	constructor(props){
	    super(props);
	      	this.state= {
	      	runs: []
	    }	
	}

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

		var categoryVariables=categoryIDLookUp[category].variables;

		varObj[categoryVariables.Difficulty.id] = categoryVariables.Difficulty[difficulty];
		varObj[categoryVariables.Seeds.id] = categoryVariables.Seeds[seed];
		varObj[categoryVariables["# of Players"].id] = categoryVariables["# of Players"]["1 Player"];
		varObj[categoryVariables["Patch Used"].id] = categoryVariables["Patch Used"]["1.3.5"];

		//fetching using the full URL, currently can vary by difficulty, seed, and category
		fetch(buildURL(categoryIDLookUp[category].categoryID, varObj))
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
	     	let runs = data.data.runs;
	     	this.setState({runs});
	    })
	}

	render(){
	const allRuns = this.state.runs.map((run, index) =>(
		<RunDescription 
			key = {index}
			place = {index+1}
			runner= {run.run.players[0].id}
			date= {moment(run.run.submitted).format('MM-DD-YY')}
			time = {formattedDuration(run.run.times.primary)}
		/>
	))
	     	
				
		return(
	        <div className="runList">
	        	{allRuns}
	        </div>
		)
	}
}

export default RunList;