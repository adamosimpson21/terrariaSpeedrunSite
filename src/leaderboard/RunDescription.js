import React, {Component} from 'react'
import './RunDescription.css'
import Player from '../innerComponents/Player'

class RunDescription extends Component {
  render () {
    const {runner, time, date, place} = this.props
    return (
      <div className='runDescription'>
        <div className='innerSpan'>
          <span className='runDescriptionPlace'>{place}. </span>
          <span><Player id={runner} /> </span>
          <span>{time} </span>
          <span>{date} </span>
        </div>
      </div>
    )
  }
}

export default RunDescription
