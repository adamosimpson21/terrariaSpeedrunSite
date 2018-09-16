import {fetchErrorHandler} from "./helperfunctions";

// converts English words into IDs to be used through the API. This dramatically increases readability and mutability of code
const categoryIDLookUp = {
  'Moon Lord': {
  	'type' : 'category',
    'id': 'zd3yzvn2',
		'image': 'moonlord.png'
  },
  'All Bosses': {
    'type' : 'category',
	  'id': 'rklgo5wd',
		'image':'dukefishron.png'
  },
  'All Pre-HM Bosses': {
    'type' : 'category',
	  'id': 'n2y1lve2',
		'image':'wallofflesh.png'
  },
  "Night's Edge": {
    'type' : 'category',
    'id': '7kjr0gg2',
		'image':'nightsedge.png'
  },
  'Eye of Cthulhu':{
    'type' : 'level',
    'id' : 'rw6vx569',
    'image':'eyeofcthulhu.png'
  },
  'Skeletron':{
    'type' : 'level',
    'id' : 'n930ezr9',
    'image':'skeletron.png'
  },
  'Eater of Worlds':{
    'type' : 'level',
    'id' : 'z98jq41w',
    'image':'eaterofworlds.png'
  },
  'Brain of Cthulhu':{
    'type' : 'level',
    'id' : 'rdn5846d',
    'image':'brainofcthulhu.png'
  },
  'King Slime':{
    'type' : 'level',
    'id' : 'ldye6l7w',
    'image':'kingslime.png'
  },
  'Queen Bee':{
    'type' : 'level',
    'id' : 'gdrjlrkw',
    'image':'queenbee.png'
  },
  'Wall of Flesh':{
    'type' : 'level',
    'id' : 'nwl610gw',
    'image':'wallofflesh.png'
  },
  'The Destroyer':{
    'type' : 'level',
    'id' : 'ywe4g04d',
    'image':'thedestroyer.png'
  },
  'The Twins':{
    'type' : 'level',
    'id' : '69zrj74d',
    'image':'thetwins.png'
  },
  'Skeletron Prime':{
    'type' : 'level',
    'id' : 'r9gz562d',
    'image':'skeletronprime.png'
  },
  'Plantera':{
    'type' : 'level',
    'id' : 'o9x2q67w',
    'image':'plantera.png'
  },
  'Golem':{
    'type' : 'level',
    'id' : '495jgp4w',
    'image':'golem.png'
  },
  'Duke Fishron':{
    'type' : 'level',
    'id' : 'rdq0rygw',
    'image':'dukefishron.png'
  },
  'Goblin Invasion':{
    'type' : 'level',
    'id' : '5d775ped',
    'image':'goblinarmy.png'
  },
  'Pirate Invasion':{
    'type' : 'level',
    'id' : 'kwjyj01w',
    'image':'pirateinvasion.png'
  },
  'Martian Madness':{
    'type' : 'level',
    'id' : 'owokn83d',
    'image':'martianmadness.png'
  }
}

