import buildUrl from '../helper/helperfunctions';
import {categoryIDLookUp, runnerIdToNames} from '../helper/idTables';

function createRunnerScoreObj(){
  let playerObj = {};
  //for every category, and every variable of each category make an fetch call and increment score determined by place
  function countRunnerScore(runs, playerObj) {
    function scorePerPlace(place) {
      switch (place) {
        case 1:
          return 10;
        case 2:
          return 5;
        case 3:
          return 3;
        default:
          return 1;
      }
    }
  }

  //psuedoCode for runnerSCore element
  //TODO: makes an object with playerID:numPoints where numPoints is score determined by placement in records
  // listOfCategories.forEach(category => {
  //   category.forEach(variable => {
  //     variable.forEach(choice => {
  //       fetch(buildUrl(parameters))
  //         .then(errorHandling)
  //         .then(data=>{
  //           data.data.runs.forEach((run, index) =>{
  //             if ((run.player in playerObj)) {
  //               playerObj[run.player] += scorePerPlace(index + 1);
  //             } else {
  //               playerObj[run.player] = scorePerPlace(index + 1);
  //             }
  //           })
  //         })
  //     })
  //   })
  // })
}