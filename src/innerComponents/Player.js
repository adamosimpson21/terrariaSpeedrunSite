import React, {Component} from 'react'
import {runnerIdToNames} from '../helper/idTables.js'
import { Link } from 'react-router-dom'
import './Player.css'

class Player extends Component {
  render () {
    const {id} = this.props
    return (
      <div className='playerDisplay'>
        <Link className='playerLink' to={'/profile/' + id}>{runnerIdToNames[id]}</Link>
      </div>
    )
  }
}

export default Player
