import React, { Component } from 'react'
import './Leaderboard.css'
import LeaderboardTitle from './LeaderboardTitle'
import RunList from './RunList'
import SideBar from './SideBar'
import BossBar from './BossBar'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {categoryIDLookUp} from "../helper/idTables";

class Leaderboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: "Moon Lord",
      diff: 'Normal',
      seed: 'Seeded',
      numPlayers: '1 Player'
    }

    this.handler = this.handler.bind(this)
  }

  // thankfully, every variable has a different english word attached to it, so one handler can work for all clicks
  handler (event, variable) {
    event.preventDefault()
    if (variable === 'Normal' || variable === 'Expert') {
      this.setState({
        diff: variable
      })
    } else if (variable === 'Random' || variable === 'Seeded') {
      this.setState({
        seed: variable
      })
    } else if (variable === '1 Player' || variable === '2 Players') {
      this.setState({
        numPlayers: variable
      })
    } else if (categoryIDLookUp.hasOwnProperty(variable)) {
      this.setState({
        category: variable
      })
    }
  }

  render () {
    // TODO: wrap Title and RunList in BackFrame together
    return (
      <div className='leaderboardBody'>
        <Grid fluid>
          <Row>
            <Col md={2}>
              <SideBar handler={this.handler} />
            </Col>
            <Col md={10}>
              <LeaderboardTitle category={this.state.category} diff={this.state.diff} seed={this.state.seed} numPlayers={this.state.numPlayers} />
              <br />
              <RunList category={this.state.category} diff={this.state.diff} seed={this.state.seed} numPlayers={this.state.numPlayers} />
            </Col>
          </Row>
          <Row>
            <BossBar handler={this.handler}/>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Leaderboard
