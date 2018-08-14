import React, { Component } from 'react';
import './Leaderboard.css';
import LeaderboardTitle from './LeaderboardTitle';
import RunList from './RunList';
import NavBar from '../innerComponents/NavBar';
import SideBar from './SideBar';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Leaderboard extends Component {
  constructor(props){
  	super(props);
    this.state= {
        //Changing this variable to one of the full game categories (ML, NE, APreHM, AB) will render the correct leaderboard
        category:"Night's Edge",
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
    } else if(variable==="Moon Lord" || variable==="Night's Edge" || variable==="All Bosses" || variable==="All Pre-HM Bosses"){
      this.setState({
        category:variable
      })
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      {/* TODO: add more buttons to sidebar. Style things */}
      <Grid fluid>
        <Row>
          <Col md={2}>
            <SideBar handler={this.handler}/>
          </Col>
          <Col md={10}>
            <LeaderboardTitle category={this.state.category} diff={this.state.diff} seed={this.state.seed}/>
            <RunList category={this.state.category} diff={this.state.diff} seed={this.state.seed}/>
          </Col>
        </Row>
      </Grid>
        
      </div>
    );
  }
}


export default Leaderboard;
