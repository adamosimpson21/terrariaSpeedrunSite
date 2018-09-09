import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import './HallOfFameTitle.css'
import trophies from '../img/placedTrophies.png'

class HallOfFameTitle extends Component {
  render () {
    return (
      <div className="hallOfFameTitle">
        <img className='hallOfFameTitleImage' src={trophies} alt='trophies' />
        Hall of Fame!
        <img className='hallOfFameTitleImage' src={trophies} alt='trophies' />
      </div>
    )
  }
}

export default BackFrame(HallOfFameTitle);