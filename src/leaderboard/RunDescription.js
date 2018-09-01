import React, {Component} from 'react'
import './RunDescription.css'
import Player from '../innerComponents/Player'
import {Link} from 'react-router-dom'

class RunDescription extends Component {
  render () {
    const {runner, time, date, place, id} = this.props
    return (
      <div className='runDescription'>
        <div className='innerSpan'>
          <span className='runDescriptionPlace'>{place}. </span>
          <div className='playerDisplay2'><Player id={runner} /> </div>
          <Link className="linkToSpeedrun" to={'/speedrun/' + id}>
            <div className="timeDisplay">{time} </div>
            <span>{date} </span>
          </Link>
        </div>
      </div>
    )
  }
}

export default RunDescription
