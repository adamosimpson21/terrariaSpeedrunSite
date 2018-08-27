import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
// import Category from './Category'
// import Tools from './Tools'
// import Seeds from './Seeds'
// import StrategyGuide from './StrategyGuide'
import Button from '../innerComponents/Button'
import {Link} from 'react-router-dom'

class Resources extends Component {
  render () {
    // Fill out the guideBody with meaningful data. Separate sections with BackFrame
    return (
      <div>
        <p>Here you can find all the guides and strategies behind Terraria speedruns.</p>
        <h3>Routes</h3>
        <Link to='/StrategyGuide/moonLord'><Button label='Moon Lord' /></Link>
        <Link to='/StrategyGuide/nightsEdge'><Button label="Night's Edge" /></Link>
        <Link to='/StrategyGuide/allBosses'><Button label='All Bosses' /></Link>
        <Link to='/StrategyGuide/allPreHMBosses'><Button label='All Pre-HM Bosses' /></Link>

        <h3>How to Break the Game</h3>
        <Link to='/StrategyGuide/duping'><Button label='Duping' /></Link>
        <Link to='/StrategyGuide/duckSkip'><Button label='Duck Skip' /></Link>
        <Link to='/StrategyGuide/pillars'><Button label='Pillars' /></Link>

        <Link to='/StrategyGuide/splits'><Button label='Splits' /></Link>

        <h3>World Record Seeds</h3>
        <Link to='/StrategyGuide/908319048'><Button label='908319048' /></Link>
        <Link to='/StrategyGuide/371378928'><Button label='371378928' /></Link>

        <h3>Tools</h3>
        <Link to='/StrategyGuide/splits'><Button label='Splits' /></Link>
        <Link to='/discord'><Button label='Discord' /></Link>

      </div>
    )
  }
}

export default BackFrame(Resources)
