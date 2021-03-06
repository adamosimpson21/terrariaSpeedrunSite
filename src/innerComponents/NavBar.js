import React, {Component} from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";
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
                <NavLink to="/leaderboard"><li>Home</li></NavLink>
              </h2>
              <nav>
                <span className='navSmallMenuRow'>
                  <NavLink activeClassName="activeNavLink" to="/leaderboard"><li>Leaderboard</li></NavLink>
                  <NavLink activeClassName="activeNavLink" to="/halloffame"><li>Hall of Fame</li></NavLink>
                  <NavLink activeClassName="activeNavLink" to="/profile"><li>Profiles</li></NavLink>
                </span>
                <span className='navSmallMenuRow'>
                  <NavLink activeClassName="activeNavLink" to="/discord"><li>Discord</li></NavLink>
                  <NavLink activeClassName="activeNavLink" to="/races"><li>Races</li></NavLink>
                  <NavLink activeClassName="activeNavLink" to="/resources"><li>Resources</li></NavLink>
                  <NavLink activeClassName="activeNavLink" to="/about"><li>About</li></NavLink>
                </span>
              </nav>
            </div>
          </header>
        }
			/>
		)
	}
}

export default NavBar;