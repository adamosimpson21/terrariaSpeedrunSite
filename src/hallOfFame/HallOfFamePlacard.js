import React, {Component} from 'react'
import './HallOfFamePlacard.css'
import Player from "../innerComponents/Player";

class HallOfFamePlacard extends Component {
  render () {
    const {index, fameData} = this.props
    return (
      <div className="hallOfFamePlacard">
        <div className="innerSpan">
          <span className="hallOfFamePlace">{index+1}. </span>
          <Player id={fameData.id}/>
          <div className="fameDisplay">{fameData.fame} fame</div>
        </div>
      </div>
    )
  }
}

export default HallOfFamePlacard;