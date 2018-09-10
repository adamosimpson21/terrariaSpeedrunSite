import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import {guideBody} from './guideBody'
import './StrategyGuide.css';

class StrategyGuide extends Component {
  render () {
    const guideInfo = guideBody[this.props.match.params.page]
    return (
      <div className="guideBody">
        <h1>{guideInfo.title}</h1>
        <br />
        {guideInfo.body}
        {guideInfo.link && <a href={guideInfo.link}>Link to {guideInfo.title}</a>}
      </div>
    )
  }
}

export default BackFrame(StrategyGuide)
