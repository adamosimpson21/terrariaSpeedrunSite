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
        <Button label='1 Player' handleClick={(e) => this.props.handler(e, '1 Player')} />
        <Button label='2 Player' handleClick={(e) => this.props.handler(e, '2 Players')} />
      </div>
    )
  }
}

export default BackFrame(SideBar)
