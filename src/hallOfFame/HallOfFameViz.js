import React, {Component} from 'react'
import './HallOfFameViz.css'
import PieChart from '../Viz/PieChart'
import Histogram from '../Viz/Histogram'

class HallOfFameViz extends Component{
  render(){
    const height = 400;
    const width = 400;
    if(this.props.type==='Pie'){
      return(<PieChart data={this.props.data} height={height} width={width} outerRadius={200} innerRadius={10}  />)
    } else if (this.props.type==='Histogram'){
      return(<Histogram data={this.props.data} height={height} width={width} />)
    }
  }
}


export default HallOfFameViz;