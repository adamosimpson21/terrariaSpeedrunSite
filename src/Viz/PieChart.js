import React, {Component} from 'react'
import './PieChart.css'
import * as d3 from "d3";
import PieSlice from "./PieSlice";

export default class PieChart extends Component {
  render() {
    if (this.props.data.length > 0) {
      const {data, width, height} = this.props
      const colors = d3.scaleOrdinal(d3.schemeCategory10)
      const pie = d3.pie().padAngle(.05)
      const arcs = pie(data.map(d => d.fame))
      return (<svg id="hallOfFamePie" width={width} height={height}>
        <g transform={`translate(${width * 0.5}, ${height / 2})`}>
          {arcs.map(d => (
            <PieSlice {...this.props} d={d} colors={colors} key={d.index}
                      setHoveredRunner={this.props.setHoveredRunner} />
          ))}
        </g>
      </svg>)
    } else {
      return null;
    }
  }
}
