export function formattedDuration (timeString) {
  return timeString.replace('PT', '').toLowerCase()
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
	var baseURL = "https://www.speedrun.com/api/v1/leaderboards/kdk4e21m/category/"
	var variablesString = ""
	for(var key in variablesObj){
		//even if there's nothing to embed, the final & won't cause errors (yet)
		//template strings are great
		variablesString += `var-${key}=${variablesObj[key]}&`;
	}
	//I love template strings, TODO:use the embedded players/variables
	return `${baseURL}${category}?${variablesString}embed=players,variables`
}