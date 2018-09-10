import React, {Component} from 'react'
import './HallOfFameViz.css'
import * as d3 from 'd3';

class HallOfFameViz extends Component {
  render () {
    if(this.props.fameList.length>0){
      let arc = d3.arc()
        .innerRadius(this.props.innerRadius)
        .outerRadius(this.props.outerRadius)
      let colors = d3.scaleOrdinal(d3.schemeAccent)
      let pie = d3.pie().padAngle(.05)
      let arcs = pie(this.props.fameList.map(d => d.fame))
      console.log(arcs)
      return(<svg id="hallOfFamePie" width={this.props.width} height={this.props.height}>
        <g transform={`translate(${this.props.width / 2}, ${this.props.height / 2})`}>
          {arcs.map(d => (
            <g className="arc" key={`a${d.index}`}>
              <path d={arc(d)} fill={colors(d.data)} />
              <text transform={`translate(${arc.centroid(d)})`} dy=".35em">
                {d.data}
              </text>
            </g>
          ))}
        </g>
      </svg>)
    } else {
      return(
        <div>
          <p>Loading Hall of Fame...(can sometimes take 10-15 seconds)</p>
        </div>
      )
    }
  }
}

export default HallOfFameViz;