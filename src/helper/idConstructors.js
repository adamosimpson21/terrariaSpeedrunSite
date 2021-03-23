import {fetchErrorHandler} from "./helperfunctions";
import {runnerIds, runnerIdToNames} from "./idTables";

// eslint-disable-next-line
// searches through speedrun.com API to find all unique runners in Terraria
// returns an array of the runner IDs
let runners = [];

function findAllUniqueRunners(link){
  fetch(link)
    .then(fetchErrorHandler)
    .then(data => {
      data.data.forEach(run => {
        run.players.forEach(player => {
          if(player.id && !runners.includes(player.id)){
            runners.push(player.id)
          }
        })
      })
      const nextLink = getNextLink(data.pagination.links);
      if(nextLink){
        findAllUniqueRunners(nextLink);
      } else {
        //no more pages, return array of IDs
        console.log("runners:", runners);
        return runners;
      }
    })
}

function getNextLink(links){
  //going to next page, next can be either position
  const linkFirst = links[0];
  const linkSecond = links[1];
  if(linkFirst.rel==="next"){
    return linkFirst.uri
  } else if(linkSecond && linkSecond.rel==="next"){
    return linkSecond.uri
  } else {
    return false
  }
}

// logic for getting usernames from API
// eslint-disable-next-line
function addRunnerNames(){
  let runnerObj = {}
  console.log("addRunnerNames has begun");
  runnerIds.filter(runner => !runnerIdToNames[runner]).forEach((runnerID, index, filteredArray) => {
    fetch(`https://www.speedrun.com/api/v1/users/${runnerID}`)
      .then(fetchErrorHandler)
      .then(data => {
        console.log("new runner being added");
        runnerObj[data.data.id] = data.data.names.international;
      })
      .then(() => {
        console.log("index:", index, "filteredArray.length:", filteredArray.length)
        if(index===filteredArray.length-1){
          console.log("runnerObj:", runnerObj)
          return runnerObj
        }
      })
      .catch(err => {
        console.log(err);
      })
  })
  console.log("addRunnerNames has ended");
}
// addRunnerNames();

// eslint-disable-next-line
function constructVariableIDLookUp(){
  fetch('https://www.speedrun.com/api/v1/categories/zd3yzvn2/variables')
    .then(fetchErrorHandler)
    .then(data => {
      let variableIDLookUp = {}
      data.data.forEach(variable => {
        let varObj = variable.values.choices;
        varObj.id = variable.id
        variableIDLookUp[variable.name] = varObj
      })
      return variableIDLookUp;
    })
}

// constructVariableIDLookUp();

export {constructVariableIDLookUp, addRunnerNames, fetchErrorHandler, findAllUniqueRunners};
