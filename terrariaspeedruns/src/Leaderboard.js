import React, { Component } from 'react';
import logo from './logo.svg';
import './Leaderboard.css';
import RunDescription from './RunDescription';
import LeaderboardTitle from './LeaderboardTitle';
import RunList from './RunList';
import NavBar from './NavBar';

class Leaderboard extends Component {
  

  

  render() {
    return (
      <div className="App">
        <NavBar />
        <LeaderboardTitle category="Moon Lord" diff="Normal" seed="Seeded"/>
        <RunList />
      </div>
    );
  }
}

export default Leaderboard;
