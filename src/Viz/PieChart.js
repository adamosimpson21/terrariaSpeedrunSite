import React, {Component} from 'react'
import './PieChart.css'
import * as d3 from "d3";
import {runnerIdToNames} from "../helper/idTables";

class PieChart extends Component {
  render() {
    if (this.props.data.length > 0) {
      const {innerRadius, outerRadius, data, width, height} = this.props
      const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(d => d.startAngle + Math.PI * 1.5)
        .endAngle(d => d.endAngle + Math.PI * 1.5)
      const colors = d3.scaleOrdinal(d3.schemeCategory10)
      const pie = d3.pie().padAngle(.05)
      const arcs = pie(data.map(d => d.fame))
      return (<svg id="hallOfFamePie" width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {arcs.map(d => (
            <g className="arc" key={`a${d.index}`}>
              <path d={arc(d)} fill={colors(d.index)}/>
              <foreignObject transform={`translate(${arc.centroid(d)})`} dy=".35em" className="hallOfFamePieLabel">
                <div className="tooltip">
                  {runnerIdToNames[data[d.index].id]}:
                  Gold:{data[d.index].place["1"]},
                  Silver:{data[d.index].place["2"]},
                  Bronze:{data[d.index].place["3"]}
                </div>
              </foreignObject>
            </g>
          ))}
        </g>
      </svg>)
    } else {
      return null;
    }
  }
}

export default PieChart;