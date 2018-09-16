import React, {Component} from 'react'
import './HallOfFameViz.css'
import * as d3 from 'd3';
import { runnerIdToNames } from '../helper/idTables'

class HallOfFameViz extends Component {
  render () {
    if(this.props.fameList.length>0){
      const {innerRadius, outerRadius, fameList, width, height} = this.props
      const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(d => d.startAngle + Math.PI*1.5)
        .endAngle(d => d.endAngle + Math.PI*1.5)
      const colors = d3.scaleOrdinal(d3.schemeAccent)
      const pie = d3.pie().padAngle(.05)
      const arcs = pie(fameList.map(d => d.fame))
      return(<svg id="hallOfFamePie" width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {arcs.map(d => (
            <g className="arc" key={`a${d.index}`} >
              <title>Gold:{fameList[d.index].place["1"]},
                      Silver:{fameList[d.index].place["2"]},
                      Bronze:{fameList[d.index].place["3"]}</title>
              <path d={arc(d)} fill={colors(d.index)} />
              <text transform={`translate(${arc.centroid(d)})`} dy=".35em" className="hallOfFamePieLabel">
                {runnerIdToNames[fameList[d.index].id]}
              </text>
            </g>
          ))}
        </g>
      </svg>)
    } else {
      return null;
    }
  }
}

export default HallOfFameViz;