import React, {Component} from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import BackFrame from '../innerComponents/BackFrame';
import Player from '../innerComponents/Player';
import './UpcomingRace.css'

class UpcomingRace extends Component{
	render(){
		const {key, date, time, category, difficulty, seeded} = this.props;
		// TODO: style components
		const playerList = this.props.players.map(player => <Player id={player} />)
		return(
			<div className="upcomingRace">
				<Grid fluid>
					<Row>
						{category}, {difficulty}, {seeded} 
					</Row>
					<Row>
						{playerList}
					</Row>
					<Row>
						{date}, {time} 
					</Row>			
				</Grid>
			</div>
		)
	}
}

export default BackFrame(UpcomingRace)