const variableIDLookUp = {
	'Difficulty': {
		'id': 'wleq7kl6',
		'Normal': '0139jyk1',
		'Expert': 'rqvv0n5q'
	},
	'Seeds': {
		'id': 'j8423jn9',
		'Random': '814o6nwq',
		'Seeded': '4lx5kjj1'
	},
	'# of Players': {
		'id': 'ylpzvk8g',
		'1 Player': '21g9exxq',
		'2 Players': 'jqzgv04l'
	},
	'Patch Used': {
		'id': 'e8morel6',
		'1.3.5': '21d65p3q',
		'1.3.4.4': 'klrx980l',
		'1.3.3': 'jqzg9o4l',
		'1.3.2.1': '21g95kxq',
		'1.3.0.8': 'gq72pyn1'
	}
}
// const categories = {"zd3yzvn2":"Moon Lord","rklgo5wd":"All Bosses","n2y1lve2":"All Pre-Hardmode Bosses","vdo4e5o2":"1 Player","wkpyw5vk":"2 Players","7kjr0gg2":"Night's Edge"}
const runnerIdToNames = {"kj9rmdrj":"Hellacious","7j4q5ydx":"Kimseru","48gm6dp8":"PepsiMAX","zxzl7vn8":"1lomi","zxz430jq":"RinRabbit","kj92v478":"BandsWithLegends","48g942xp":"agyroth","5j591wxv":"UnPro","98r41qj1":"Knjazvetal","48g50o2j":"Hu3y524","zxz1159j":"MDMeaux","7j42w6dx":"DaHoboKing","7j40ged8":"DlinkS","qxkp5e6j":"Llurik","v81m7r58":"Tobafett","v8l1r7jm":"ProfanedGlitch","18v2e15j":"Stophen","18v5k2vj":"anglakey","zx7253y8":"TixTak","98r7lndj":"Ornery Ike","18vrgznx":"Aqua_Zw","e8e9d3dj":"PokemonAce101","v8lrg5l8":"Mack2in","e8eeqo80":"Blaust","dx3yy78l":"TheVideoGameBadger","zx7e1687":"Jack","68w3olqj":"naknuL","68w1p93x":"Emius","y8d4yvg8":"Swanklion","7j46ykm8":"Kader87","qxkld980":"AirGuitarist","o863wnp8":"ZeroOne","pj0v59xw":"Wilko","1xyrz4vj":"ScottySR","e8ee40p8":"LevelWorld","e8eekkp8":"Domos","0jmpz04j":"TheGreatZiggyny","98r0z381":"DrYoshiyahu","68wlrkqj":"swiftzircon","qj26p67x":"StunterLetsPlay","18qr6e0j":"Codiferus","qxkw32x0":"ShawKill","pj0wyl38":"TrooperJt","68w1y0lx":"Max_Overpower","dx3mek28":"DevaVentus","dx3w00kj":"Raven123321","y8dp6nm8":"Dacktem","0jm774nj":"St4ckeD","y8d3epox":"z0rr013","y8dwmolj":"Yamayamauchiman","5j5v7lw8":"Lyren","y8dg2986":"MrMopi5000","qjnzl52j":"jronaggaz","68wpovxg":"Straevaras","zxz9r48q":"toad1750","v8l4qnrj":"mirusu400","qjope30x":"spottrigger","kjp4eoyj":"xFury","pj0v2owx":"ginga","dx3qnp6j":"Zwexqukav","qj26p3nx":"Notag","dx3p3278":"Sefakirik46xc","48gr47rx":"OnlyMidknight","kjpmnn0j":"Kappathst","1xy5wen8":"halichoerus","18vrv62x":"Pikuss","v8l00l78":"Wolfalous","pj0n6qw8":"DolphinDasher","5j5pozz8":"DizzySkin","zxz7q70j":"Igon","48g2m02j":"Newsplash","1xyk0ez8":"BlackBelt","48go7vrx":"Refusek","18vredvx":"Dr.Sandwich","qxkzym2x":"PapaJuan","y8de11lj":"Xanderius","98r1qv6j":"Omfgitsg00","y8de1zgj":"PsiOnyx_","e8eo2d6j":"Sparksysam","kj9d6e7x":"WeEatPears","zx7zw3q8":"ModestTomato","v8l61448":"Lauk","18qq5678":"FeneOne","kj9d4rvx":"Yodapowers_","zxzvpz0j":"UsefulGarbage","e8el6y2j":"Silexacies","98rqy0qx":"CreamyCannon","kj9dl4wx":"Jazox","1xyvprmx":"Cube_","0jmqvmex":"Claypool","68w3wmvj":"TMHThomas","qxk1dz9j":"PhaxeCoach","48g9k71x":"Bodie","qjnqdywj":"Lokipere","7j4dm5lj":"Zawza","v8lke64x":"marcooos","y8d5m5lj":"AdventurerAlex123","kj9d9dox":"UnboundShark","0jmqynzx":"Saya","e8enr778":"CrabBar","7j4dzn5j":"assasin900","98rp5e6j":"Paracusia","7j4p3dwj":"BenSammell","7j4we3vx":"cheekyKup","68w6z23j":"SwiftDynamics","y8d51q5j":"Cruxiable","kjpov9y8":"DragonHeart000","1xyr5vzj":"ethanmallard1","v81vpgp8":"TVGBadger","e8e6nyoj":"Cirno-baka9","98r6mnw8":"yumatei","qjn5og4j":"KagamiiX","48gz2dpj":"MagicBaker","pj01qe9x":"cf","qjn6lmwx":"PavleSux","e8enoq78":"Imadolphin","o86evwpx":"evan052006","48g9r97x":"SmashR_TheRedMage","18vy1ev8":"Darklightsds","48gynv18":"Yumemi","e8e6y67j":"2Troublesome","0jmrgzo8":"Eresor","qxk23n7x":"Hdiszle","18vp0258":"Japanese_Joke","zxzzpp0x":"Fawnzee","qj2ygr78":"Rhombu","7j4oo758":"Flame970","1xyvrgmx":"darkislight","18vmy0v8":"GearUp","e8e7pdpx":"Andrew_Mac","qxkq4mkx":"Nuex","kjpok628":"Javascript","1xyr75vj":"DrRobotnikLand","0jmqvwox":"NecroNatwhal","qjnqv0dj":"TopHatApple","7j4ge05j":"BlobDylan","kjpqwo2x":"BobBobbingson","qj2ol5px":"mrlink2k","48gn04pj":"Yuidesu","kj9dnkrx":"ToastNomNomNom","e8ez4d68":"Yoshikiller109","68w6o3vj":"Balduron04","zxzy6drj":"SioNisti","dx359eej":"Taz","zx75d4r8":"TheServantofHelix","qjoq5ve8":"SevenChords","18vnr72j":"Galaxygamer109","5j5w7wjv":"Rexaaayyy","pj0konm8":"Tappoutmc34ftw","e8eyg32x":"GoriVerde","qjn50gqj":"LadyChristie","dx37rze8":"Byrd","zx702m0j":"ggcookies","0jm4m6ej":"Knoll24","18qkezo8":"Cloch73","48gnko2j":"Nacho82","o86me2wj":"Shichimiya","18qz0pd8":"xXWalkingDeathXx","0jmvewoj":"Dave5005"}
const runnerIds = ["zxzl7vn8","68w1y0lx","kj92v478","kj9rmdrj","98r41qj1","7j4q5ydx","68w1p93x","v8l1r7jm","48gm6dp8",null,"48g942xp","zxz1159j","48g50o2j","zxz430jq","7j40ged8","18v2e15j","o863wnp8","18v5k2vj","e8e9d3dj","5j591wxv","dx3w00kj","7j42w6dx","zx7253y8","e8eeqo80","qxkw32x0","98r7lndj","1xyrz4vj","e8eekkp8","qxkp5e6j","v81m7r58","7j46ykm8","0jm774nj","98r0z381","e8ee40p8","18vrgznx","pj0wyl38","zx7e1687","v8lrg5l8","68w3olqj","y8dp6nm8","y8dwmolj","y8d3epox","pj0v59xw","dx3mek28","qxkld980","qj26p67x","68wlrkqj","18qr6e0j","y8d4yvg8","dx3yy78l","0jmpz04j","68wpovxg","qjnzl52j","5j5v7lw8","zxz9r48q","y8dg2986","qjope30x","kjp4eoyj","v8l4qnrj","48gr47rx","dx3qnp6j","1xy5wen8","pj0v2owx","kjpmnn0j","dx3p3278","zxz7q70j","pj0n6qw8","v8l00l78","qj26p3nx","48g2m02j","1xyk0ez8","5j5pozz8","v8l61448","98r1qv6j","e8eo2d6j","qjn6lmwx","y8de11lj","18vredvx","y8de1zgj","48go7vrx","18vrv62x","7j4p3dwj","e8e6nyoj","qxkzym2x","e8enoq78","pj01qe9x","kjpov9y8","98r6mnw8","48gz2dpj","7j4we3vx","1xyr5vzj","48g9r97x","qjn5og4j","18vy1ev8","o86evwpx","48gynv18","v81vpgp8","0jmrgzo8","qxk23n7x","e8e6y67j","7j4oo758","zxzzpp0x","qj2ygr78","18vmy0v8","zx7zw3q8","e8e7pdpx","qxkq4mkx","1xyvrgmx","kjpok628","kj9d6e7x","18vp0258","18qq5678","1xyr75vj","e8el6y2j","48g9k71x","kj9d4rvx","kj9dl4wx","98rqy0qx","1xyvprmx","zxzvpz0j","0jmqvmex","qjnqv0dj","0jmqvwox","68w3wmvj","qxk1dz9j","kj9d9dox","qjnqdywj","v8lke64x","7j4dm5lj","y8d5m5lj","e8enr778","7j4dzn5j","0jmqynzx","5j5w7wjv","98rp5e6j","y8d51q5j","qjoq5ve8","kjpqwo2x","68w6z23j","68w6o3vj","kj9dnkrx","dx359eej","qj2ol5px","zxzy6drj","zx702m0j","qjn50gqj","18vnr72j","e8ez4d68","0jm4m6ej","48gn04pj","pj0konm8","e8eyg32x","o86me2wj","18qkezo8","18qz0pd8","48gnko2j","dx37rze8","7j4ge05j","zx75d4r8","0jmvewoj"]

