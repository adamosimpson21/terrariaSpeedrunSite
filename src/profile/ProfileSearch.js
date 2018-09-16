import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import './ProfileSearch.css'
import Player from '../innerComponents/Player'
import {runnerNameToId} from "../helper/helperfunctions";
import Icon from '../innerComponents/Icon'

class ProfileSearch extends Component {
  constructor(props){
    super(props)
    this.state={
      username:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  render () {
    return (
      <div>
        <h1>Search for a player's profile</h1>
        <form action="">
          <label htmlFor="username">
            <input type="text" className="profileSearchInput" placeholder='Input Username Here' value={this.state.username} onChange={this.handleChange}/>
          </label>
        </form>
        {this.state.username !== '' && (runnerNameToId(this.state.username) ?
          <div className="playerFound"><Player id={runnerNameToId(this.state.username)}/><Icon icon='success'/></div> :
          <div className="playerFound">{this.state.username} : Not found</div>
        )}
      </div>
    )
  }
}

export default BackFrame(ProfileSearch);