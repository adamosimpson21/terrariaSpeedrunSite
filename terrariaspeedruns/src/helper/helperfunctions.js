

export function formattedDuration(timeString){
	//takes a ISO 8601 duration and returns a friendlier string
		// var clearOutliers = timeString.replace("PT","").replace("S","");
		// if(clearOutliers.includes("H")){
		// 	if(clearOutliers.includes("M")){
		// 		return clearOutliers.replace("H",":").replace("M",":")
		// 	} else {
		// 		return clearOutliers.replace("H",":00:")
		// 	}
		// } else {
		// 	return clearOutliers.replace("M",":")
		// }
		// return null
	// OR just do the easy thing
		return timeString.replace("PT","").toLowerCase();
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