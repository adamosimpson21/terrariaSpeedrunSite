import React, {Component} from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import Icon from '../innerComponents/Icon';
import ResponsiveMenu from 'react-responsive-navbar';

class NavBar extends Component{
	render(){
		return(
      <ResponsiveMenu
        menuOpenButton={<header>
                          <Icon icon="hamburgerMenu" />
                        </header>}
        menuCloseButton={<header className="headerCloseButton">
                          <Icon icon="close"/>
                        </header>}
        changeMenuOn="700px"
        largeMenuClassName="largeMenu"
        smallMenuClassName="smallMenu"
        menu={
          <header>
            <div className="fullNavbar">
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
            </div>
          </header>
        }
			/>
		)
	}
}

export default NavBar;