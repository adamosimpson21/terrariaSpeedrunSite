// logic for getting usernames from API 
var categories = {"zd3yzvn2":"Moon Lord","rklgo5wd":"All Bosses","n2y1lve2":"All Pre-Hardmode Bosses","7kjr0gg2":"Night's Edge"}

//All-bosses variables
// for(let i = 0; i<categories.length; i++){
  fetch("https://www.speedrun.com/api/v1/categories/n2y1lve2/variables")
    .then(resp=>{
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
    })
    .then(data => {
        var allBossesIDs = {};
        allBossesIDs.categoryID = "n2y1lve2";
        allBossesIDs.variables = {};
        data.data.forEach(function(element, index){
          allBossesIDs.variables[element.name] = {}
          allBossesIDs.variables[element.name].id = element.id;
          for(property in element.values.values){
            allBossesIDs.variables[element.name][element.values.values[property].label] = property
          }
        })

        console.log(data.data);
        console.log(allBossesIDs);
    })
// }

