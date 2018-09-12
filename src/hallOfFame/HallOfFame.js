import React, {Component} from 'react'
import './HallOfFame.css'
import HallOfFameTitle from './HallOfFameTitle'
import HallOfFameDescription from './HallOfFameDescription'
import HallOfFameList from './HallOfFameList'
import HallOfFameViz from './HallOfFameViz'
import {fetchErrorHandler} from "../helper/helperfunctions";
import {calculateRunnerFame} from "../helper/countRunnerFame";
import { Row } from 'react-flexbox-grid'
// import {runnerIds} from "../helper/idTables";

class HallOfFame extends Component {
  constructor(props){
    super(props)
    this.state={
      // idList:runnerIds,
      //top runners all time
      // idList:["68w1y0lx","kj92v478","v81vpgp8","zxzl7vn8","48gn04pj","98r41qj1","y8dwmolj","pj0v59xw","dx3mek28","7j4ge05j"],
      //top runners in 1.3.5
      idList:['v81vpgp8','68w1y0lx','48gn04pj','7j4ge05j','kj92v478','e8enr778','1xyr75vj','y8dp6nm8','zx7253y8','zx7zw3q8'],
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
        <Row className="hallOfFameDataRow">
          <HallOfFameList fameList = {this.state.fameList}/>
          <HallOfFameViz fameList={this.state.fameList} height={400} width={400} outerRadius={200} innerRadius={10} />
        </Row>
      </div>
    )
  }
}

export default HallOfFame