import React, {Component} from 'react';
import BackFrame from '../innerComponents/BackFrame';
import './RaceRules.css';

class RaceRules extends Component{
  render(){
    return(
      <div className="raceRules">
        <p>Race against your friends and the top speed runners to see who can get the best time. If you're interested in setting up a race, contact BandsWithLegends through discord and ask about how to get your race displayed here!</p>
      </div>
    )
  }
}

export default BackFrame(RaceRules);