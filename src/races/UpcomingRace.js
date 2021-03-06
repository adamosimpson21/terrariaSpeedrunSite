import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import BackFrame from '../innerComponents/BackFrame';
import Player from '../innerComponents/Player';
import './UpcomingRace.css'
import {categoryIDLookUp} from "../helper/idTables";
import Icon from '../innerComponents/Icon'

class UpcomingRace extends Component{

  importAll (r) {
    let images = {}
    // eslint-disable-next-line
    r.keys().map(item => { images[item.replace('./', '')] = r(item) })
    return images
  }

	render(){
		const {date, time, category, difficulty, seeded} = this.props;
    const images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/))
		const twitchLink = "https://twitch.tv/BandsWithLegends"
		const playerList = this.props.players.map(player => <Player id={player} />)
		return(
			<div className="upcomingRace">
				<Grid fluid>
					<Row>
						<Col md={4}>
							<img className='raceCategoryImage' src={images[categoryIDLookUp[category].image]} alt='category' />
						</Col>
						<Col md={8}>
							<Row className="mb-3">
								{category}, {difficulty}, {seeded}
							</Row>
							<Row className="mb-3 playerNames">
								{playerList}
							</Row>
							<Row>
								{date}, {time} <a href={twitchLink}> <Icon icon="twitch" /></a>
							</Row>
						</Col>
          </Row>
				</Grid>
			</div>
		)
	}
}

export default BackFrame(UpcomingRace)
