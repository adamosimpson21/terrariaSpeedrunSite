import React, { Component } from 'react';
import './Leaderboard.css';
// import RunDescription from './RunDescription';
import LeaderboardTitle from './LeaderboardTitle';
import RunList from './RunList';
import NavBar from './NavBar';
import SideBar from './SideBar';

class Leaderboard extends Component {
  constructor(props){
  	super(props);
    this.state= {
        //Changing this variable to one of the full game categories (ML, NE, APreHM, AB) will render the correct leaderboard
        category:"Night's Edge",
        //defaults
        diff:"Normal",
        seed:"Random"
      } 

    this.handler = this.handler.bind(this);
  }

  //thankfully, every variable has a different english word attached to it, so one handler can work for all clicks
  handler(event, variable){
    event.preventDefault()
    if(variable==="Normal"||variable==="Expert"){
      this.setState({
        diff:variable
      })
    } else if(variable==="Random"||variable==="Seeded"){
      this.setState({
        seed:variable
      })
    } 
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      {/* TODO: put the sidebar on the side, add more buttons to sidebar. Style things */}
        <SideBar handler={this.handler}/>
        <LeaderboardTitle category={this.state.category} diff={this.state.diff} seed={this.state.seed}/>
        <RunList category={this.state.category} diff={this.state.diff} seed={this.state.seed}/>
      </div>
    );
  }
}


export default Leaderboard;
