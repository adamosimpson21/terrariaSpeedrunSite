import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component{
	render(){
		return(
			<header>
				<h2>
					<a href="#">Home</a>
				</h2>
				<nav>
					<li><a href="#">Discord</a></li>
					<li><a href="#">Races</a></li>
					<li><a href="#">Resources</a></li>
					<li><a href="#">About</a></li>
				</nav>
			</header>
		)
	}
}

export default NavBar;