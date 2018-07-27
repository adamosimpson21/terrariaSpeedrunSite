import React, {Component} from 'react';
import NavBar from '../leaderboard/NavBar';

class About extends Component{
	render(){
		return(
		<div className="App">
        	<NavBar />
			<p>This site is for making Terraria Speedruns look really cool and adding features to make it more engaging</p>
			<p>Made by BandsWithLegends!</p>
		</div>
		)
	}
}

export default About;