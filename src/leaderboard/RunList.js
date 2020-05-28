import React, {Component} from 'react'
import './RunList.css'
import {variableIDLookUp} from '../helper/idTables.js'
import RunDescription from './RunDescription'
import {formattedDuration, buildURL, fetchErrorHandler} from '../helper/helperfunctions'
import BackFrame from '../innerComponents/BackFrame'
import moment from 'moment'

class RunList extends Component {
  constructor (props) {
    super(props)
    this.state = {
	     	runs: []
	    }
  }

  	componentDidMount () {
      this.loadRuns(this.props.category, this.props.diff, this.props.seed, this.props.numPlayers, this.props.patch)
  	}

  // When the handler changes the state, make a new API call
  	componentDidUpdate (prevProps) {
  	// prevent infinite loops of updating
  		if (this.props !== prevProps) {
        this.loadRuns(this.props.category, this.props.diff, this.props.seed, this.props.numPlayers, this.props.patch)
	  	}
  	}

    loadRuns (category, difficulty, seed, numPlayers, patch) {
      const { Difficulty, 'Major patch' : majorPatch, Players, Seeds} = variableIDLookUp;
      let varObj = {}

      varObj[Difficulty.id] = Difficulty[difficulty]
      varObj[Seeds.id] = Seeds[seed]
      varObj[Players.id] = Players[numPlayers]
      varObj[majorPatch.id] = majorPatch[patch]

      // fetching using the full URL, currently can vary by difficulty, seed, and category, and patch
      fetch(buildURL(category, varObj))
	    .then(fetchErrorHandler)
	    .then(data => {
	     	let runs = data.data.runs
	     	this.setState({runs})
	    })
  }

  render () {
    const allRuns = this.state.runs.map((run, index) => (
      <RunDescription
        key={run.run.id}
        id={run.run.id}
        place={index + 1}
        runner={run.run.players}
        date={moment(run.run.submitted).format('MM-DD-YY')}
        time={formattedDuration(run.run.times.primary)}
      />
    ))

    if(Object.keys(allRuns).length < 1){
      const {category, diff, seed, numPlayers} = this.props
      return(
        <div className='runList'>
          <p>There are no runs for this category! Once someone submits a valid run for {category}: {diff}, {seed}, {numPlayers} it will appear here. You could get this world record today by submitting a run through SpeedRun.com</p>
        </div>
      )
    } else {
      return (
        <div className='runList'>
          {allRuns}
        </div>
      )
    }
  }
}

export default BackFrame(RunList)
