import React, {Component} from 'react'
import BackFrame from '../innerComponents/BackFrame'
import HallOfFamePlacard from './HallOfFamePlacard'
import './HallOfFameList.css'
import {FAME_LIST_LENGTH} from "../helper/Constants";

class HallOfFameList extends Component {
  compareFame(a, b){
    if (a.fame < b.fame)
      return 1;
    if (a.fame > b.fame)
      return -1;
    return 0;
  }

  render () {
    const {fameList} = this.props;
    if(fameList.length>0){
      const allPlacards = fameList.sort(this.compareFame).slice(0,FAME_LIST_LENGTH).map((fameData, index) => (
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
          <p>Loading Hall of Fame...(can sometimes take over 15 seconds)</p>
        </div>
      )
    }
  }
}

export default BackFrame(HallOfFameList);
