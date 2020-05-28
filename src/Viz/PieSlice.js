import React, {Component} from 'react';
import './PieSlice.css'
import * as d3 from "d3";
import classNames from 'classnames';

class PieSlice extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHovered:false
    }

    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
  }

  handleOnMouseOver(index, color){
      this.props.setHoveredRunner(Object.assign({},index, {color}));
      this.setState({isHovered: true});
  }

  render() {
    const {d, data, innerRadius, outerRadius, cornerRadius, colors} = this.props
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .startAngle(d => d.startAngle + Math.PI * 1.5)
      .endAngle(d => d.endAngle + Math.PI * 1.5)
    return (
      <g className={classNames("arc", {'pie-slice-is-hovered': this.state.isHovered})} key={`a${data[d.index].id}`}
         onMouseOver={() => this.handleOnMouseOver(data[d.index], colors(d.index))}
        onMouseOut={() => this.setState({isHovered: false})} >
        <path d={arc(d)} fill={colors(d.index)}/>
      </g>)
  }
}

export default PieSlice;
