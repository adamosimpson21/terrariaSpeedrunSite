import React, {Component} from 'react'
import './SideBar.css'
import Button from '../innerComponents/Button'
import BackFrame from '../innerComponents/BackFrame'
import {categoryIDLookUp} from '../helper/idTables';

class SideBar extends Component {
  render () {
    const categoryButtons = []
    for(let boss in categoryIDLookUp){
      categoryButtons.push(<Button label={boss} handleClick={(e) => this.props.handler(e, boss)} />)
    }
    return (
      <div className='sideBar'>
        <br />
        <Button label='Normal' handleClick={(e) => this.props.handler(e, 'Normal')} />
        <Button label='Expert' handleClick={(e) => this.props.handler(e, 'Expert')} />
        <br />
        <br />
        <Button label='Seeded' handleClick={(e) => this.props.handler(e, 'Seeded')} />
        <Button label='Random' handleClick={(e) => this.props.handler(e, 'Random')} />
        <br />
        <br />
        {categoryButtons}
      </div>
    )
  }
}

export default BackFrame(SideBar)
