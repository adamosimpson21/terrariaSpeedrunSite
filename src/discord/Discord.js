import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import './Discord.css'

class Discord extends Component {
  render () {
    return (
      <div className='discord'>
        <p>Join the Discord to come and chat with us!</p>
        <iframe className="discordWidget" title='discordWidget' src='https://discordapp.com/widget?id=140297487884877824&theme=dark' width='350' height='500' allowtransparency='true' frameBorder='0' />
      </div>
    )
  }
}

export default BackFrame(Discord)
