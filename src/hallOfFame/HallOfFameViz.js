import React, {Component} from 'react'
import './HallOfFameViz.css'
import PieChart from '../Viz/PieChart'
import Histogram from '../Viz/Histogram'
import BackFrame from '../innerComponents/BackFrame'

class HallOfFameViz extends Component{
  render(){
    const {innerWidth} = window;
    const height = innerWidth * 0.35;
    const width = innerWidth * 0.37;
    if(this.props.type==='Pie'){
      return(<div className="hallOfFameViz">
        <PieChart
          data={this.props.data}
          height={height}
          width={width}
          outerRadius={innerWidth * 0.16}
          innerRadius={innerWidth*0.01}
          cornerRadius={innerWidth*0.01}
          setHoveredRunner={this.props.setHoveredRunner}
        />
      </div>)
    } else if (this.props.type==='Histogram'){
      return(<div className="hallOfFameViz">
        <Histogram
          data={this.props.data}
          height={height}
          width={width}
          setHoveredRunner={this.props.setHoveredRunner}
        />
      </div>)
    }
  }
}


export default BackFrame(HallOfFameViz);
