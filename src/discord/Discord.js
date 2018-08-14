import React, {Component} from 'react';
import NavBar from '../innerComponents/NavBar';

class Discord extends Component{
	render(){
		return(
		<div className="App">
        	<NavBar />
			<p>Join the Discord to come and chat with us!</p>
			<a href='https://discord.gg/0maR10mlOHGwvuMM'>Click me!</a>
		</div>
		)
	}
}

export default Discord;