import React, {Component} from 'react';
import './LeaderboardTitle.css';

class LeaderboardTitle extends Component{

	categoryToImage(categoryName){
		console.log("categoryName is " + categoryName)
		if(categoryName==="Moon Lord"){
			return "../img/moonlord.png"
		} else {
			return "../img/nightsedge.png"
		}

	}

	render(){
		const {category, diff, seed} = this.props;
		const imageString = this.categoryToImage(category);
		console.log("imageString is " + imageString)
		return(
			<div>
				<h3 className="App-header">
					<img className="categoryTitleImage" src={require('../img/nightsedge.png')} alt="category" />
		            <span className="App-title">{category} Leaderboard, {diff}, {seed}</span>
		            <img className="categoryTitleImage" src={require('../img/nightsedge.png')} alt="category" />
		        </h3>
		        <p>Here you can find all of the approved runs of the game.  See a category you enjoy?  Try running it yourself!  You never know until you try!</p>
	        </div>
		)
	}
}

export default LeaderboardTitle;