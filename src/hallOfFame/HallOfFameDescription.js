import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import './HallOfFameDescription.css'

class HallOfFameDescription extends Component {
  render () {
    return (
      <div>
        <p>Earn points by submitting Terraria speedruns on speedrun.com . BandsWithLegends is currently taking ideas and criteria for how these points should be calculated</p>
        <p>Current Scoring system: 1st : 10, 2nd: 5, 3rd: 3, other: 1. All Terraria personal bests are used for calculations</p>
      </div>
    )
  }
}

export default BackFrame(HallOfFameDescription);