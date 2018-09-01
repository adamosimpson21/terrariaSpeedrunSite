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
          <span><Player id={runner} /> </span>
          <Link className="linkToSpeedrun" to={'/speedrun/' + id}>
            <span>{time} </span>
            <span>{date} </span>
          </Link>
        </div>
      </div>
    )
  }
}

export default RunDescription
