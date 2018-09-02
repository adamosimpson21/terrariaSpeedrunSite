import React, {Component} from 'react'
import './LeaderboardTitle.css'
import BackFrame from '../innerComponents/BackFrame'
import {categoryIDLookUp} from '../helper/idTables'

class LeaderboardTitle extends Component {
  importAll (r) {
    let images = {}
    // eslint-disable-next-line
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item) })
    return images
  }

  render () {
    const {category, diff, seed, numPlayers} = this.props
    const images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/))
    return (
      <div className='leaderboardTitle'>
        <div>
          <div className="titleCategoryDisplay">
            <img className='categoryTitleImage' src={images[categoryIDLookUp[category].image]} alt='category' />
            {category}
            <img className='categoryTitleImage' src={images[categoryIDLookUp[category].image]} alt='category' /></div><br/>
          <div className="titleVariableDisplay">{diff}, {seed}, {numPlayers}</div>
        </div>
        <p>Here you can find all of the approved runs of the game.  See a category you enjoy?  Try running it yourself!  You never know until you try!</p>
      </div>
    )
  }
}

export default BackFrame(LeaderboardTitle)
