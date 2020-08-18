import React, { Component } from 'react'
import './Leaderboard.css'
import LeaderboardTitle from './LeaderboardTitle'
import RunList from './RunList'
import SideBar from './SideBar'
import BossBar from './BossBar'
import {categoryIDLookUp} from "../helper/idTables";
import {addRunnerNames} from "../helper/idConstructors";

class Leaderboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: "Moon Lord",
      diff: 'Normal',
      seed: 'Random',
      numPlayers: '1 Player',
      patch: 'Journey'
    }

    this.changeLeaderboardHandler = this.changeLeaderboardHandler.bind(this)
  }

  // thankfully, every variable has a different english word attached to it, so one handler can work for all clicks
  changeLeaderboardHandler (event, variable) {
    event.preventDefault()
    if ((variable === 'Normal' || variable === 'Expert' || variable === 'Master') && this.state.patch !=='Journey') {
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
    } else if (variable === '1.4' || variable === '1.4 NMA' || variable==='Journey') {
      if(variable === 'Journey'){
        this.setState({
          patch: variable,
          diff: 'Normal'
        })
      } else {
        this.setState({
          patch: variable
        })
      }
    } else if (categoryIDLookUp.hasOwnProperty(variable)) {
      this.setState({
        category: variable
      })
    }
  }

  render () {
    return (
      <div className='leaderboardBody'>
        <LeaderboardTitle changeLeaderboardHandler={this.changeLeaderboardHandler} {...this.state}  />
        <div className="leaderboard-core">
          <SideBar {...this.state} />
          <RunList {...this.state}  />
        </div>
        <BossBar {...this.state}  changeLeaderboardHandler={this.changeLeaderboardHandler}/>
      </div>
    )
  }
}

export default Leaderboard
