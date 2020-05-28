import React, {Component} from 'react'
import {runnerIdToNames} from '../helper/idTables.js'
import { Link } from 'react-router-dom'
import './Player.css'

class Player extends Component {
  render () {
    const {id} = this.props
    if(id){
      return (
        <div className='playerDisplay'>
          {/* TODO: fix runnerIdToNames to get sensible default/look up new runners */}
          <Link className='playerLink' to={'/profile/' + id}>{runnerIdToNames[id] || `New Runner id: ${id}`}</Link>
        </div>
      )
    } else {
      return (
        <div className='playerDisplay'>
          <span className='playerLink'>Guest</span>
        </div>
      )
    }

  }
}

export default Player
