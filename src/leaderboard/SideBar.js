import React, {Component} from 'react'
import './SideBar.css'
import Button from '../innerComponents/Button'
import BackFrame from '../innerComponents/BackFrame'

class SideBar extends Component {
  isPressed(boolean){
    return 'buttonHOC ' + (boolean ? 'pressed':'')
  }
  render () {
    const {diff, seed, numPlayers} = this.props
    return (
      <div className='sideBar'>
        <Button label='Normal' className={this.isPressed(diff==='Normal')} handleClick={(e) => this.props.handler(e, 'Normal')} />
        <Button label='Expert' className={this.isPressed(diff==='Expert')} handleClick={(e) => this.props.handler(e, 'Expert')} />
        <br />
        <br />
        <Button label='Seeded' className={this.isPressed(seed==='Seeded')} handleClick={(e) => this.props.handler(e, 'Seeded')} />
        <Button label='Random' className={this.isPressed(seed==='Random')} handleClick={(e) => this.props.handler(e, 'Random')} />
        <br />
        <br />
        <Button label='1 Player' className={this.isPressed(numPlayers==='1 Player')} handleClick={(e) => this.props.handler(e, '1 Player')} />
        <Button label='2 Player' className={this.isPressed(numPlayers==='2 Players')} handleClick={(e) => this.props.handler(e, '2 Players')} />
      </div>
    )
  }
}

export default BackFrame(SideBar)
