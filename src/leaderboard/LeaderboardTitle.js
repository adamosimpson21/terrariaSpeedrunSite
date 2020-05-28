import React, {Component} from 'react'
import './LeaderboardTitle.css'
import BackFrame from '../innerComponents/BackFrame'
import {DIFFICULTY, SEEDED} from "../helper/Constants";
import theGuideImage from '../img/theGuide.png'
import Button from "../innerComponents/Button";
import classNames from 'classnames';

class LeaderboardTitle extends Component {
  render () {
    const {diff, seed, numPlayers, changeLeaderboardHandler, patch} = this.props
    return (
      <div className="leaderboard-title">
        <div className='leaderboard-variable-wrapper'>
          <div className="leaderboard-variable-buttons">
            <Button label='Normal' className={classNames('buttonHOC', {'pressed': diff!=='Normal'})} onClick={(e) => changeLeaderboardHandler(e, 'Normal')} />
            {patch !== 'Journey' &&
              <Button label='Expert' className={classNames('buttonHOC', {'pressed': diff !== 'Expert'})}
                    onClick={(e) => changeLeaderboardHandler(e, 'Expert')}/>
            }
            { patch !=='Journey' &&
              < Button label='Master' className={classNames('buttonHOC', {'pressed': diff!=='Master'})} onClick={(e) => changeLeaderboardHandler(e, 'Master')} />
            }
          </div>
          <div className="leaderboard-image-wrapper">
            <img src={DIFFICULTY[diff].IMAGE} alt={`${diff} difficulty icon`} title={`${diff} difficulty`} className="leaderboard-title-difficulty-icon" />
          </div>
        </div>
        <div className='leaderboard-variable-wrapper'>
          <div className="leaderboard-variable-buttons">
            <Button label='Seeded' className={classNames('buttonHOC', {'pressed': seed!=='Seeded'})} onClick={(e) => changeLeaderboardHandler(e, 'Seeded')} />
            <Button label='Random' className={classNames('buttonHOC', {'pressed': seed!=='Random'})} onClick={(e) => changeLeaderboardHandler(e, 'Random')} />
          </div>

          <div className="leaderboard-image-wrapper">
          <img src={SEEDED[seed].IMAGE} alt={`${seed} seed icon`} title={`${seed} seed`} className="leaderboard-title-seed-icon" />
          </div>
        </div>
        <div className='leaderboard-variable-wrapper'>
          <div className="leaderboard-variable-buttons">
            <Button label='1 Player' className={classNames('buttonHOC', {'pressed': numPlayers!=='1 Player'})} onClick={(e) => changeLeaderboardHandler(e, '1 Player')} />
            <Button label='2 Player' className={classNames('buttonHOC', {'pressed': numPlayers!=='2 Players'})} onClick={(e) => changeLeaderboardHandler(e, '2 Players')} />
          </div>
          <div className="leaderboard-image-wrapper">
          <img src={theGuideImage} alt="1 Player" title="1 Player" className="leaderboard-title-one-player-icon" />
          {
            numPlayers !== '1 Player' &&
            <img src={theGuideImage} alt="2 Players" title="2 Players" className="leaderboard-title-two-player-icon" />
          }
          </div>
        </div>
        <div className='leaderboard-variable-wrapper'>
          <div className="leaderboard-variable-buttons">
            <Button label='1.4' className={classNames('buttonHOC', {'pressed': patch!=='1.4'})} onClick={(e) => changeLeaderboardHandler(e, '1.4')} />
            <Button label='1.4 NMA' className={classNames('buttonHOC', {'pressed': patch!=='1.4 NMA'})} onClick={(e) => changeLeaderboardHandler(e, '1.4 NMA')} />
            <Button label='Journey' className={classNames('buttonHOC', {'pressed': patch!=='Journey'})} onClick={(e) => changeLeaderboardHandler(e, 'Journey')} />
          </div>
        </div>
      </div>
    )
  }
}

export default BackFrame(LeaderboardTitle)
