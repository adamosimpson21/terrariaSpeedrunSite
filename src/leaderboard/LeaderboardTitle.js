import React, {Component} from 'react'
import './LeaderboardTitle.css'
import BackFrame from '../innerComponents/BackFrame'
import {categoryIDLookUp} from '../helper/idTables'

class LeaderboardTitle extends Component {
  importAll (r) {
    let images = {}
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item) })
    return images
  }

  render () {
    const {category, diff, seed} = this.props
    const images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/))
    return (
      <div className='leaderboardTitle'>
        <h3>
          <img className='categoryTitleImage' src={images[categoryIDLookUp[category].image]} alt='category' />
          <span className='App-title'>{category} Leaderboard, {diff}, {seed}</span>
          <img className='categoryTitleImage' src={images[categoryIDLookUp[category].image]} alt='category' />
        </h3>
        <p>Here you can find all of the approved runs of the game.  See a category you enjoy?  Try running it yourself!  You never know until you try!</p>
      </div>
    )
  }
}

export default BackFrame(LeaderboardTitle)
