import React, {Component} from 'react'
import './SideBar.css'
import Button from '../innerComponents/Button'
import BackFrame from '../innerComponents/BackFrame'

class SideBar extends Component {
  render () {
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
        <Button label='Moon Lord' handleClick={(e) => this.props.handler(e, 'Moon Lord')} />
        <Button label='All Bosses' handleClick={(e) => this.props.handler(e, 'All Bosses')} />
        <Button label="Night's Edge" handleClick={(e) => this.props.handler(e, "Night's Edge")} />
        <Button label='All Pre-HM Bosses' handleClick={(e) => this.props.handler(e, 'All Pre-HM Bosses')} />
      </div>
    )
  }
}

export default BackFrame(SideBar)
