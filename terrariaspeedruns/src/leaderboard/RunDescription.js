import React, {Component} from 'react';
import './RunDescription.css';

class RunDescription extends Component {
	render(){
		const {runner, time, date} = this.props;
		return(
			<div> {runner} {time} {date}</div>
		)
	}
}

export default RunDescription