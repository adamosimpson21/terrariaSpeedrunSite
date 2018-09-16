import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import './HallOfFameDescription.css'

class HallOfFameDescription extends Component {
  render () {
    return (
      <div>
        <p>Earn points by submitting Terraria speedruns on speedrun.com . BandsWithLegends is currently taking ideas and criteria for how these points should be calculated. Once these are finalized, there will be a cool, more read-able infographic</p>
        <p>Scoring system: 1st : 10, 2nd: 5, 3rd: 3, other: 1. Full Game categories: +5. Hardmode Categories: +2. Expert runs: 1.5x. All Terraria personal bests in v1.3.5 are used for calculations</p>
      </div>
    )
  }
}

export default BackFrame(HallOfFameDescription);