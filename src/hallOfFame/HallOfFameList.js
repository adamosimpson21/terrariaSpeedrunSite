import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import HallOfFamePlacard from './HallOfFamePlacard'
import './HallOfFameList.css'
import {fetchErrorHandler} from "../helper/helperfunctions";
import {calculateRunnerFame} from "../helper/countRunnerFame";
import {runnerIds} from "../helper/idTables";

class HallOfFameList extends Component {
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

  compareFame(a, b){
    if (a.fame < b.fame)
      return 1;
    if (a.fame > b.fame)
      return -1;
    return 0;
  }

  render () {
    if(this.state.fameList.length>0){
      const allPlacards = this.state.fameList.sort(this.compareFame).slice(0,10).map((fameData, index) => (
        <HallOfFamePlacard
          key = {fameData.id}
          index={index}
          fameData={fameData}
        />
      ))
      return (
        <div className="hallOfFameList">
          {allPlacards}
        </div>
      )
    } else {
      return(
        <div>
          <p>Loading Hall of Fame...(can sometimes take 10-15 seconds)</p>
        </div>
      )
    }
  }
}

export default BackFrame(HallOfFameList);