import {fetchErrorHandler} from "./helperfunctions";
import {runnerIds} from "./idTables";

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
          if(!runners.includes(player.id)){
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
  runnerIds.forEach((runnerID, index) => {
    fetch(`https://www.speedrun.com/api/v1/users/${runnerID}`)
      .then(fetchErrorHandler)
      .then(data => {
        runnerObj[data.data.id] = data.data.names.international;
      })
      .then(() => {
        if(index===runnerIds.length){
          console.log("runnerObj:", runnerObj)
          return runnerObj
        }
      })
  })
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
