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
    	this.loadRuns(this.props.category, this.props.diff, this.props.seed, this.props.numPlayers, variableIDLookUp['Patch Used']['1.3.5'])
  	}

  // When the handler changes the state, make a new API call
  	componentDidUpdate (prevProps) {
  	// prevent infinite loops of updating
  		if (this.props !== prevProps) {
	    	this.loadRuns(this.props.category, this.props.diff, this.props.seed, this.props.numPlayers, variableIDLookUp['Patch Used']['1.3.5'])
	  	}
  	}

  	loadRuns (category, difficulty, seed, numPlayers ,version) {
    let varObj = {}

    varObj[variableIDLookUp.Difficulty.id] = variableIDLookUp.Difficulty[difficulty]
    varObj[variableIDLookUp.Seeds.id] = variableIDLookUp.Seeds[seed]
    varObj[variableIDLookUp['# of Players'].id] = variableIDLookUp['# of Players'][numPlayers]
    varObj[variableIDLookUp['Patch Used'].id] = variableIDLookUp['Patch Used']['1.3.5']

    // fetching using the full URL, currently can vary by difficulty, seed, and category
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
        // runner={run.run.players[0].id}
        runner={run.run.players}
        date={moment(run.run.submitted).format('MM-DD-YY')}
        time={formattedDuration(run.run.times.primary)}
      />
    ))

    return (
      <div className='runList'>
        {allRuns}
      </div>
    )
  }
}

export default BackFrame(RunList)
