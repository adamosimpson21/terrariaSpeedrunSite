import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import './HallOfFameTitle.css'
import titleImage from '../img/HallOfFameTitle.png'

class HallOfFameTitle extends Component {
  render () {
    return (
      <div className="hallOfFameTitle">
        <img className='hallOfFameTitleImage' src={titleImage} alt='Hall of Fame' />
      </div>
    )
  }
}

export default BackFrame(HallOfFameTitle);