import {categoryIDLookUp, runnerIdToNames} from "./idTables";

export function formattedDuration (timeString) {
  return timeString.replace('PT', '').toLowerCase()
}

//translates runner Name to Id, returns false if does not exist
export function runnerNameToId(string){
  let isUsername = Object.entries(runnerIdToNames).find(([_, value]) => value.toLowerCase() === string.toLowerCase())
  if (isUsername) {
    return isUsername[0]
  } else {
    return false
  }
}

export function fetchErrorHandler(resp){
  if(!resp.ok){
    if(resp.status>=400 && resp.status <500){
      return resp.json().then(data=> {
        let err= {errorMessage:data.message};
        throw err;
      })
    } else {
      let err = {errorMessage: 'Please try again later. Server down'};
      throw err
    }
  }
  return resp.json();
}

//function builds a URL to use API call for a category, sorted by variables given to it
export function buildURL(category, variablesObj){
  //variables Obj looks like this = {p852qv8g:5q8kv3gq,rn12wklj:p12vk0vq,ylpzvk8g:21g9exxq,e8morel6:21d65p3q}
  const baseURL = "https://www.speedrun.com/api/v1/leaderboards/kdk4e21m/"
  let variablesString = ""
  for(let key in variablesObj){
    variablesString += `var-${key}=${variablesObj[key]}&`;
  }
  if(categoryIDLookUp[category].type==='level'){
    //checks number of players for levels
    if (variablesObj["ylpzvk8g"]==="21g9exxq") {
      return `${baseURL}level/${categoryIDLookUp[category].id}/vdo4e5o2?${variablesString}`
    } else {
      return `${baseURL}level/${categoryIDLookUp[category].id}/wkpyw5vk?${variablesString}`
    }
  } else {
    return `${baseURL}category/${categoryIDLookUp[category].id}?${variablesString}`
  }
}
