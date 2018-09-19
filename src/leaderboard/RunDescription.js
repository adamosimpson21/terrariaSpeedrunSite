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
          <div className='playerDisplayTopLine'>
            <span className='runDescriptionPlace'>{place}. </span>
            <div className='playerDisplay2'><Player id={runner[0].id} />
          </div>
            {runner[1] && <span className='Player2Display'> and <Player id={runner[1].id} /></span>}
          </div>
          <div className='playerDisplayBottomLine'>
            <Link className="linkToSpeedrun" to={'/speedrun/' + id}>
              <div className="timeDisplay">{time} </div>
              <span>{date} </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default RunDescription
