import React, {Component} from 'react';
import NavBar from '../innerComponents/NavBar';

class Resources extends Component{
	render(){
		return(
		<div className="App">
        	<NavBar />
			<p>This is where all of the helpful links to outside pages go</p>
		{/* TODO: make components for these */}
			<ul>
				<li>Guides</li>
				<li>How I do spedran</li>
				<li>Eye of Cthulhu in 1 minutE!!</li>
				<li>Guides</li>
			</ul>
			<ul>
				<li>Common Strategies in 1.3.5</li>
				<li>Duping</li>
				<li>Duck Skip</li>
				<li>Pillar Strats</li>
				<li>Boss Quick-kills</li>
			</ul>
			<ul>
				<li>Splits</li>
			</ul>
			<ul>
				<li>Seeds</li>
			</ul>
			<ul>
				<li>Tools</li>
			</ul>
		</div>
		)
	}
}

export default Resources;