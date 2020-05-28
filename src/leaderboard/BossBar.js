import React, {Component} from 'react'
import './BossBar.css'
import Button from '../innerComponents/Button'
import BackFrame from '../innerComponents/BackFrame'
import {categoryIDLookUp} from '../helper/idTables';
import classNames from 'classnames';

class BossBar extends Component {
  render () {
    const categoryButtons = []
    const levelButtons = []
    const {category, changeLeaderboardHandler} = this.props
    Object.keys(categoryIDLookUp).forEach(boss => {
      categoryIDLookUp[boss].type==='level' ?
        levelButtons.push(<Button className={classNames('buttonHOC', {'pressed': category!==boss})} label={boss} key={boss} onClick={(e) => changeLeaderboardHandler(e, boss)}/>)
      :
        categoryButtons.push(<Button className={classNames('buttonHOC', {'pressed': category!==boss})} label={boss} key={boss} onClick={(e) => changeLeaderboardHandler(e, boss)}/>)
    })

    return (
      <div className='bossBar'>
        <div className="boss-bar-full-game-wrapper">
          Full Game Categories: {categoryButtons}
        </div>
        <div className="boss-bar-IL-wrapper">
          Individual Levels: {levelButtons}
        </div>
      </div>
    )
  }
}

export default BackFrame(BossBar)
