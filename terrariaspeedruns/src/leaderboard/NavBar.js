import React, {Component} from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

class NavBar extends Component{
	render(){
		return(
			<header>
					<h2>
						<li><Link to="/">Home</Link></li>
					</h2>
					<nav>
						<li><Link to="/leaderboard">Leaderboard</Link></li>
						<li><Link to="/discord">Discord</Link></li>
						<li><Link to="/races">Races</Link></li>
						<li><Link to="/resources">Resources</Link></li>
						<li><Link to="/about">About</Link></li>
					</nav>
			</header>
		)
	}
}

export default NavBar;