export {categoryIDLookUp, runnerIdToNames, runnerIds, variableIDLookUp};

let runners=[];
// eslint-disable-next-line
function findAllUniqueRunners(url){
  fetch(url)
  .then(fetchErrorHandler)
  .then(data => {
    data.data.forEach(run => {
      run.players.forEach(player => {
        if(!runners.includes(player.id)){
          runners.push(player.id)
        }
      })
    })
    //going to next page, next can be either position
    let links = data.pagination.links
    if(links[0].rel==="next"){
      findAllUniqueRunners(links[0].uri);
    } else if(links[1] && links[1].rel==="next"){
      findAllUniqueRunners(links[1].uri);
    } else {
      //no more pages, return array of IDs
      return runners;
    }
  })
}
// findAllUniqueRunners("https://www.speedrun.com/api/v1/runs?game=kdk4e21m");

// logic for getting usernames from API
// eslint-disable-next-line
function addRunnerNames(){
  const runnerIDs = ["zxzl7vn8","68w1y0lx","kj92v478","kj9rmdrj","98r41qj1","7j4q5ydx","68w1p93x","v8l1r7jm","48gm6dp8",null,"48g942xp","zxz1159j","48g50o2j","zxz430jq","7j40ged8","18v2e15j","o863wnp8","18v5k2vj","e8e9d3dj","5j591wxv","dx3w00kj","7j42w6dx","zx7253y8","e8eeqo80","qxkw32x0","98r7lndj","1xyrz4vj","e8eekkp8","qxkp5e6j","v81m7r58","7j46ykm8","0jm774nj","98r0z381","e8ee40p8","18vrgznx","pj0wyl38","zx7e1687","v8lrg5l8","68w3olqj","y8dp6nm8","y8dwmolj","y8d3epox","pj0v59xw","dx3mek28","qxkld980","qj26p67x","68wlrkqj","18qr6e0j","y8d4yvg8","dx3yy78l","0jmpz04j","68wpovxg","qjnzl52j","5j5v7lw8","zxz9r48q","y8dg2986","qjope30x","kjp4eoyj","v8l4qnrj","48gr47rx","dx3qnp6j","1xy5wen8","pj0v2owx","kjpmnn0j","dx3p3278","zxz7q70j","pj0n6qw8","v8l00l78","qj26p3nx","48g2m02j","1xyk0ez8","5j5pozz8","v8l61448","98r1qv6j","e8eo2d6j","qjn6lmwx","y8de11lj","18vredvx","y8de1zgj","48go7vrx","18vrv62x","7j4p3dwj","e8e6nyoj","qxkzym2x","e8enoq78","pj01qe9x","kjpov9y8","98r6mnw8","48gz2dpj","7j4we3vx","1xyr5vzj","48g9r97x","qjn5og4j","18vy1ev8","o86evwpx","48gynv18","v81vpgp8","0jmrgzo8","qxk23n7x","e8e6y67j","7j4oo758","zxzzpp0x","qj2ygr78","18vmy0v8","zx7zw3q8","e8e7pdpx","qxkq4mkx","1xyvrgmx","kjpok628","kj9d6e7x","18vp0258","18qq5678","1xyr75vj","e8el6y2j","48g9k71x","kj9d4rvx","kj9dl4wx","98rqy0qx","1xyvprmx","zxzvpz0j","0jmqvmex","qjnqv0dj","0jmqvwox","68w3wmvj","qxk1dz9j","kj9d9dox","qjnqdywj","v8lke64x","7j4dm5lj","y8d5m5lj","e8enr778","7j4dzn5j","0jmqynzx","5j5w7wjv","98rp5e6j","y8d51q5j","qjoq5ve8","kjpqwo2x","68w6z23j","68w6o3vj","kj9dnkrx","dx359eej","qj2ol5px","zxzy6drj","zx702m0j","qjn50gqj","18vnr72j","e8ez4d68","0jm4m6ej","48gn04pj","pj0konm8","e8eyg32x","o86me2wj","18qkezo8","18qz0pd8","48gnko2j","dx37rze8","7j4ge05j","zx75d4r8"]
  let runnerObj = {}
  runnerIDs.forEach(runnerID => {
    fetch(`https://www.speedrun.com/api/v1/users/${runnerID}`)
      .then(fetchErrorHandler)
      .then(data => {
        runnerObj[data.data.id] = data.data.names.international;
      })
  })
  return runnerObj;
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
