import React, {Component} from 'react'
import './Button.css'

class Button extends Component {
  constructor (props) {
    super(props)
  }
  render (){
    const {label, handleClick} = this.props
      return (
        <button
          className='buttonHOC'
          onClick={handleClick}
          {...this.props}>
          {label}
        </button>
      )
  }
}

export default Button
