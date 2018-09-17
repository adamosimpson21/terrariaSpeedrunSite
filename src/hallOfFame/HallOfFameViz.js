import React, {Component} from 'react'
import './HallOfFameViz.css'
import PieChart from '../Viz/PieChart'
import Histogram from '../Viz/Histogram'
import BackFrame from '../innerComponents/BackFrame'

class HallOfFameViz extends Component{
  render(){
    const height = 400;
    const width = 400;
    if(this.props.type==='Pie'){
      return(<div className="hallOfFameViz"><PieChart data={this.props.data} height={height} width={width} outerRadius={200} innerRadius={10}  /></div>)
    } else if (this.props.type==='Histogram'){
      return(<div className="hallOfFameViz"><Histogram data={this.props.data} height={height} width={width} /></div>)
    }
  }
}


export default BackFrame(HallOfFameViz);