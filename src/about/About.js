import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import './About.css'
import { Grid, Row, Col } from 'react-flexbox-grid'

class About extends Component {
  render () {
    return (
      <div className='aboutBody'>
        <Grid fluid>
          <h1>TerrariaSpeedruns.com</h1>
          <p>Hello! Welcome to the official website of the Terraria Speedrunning Community!</p>
          <Row>
            <Col md={10}>
              <p>We are a group of people dedicated to pushing Terraria to its limits and beating the game as fast as possible!  Here you can find runs of the game, runners that run the game, and information about speedrunning Terraria to get you started. </p>
            </Col>
            <Col md={2}>
              <img className='aboutImage' src={require('../img/moonlord.png')} alt='Moon Lord' />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={2}>
              <img className='aboutImage' src={require('../img/kingslime.png')} alt='King Slime' />
            </Col>
            <Col md={10}>
              <p>You can also join our official <a href='https://discord.gg/0maR10mlOHGwvuMM'>discord</a> server to talk to other runners and ask questions.</p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={2}>
              <img className='aboutImage' src={require('../img/lunaticWorshiperR.png')} alt='Lunatic Worshiper right facing' /><img className='aboutImage' src={require('../img/lunaticWorshiperR.png')} alt='Lunatic Worshiper right facing' />
            </Col>
            <Col md={8}>
              <p>Made by BandsWithLegends, LilQuaz, and many other contributors! We do not own any rights to Terraria or it's assets. We are merely humble admirers. If you're interested in contributing to this site, please contact BandsWithLegends via Discord.</p>
            </Col>
            <Col md={2}>
              <img className='aboutImage' src={require('../img/lunaticWorshiperL.png')} alt='Lunatic Worshiper left facing' /><img className='aboutImage' src={require('../img/lunaticWorshiperL.png')} alt='Lunatic Worshiper left facing' />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default BackFrame(About)
