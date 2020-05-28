import React, {Component} from 'react';
import './Histogram.css'
import * as d3 from 'd3'
import {runnerIdToNames} from "../helper/idTables";
import classNames from 'classnames';

class Histogram extends Component {
  constructor(props){
    super(props)
    this.state = {
      hoveredPlayerIndex:-1
    }

    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
  }

  handleOnMouseOver(playerData, color, index){
    this.props.setHoveredRunner(Object.assign({},playerData, {color}));
    this.setState({hoveredPlayerIndex: index});
  }

  render() {
    if (this.props.data.length > 0) {
      const {data, width, height} = this.props
      const margin = {top:0, bottom:width*0.2, left:width*0.08, right:width*0.05}
      const colors = d3.scaleOrdinal(d3.schemeCategory10)

      const x = d3.scaleBand()
        .range([width- margin.left - margin.right, 0])
        .domain(data.map(d => runnerIdToNames[d.id]))
        .padding(0.1)
      const y = d3.scaleLinear()
        .range([height- margin.top - margin.bottom, 0])
        .domain([0, d3.max(data, d => d.fame)])

      return (<svg id="hallOfFameHisto" width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g
            className="axis axis--x"
            transform={`translate(0, ${height-margin.bottom-margin.top})`}
            ref={node => d3.select(node).call(d3.axisBottom(x))}
          />
          <g className="axis axis--y">
            <g ref={node => d3.select(node).call(d3.axisLeft(y).ticks(10))} />
            <text transform="rotate(-90)" y="6" dy="0.71em" textAnchor="end" style={{color: '#ccc'}}>
              Fame
            </text>
          </g>
          {data.map((d,index ) => (
            <rect
              key={d.id}
              className={classNames("bar", {'is-bar-hovered': this.state.hoveredPlayerIndex === index})}
              x={x(runnerIdToNames[d.id])}
              y={y(d.fame)}
              width={x.bandwidth()}
              fill={colors(index)}
              height={height - margin.bottom - margin.top - y(d.fame)}
              onMouseOver={() => this.handleOnMouseOver(d, colors(index), index)}
              onMouseOut={() => this.setState({hoveredPlayerIndex: -1})}
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
