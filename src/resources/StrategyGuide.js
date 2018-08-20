import React, {Component} from 'react';
import BackFrame from '../innerComponents/BackFrame';
import {guideBody} from './guideBody';

class StrategyGuide extends Component{
	render(){
		const guideInfo = guideBody[this.props.match.params.page];
		return(
		<div>
			<h1>{guideInfo.title}</h1>
			<br />
			<p>
				{guideInfo.body}
			</p>
			<a href={guideInfo.link}>Link to {guideInfo.title}</a>
		</div>
		)
	}
}

export default BackFrame(StrategyGuide);