import React, {Component} from 'react';
import logo from './logo.svg';
import './LeaderboardTitle.css'

class LeaderboardTitle extends Component{
	render(){
		const {category, diff, seed} = this.props;
		return(
			<h3 className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <p className="App-title">{category} Leaderboard, {diff}, {seed}</p>
	        </h3>
		)
	}
}

export default LeaderboardTitle;