import React, {Component} from 'react';
import BackFrame from '../innerComponents/BackFrame';
import './Discord.css'

class Discord extends Component{
	render(){
		return(
		<div className="discord">
			<p>Join the Discord to come and chat with us!</p>
			<a href='https://discord.gg/0maR10mlOHGwvuMM'>Click me!</a>
		</div>
		)
	}
}

export default BackFrame(Discord);