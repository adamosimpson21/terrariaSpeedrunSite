import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './UpcomingRace.css'

class UpcomingRace extends Component{
	render(){
		const {key, date, time, category, difficulty, seeded, players} = this.props;
		return(
			<div className="upcomingRace">
				<Grid fluid>
					<Row>
						{category}, {difficulty}, {seeded} 
					</Row>
					<Row>
						{players}
					</Row>
					<Row>
						{date}, {time} 
					</Row>			
				</Grid>
			</div>
		)
	}
}

export default UpcomingRace;