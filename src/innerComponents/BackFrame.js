import React, {Component} from 'react'
import './BackFrame.css'

const BackFrame = (WrappedComponent) => {
  class HOC extends Component {
    render () {
      return (
        <div className='backFrame'>
          <WrappedComponent
            {...this.props}
          />
        </div>)
    }
  }

  return HOC
}

export default BackFrame
