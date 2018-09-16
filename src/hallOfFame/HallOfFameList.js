import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import HallOfFamePlacard from './HallOfFamePlacard'
import './HallOfFameList.css'

class HallOfFameList extends Component {
  compareFame(a, b){
    if (a.fame < b.fame)
      return 1;
    if (a.fame > b.fame)
      return -1;
    return 0;
  }

  render () {
    if(this.props.fameList.length>0){
      const numDisplayed = 10
      const allPlacards = this.props.fameList.sort(this.compareFame).slice(0,numDisplayed).map((fameData, index) => (
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