import React, {Component} from 'react';
import BackFrame from '../innerComponents/BackFrame';

class About extends Component{
	render(){
		//TODO: Style Text, Center text, Expand on content, add pictures?
		return(
		<div className="App">
        	<h1>About This Site</h1>
			<p>Hello!  Welcome to the official website of the Terraria Speedrunning Community!  We are a group of people dedicated to pushing Terraria to its limits and beating the game as fast as possible!  Here you can find runs of the game, runners that run the game, and information about speedrunning Terraria to get you started.  You can also join our official discord server to talk to other runners and ask questions.</p>
			<p>Made by BandsWithLegends and LilQuaz!</p>
		</div>
		)
	}
}

export default BackFrame(About);