import React, {Component} from 'react'
import './BossBar.css'
import Button from '../innerComponents/Button'
import BackFrame from '../innerComponents/BackFrame'
import {categoryIDLookUp} from '../helper/idTables';

class BossBar extends Component {
  render () {
    const categoryButtons = []
    const levelButtons = []
    for(let boss in categoryIDLookUp){
      if(categoryIDLookUp[boss].type==='level'){
        levelButtons.push(<Button label={boss} handleClick={(e) => this.props.handler(e, boss)}/>)
      } else if(categoryIDLookUp[boss].type==='category'){
        categoryButtons.push(<Button label={boss} handleClick={(e) => this.props.handler(e, boss)}/>)
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