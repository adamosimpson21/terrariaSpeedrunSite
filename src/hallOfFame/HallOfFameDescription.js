import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import './HallOfFameDescription.css'

class HallOfFameDescription extends Component {
  render () {
    return (
      <div className="hall-of-fame-description">
        <p>
          Scoring system:
          <br />1st: 10, 2nd: 5, 3rd: 3, other: 1
          <br />Full Game categories: +5,   Hardmode Categories: +2
          <br />Expert runs: 1.5x,   Master runs: 2x
          <br />All Terraria personal bests are used for calculations
        </p>
        <p>Earn points by submitting Terraria speedruns on <a href="speedrun.com">speedrun.com</a>.
          <br />
          <a href="https://twitter.com/bandswithlegend">BandsWithLegends</a>{' '}
          is currently taking ideas and criteria for how these points should be calculated.
          <br />Once these are finalized, there will be a cool, more read-able infographic
        </p>
      </div>
    )
  }
}

export default BackFrame(HallOfFameDescription);
