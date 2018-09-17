import React, {Component} from 'react';
import './Histogram.css'
import * as d3 from 'd3'
import {runnerIdToNames} from "../helper/idTables";

class Histogram extends Component {
  render() {
    if (this.props.data.length > 0) {
      const margin = {top:40, bottom:40, left:40, right:40}
      const {data, width, height} = this.props

      const x = d3.scaleBand()
          .rangeRound([0, width- margin.left - margin.right])
          .domain(data.map(d => d.id))
          .padding(0.1)
      const y = d3.scaleLinear()
        .range([height- margin.top - margin.bottom, 0])
        .domain([0, d3.max(data, d => d.fame)])

      return (<svg id="hallOfFamePie" width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g
            className="axis axis--x"
            transform={`translate(0, ${height})`}
            ref={node => d3.select(node).call(d3.axisBottom(x))}
          />
          <g className="axis axis--y">
            <g ref={node => d3.select(node).call(d3.axisLeft(y).ticks(10))} />
            <text transform="rotate(-90)" y="6" dy="0.71em" textAnchor="end">
              Fame
            </text>
          </g>
          {data.map(d => (
            <rect
              key={d.id}
              className="bar"
              x={x(d.id)}
              y={y(d.fame)}
              width={x.bandwidth()}
              height={height - y(d.fame)- margin.bottom}
            />
          ))}
        </g>
      </svg>)
    } else {
      return null;
    }
  }
}

export default Histogram;