import React, {Component} from 'react'
import './HallOfFame.css'
import HallOfFameTitle from './HallOfFameTitle'
import HallOfFameDescription from './HallOfFameDescription'
import HallOfFameList from './HallOfFameList'
import HallOfFameViz from './HallOfFameViz'
import {fetchErrorHandler} from "../helper/helperfunctions";
import {calculateRunnerFame} from "../helper/countRunnerFame";

class HallOfFame extends Component {
  constructor(props){
    super(props)
    this.state={
      // idList:runnerIds,
      idList:["68w1y0lx","kj92v478","v81vpgp8","zxzl7vn8","48gn04pj","98r41qj1","y8dwmolj","pj0v59xw","dx3mek28","7j4ge05j"],
      fameList: []
    }
  }

  componentDidMount(){
    this.loadScores(this.state.idList)
  }

  componentDidUpdate (prevProps) {
    // prevent infinite loops of updating
    if (this.props !== prevProps) {
      this.loadScores(this.state.idList)
    }
  }

  loadScores(idList){
    function loadScore(id){
      return fetch("https://www.speedrun.com/api/v1/users/" + id + "/personal-bests")
        .then(fetchErrorHandler)
        .then(data => {
          let fameData = calculateRunnerFame(data)
          fameData.id = id
          return fameData;
        })
    }

    function loadAll(idList){
      let promiseArray = [];
      idList.forEach(id => promiseArray.push(loadScore(id)))
      return Promise.all(promiseArray)
    }

    loadAll(idList).then(fameList => {
      this.setState({fameList})
    })
  }



  render () {
    return (
      <div className="hallOfFameBody">
        <HallOfFameTitle />
        <HallOfFameDescription />
        <HallOfFameList fameList = {this.state.fameList}/>
        <HallOfFameViz fameList={this.state.fameList} height={400} width={400} outerRadius={200} innerRadius={10} />
      </div>
    )
  }
}

export default HallOfFame