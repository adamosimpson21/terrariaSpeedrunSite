import React, {Component} from 'react'
import UpcomingRace from './UpcomingRace'
import './RaceList.css'

class RaceList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // Dummy Data
      races: [{
        date: '09-20-2019',
        time: '17:00 UTC',
        numPlayers: 4,
        category: 'Moon Lord',
        difficulty: 'Normal',
        seeded: 'Random',
        players: ['kj92v478', 'v81vpgp8', 'zxzl7vn8', '48gn04pj']
      }, {
        date: '09-23-2019',
        time: '21:00 UTC',
        numPlayers: 2,
        category: "Night's Edge",
        difficulty: 'Expert',
        seeded: 'Seeded',
        players: ['kj92v478', 'v81vpgp8']
      }, {
        date: '09-29-2019',
        time: '19:00 UTC',
        numPlayers: 3,
        category: 'Moon Lord',
        difficulty: 'Normal',
        seeded: 'Random',
        players: ['kj92v478', '48gn04pj', 'zxzl7vn8']
      }]
    }
  }

  render () {
    const allRaces = this.state.races.map((race, index) => (
      <UpcomingRace
        key={index}
        {...race}
      />
    ))
    return (
      <div className='App'>
        <div className='raceList'>
          {allRaces}
        </div>
      </div>
    )
  }
}

export default RaceList
