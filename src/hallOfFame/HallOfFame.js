import React, {Component} from 'react'
import './HallOfFame.css'
import HallOfFameTitle from './HallOfFameTitle'
import HallOfFameDescription from './HallOfFameDescription'
import HallOfFameList from './HallOfFameList'

class HallOfFame extends Component {
  render () {
    return (
      <div className="hallOfFameBody">
        <HallOfFameTitle />
        <HallOfFameDescription />
        <HallOfFameList />
      </div>
    )
  }
}

export default HallOfFame