import React, {Component} from 'react'
import './LeaderboardTitle.css'
import BackFrame from '../innerComponents/BackFrame'

class LeaderboardTitle extends Component {
  categoryToImage (categoryName) {
    switch (categoryName) {
		    case 'Moon Lord':
		        return 'moonlord.png'
		    case "Night's Edge":
		        return 'nightsedge.png'
		    case 'All Bosses':
		        return 'Duke_Fishron.png'
		    case 'All Pre-HM Bosses':
		        return 'wallofflesh.png'
		    default:
		        return 'nightsedge.png'
    }
  }

  importAll (r) {
	  	let images = {}
	  	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item) })
	    return images
  }

  render () {
    const {category, diff, seed} = this.props
    const imageString = this.categoryToImage(category)
    const images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/))
    // TODO add variable images for different categories
    return (
      <div className='leaderboardTitle'>
        <h3>
          <img className='categoryTitleImage' src={images[imageString]} alt='category' />
          <span className='App-title'>{category} Leaderboard, {diff}, {seed}</span>
          <img className='categoryTitleImage' src={images[imageString]} alt='category' />
        </h3>
        <p>Here you can find all of the approved runs of the game.  See a category you enjoy?  Try running it yourself!  You never know until you try!</p>
      </div>
    )
  }
}

export default BackFrame(LeaderboardTitle)
