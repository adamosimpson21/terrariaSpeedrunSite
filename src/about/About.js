import React, {Component} from 'react';
import NavBar from '../innerComponents/NavBar';

class About extends Component{
	render(){
		return(
		<div className="App">
        	<NavBar />
        	<h1>About This Site</h1>
			<p>Hello!  Welcome to the official website of the Terraria Speedrunning Community!  We are a group of people dedicated to pushing Terraria to its limits and beating the game as fast as possible!  Here you can find runs of the game, runners that run the game, and information about speedrunning Terraria to get you started.  You can also join our official discord server to talk to other runners and ask questions.</p>
			<p>Made by BandsWithLegends!</p>
		</div>
		)
	}
}

export default About;