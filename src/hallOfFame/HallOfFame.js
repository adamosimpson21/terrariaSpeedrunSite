import React, {Component} from 'react'
import './HallOfFame.css'
import HallOfFameTitle from './HallOfFameTitle'
import HallOfFameDescription from './HallOfFameDescription'
import HallOfFameList from './HallOfFameList'
import HallOfFameViz from './HallOfFameViz'
import {fetchErrorHandler} from "../helper/helperfunctions";
import {calculateRunnerFame} from "../helper/countRunnerFame";
import { Row } from 'react-flexbox-grid'
import Button from '../innerComponents/Button'
import classNames from 'classnames';
import {runnerIdToNames} from "../helper/idTables";

export default class HallOfFame extends Component {
  constructor(props){
    super(props)
    this.state={
      // use when generating new lists
      // idList:runnerIds,
      // top runners 1.3.5
      // idList:["48gn04pj","zxzkonnx","68w1y0lx","v81vpgp8","18qg35ox","7j4ge05j","1xyr75vj","y8dp6nm8","kj92v478","zxzl7vn8"],
      // top runner all time
      idList: ["48gn04pj", "68w1y0lx", "zxzkonnx", "v81vpgp8", "kj92v478", "18qg35ox", "zxzl7vn8", "y8dp6nm8", "7j4ge05j", "1xyr75vj"],
      fameList: [],
      typeOfViz:'Histogram',
      hoveredRunner: {"fame":880,"place":{"1":45,"2":16,"3":9,"other":19},"id":"68w1y0lx", color: "blue"}
    }

    this.handler = this.handler.bind(this)
    this.setHoveredRunner = this.setHoveredRunner.bind(this);
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

  // loads all Hall of Fame scores in parallel
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
      // use when generating new fame list
      // console.log("fameList:", fameList.sort(this.compareFame).slice(0, FAME_LIST_LENGTH).map(user => user.id));
      this.setState({fameList})
    })
  }

  handler(event, variable){
    event.preventDefault();
    this.setState({typeOfViz:variable})
  }

  setHoveredRunner(runnerInfo){
    this.setState({ hoveredRunner: runnerInfo})
  }

  render () {
    const { fameList, typeOfViz, hoveredRunner} = this.state;
    return (
      <div className="hallOfFameBody">
        <HallOfFameTitle />
        <Row className="hallOfFameDataRow">
          <HallOfFameList fameList={fameList}/>
          <HallOfFameViz data={fameList} type={typeOfViz} setHoveredRunner={this.setHoveredRunner} />
        </Row>
        <Row className='hallOfFameButtonGroup'>
          <div className="hall-of-fame-button-group-right-side">
            <Button label='Pie' className={classNames('buttonHOC',{'pressed': typeOfViz!=='Pie'})} onClick={(e) => this.handler(e, 'Pie')} />
            <Button label='Histogram' className={classNames('buttonHOC',{'pressed': typeOfViz!=='Histogram'})}  onClick={(e) => this.handler(e, 'Histogram')} />
          </div>
          <div className='hall-of-fame-runner-personal-stats-wrapper'>
            {
              hoveredRunner ?
                <div className="runner-person-stats" style={{ color: hoveredRunner.color}}>
                  {runnerIdToNames[hoveredRunner.id]}
                  <br />
                  Gold:{hoveredRunner.place["1"]},
                  Silver:{hoveredRunner.place["2"]},
                  Bronze:{hoveredRunner.place["3"]}
                </div>
              :
              <div>
                Hover over the chart to see a runner's Personal Achievements
              </div>
            }
          </div>

          </Row>
        <HallOfFameDescription />
      </div>
    )
  }
}
