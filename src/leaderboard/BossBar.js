import React, {Component} from 'react'
import './BossBar.css'
import Button from '../innerComponents/Button'
import BackFrame from '../innerComponents/BackFrame'
import {categoryIDLookUp} from '../helper/idTables';

class BossBar extends Component {
  isPressed(boolean){
    return 'buttonHOC ' + (boolean ? 'pressed':'')
  }
  render () {
    const categoryButtons = []
    const levelButtons = []
    const {category} = this.props
    for(let boss in categoryIDLookUp){
      if(categoryIDLookUp[boss].type==='level'){
        levelButtons.push(<Button className={this.isPressed(category===boss)} label={boss} key={boss} onClick={(e) => this.props.handler(e, boss)}/>)
      } else if(categoryIDLookUp[boss].type==='category'){
        categoryButtons.push(<Button className={this.isPressed(category===boss)} label={boss} key={boss} onClick={(e) => this.props.handler(e, boss)}/>)
      }
    }

    return (
      <div className='bossBar'>
        {categoryButtons}
        <br/>
        <br/>
        {levelButtons}
      </div>
    )
  }
}

export default BackFrame(BossBar)