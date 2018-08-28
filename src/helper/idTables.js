// converts English words into IDs to be used through the API. This dramatically increases readability and mutability of code
// nested Object structure allows for looping and easy variable access. Could be improved by better variable/key names.
// This must be generated semi-manually through the construct variable conversion function below
var categoryIDLookUp = {
  'Moon Lord': {
    'categoryID': 'zd3yzvn2',
		'image': 'moonlord.png',
    'variables': {
      'Difficulty': {
        'id': 'p852qv8g',
        'Normal': '5q8kv3gq',
        'Expert': '4qyz2m41'
      },
      'Seeds': {
        'id': 'rn12wklj',
        'Random': 'z192vpjq',
        'Seeded': 'p12vk0vq'
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
  },
  'All Bosses': {
	  'categoryID': 'rklgo5wd',
		'image':'Duke_Fishron.png',
	  'variables': {
	    'Difficulty': {
	      'id': '38dq24n0',
	      'Normal': 'mln8v70l',
	      'Expert': '810vnywl'
	    },
	    'Seeds': {
	      'id': 'p852e08g',
	      'Random': '81pyz5e1',
	      'Seeded': 'xqke3n9q'
	    },
	    '# of Players': {
	      'id': 'ylpzvk8g',
	      '1 Player': '21g9exxq',
	      '2 Players': 'jqzgv04l'
	    },
	    'Patch Used': {
	      'id': 'e8morel6',
	      '1.3.0.8': 'gq72pyn1',
	      '1.3.2.1': '21g95kxq',
	      '1.3.3': 'jqzg9o4l',
	      '1.3.4.4': 'klrx980l',
	      '1.3.5': '21d65p3q'
	    }
	  }
  },
  'All Pre-HM Bosses': {
	  'categoryID': 'n2y1lve2',
		'image':'wallofflesh.png',
	  'variables': {
	    'Difficulty': {
	      'id': 'r8r2y5le',
	      'Normal': '9qj7moeq',
	      'Expert': 'jq65ow3l'
	    },
	    'Seeds': {
	      'id': '38dq01n0',
	      'Random': 'gq75oxn1',
	      'Seeded': '21gn6pxl'
	    },
	    '# of Players': {
	      'id': 'ylpzvk8g',
	      '1 Player': '21g9exxq',
	      '2 Players': 'jqzgv04l'
	    },
	    'Patch Used': {
	      'id': 'e8morel6',
	      '1.3.0.8': 'gq72pyn1',
	      '1.3.2.1': '21g95kxq',
	      '1.3.3': 'jqzg9o4l',
	      '1.3.4.4': 'klrx980l',
	      '1.3.5': '21d65p3q'
	    }
	  }
  },
  "Night's Edge": {
    'categoryID': '7kjr0gg2',
		'image':'nightsedge.png',
	  'variables': {
	    'Difficulty': {
	      'id': '5ly322n4',
	      'Normal': '5lmo3ej1',
	      'Expert': '81w42joq'
	    },
	    'Seeds': {
	      'id': 'r8r2z2le',
	      'Random': 'jqznw34q',
	      'Seeded': 'klr3d20l'
	    },
	    '# of Players': {
	      'id': 'ylpzvk8g',
	      '1 Player': '21g9exxq',
	      '2 Players': 'jqzgv04l'
	    },
	    'Patch Used': {
	      'id': 'e8morel6',
	      '1.3.0.8': 'gq72pyn1',
	      '1.3.2.1': '21g95kxq',
	      '1.3.3': 'jqzg9o4l',
	      '1.3.4.4': 'klrx980l',
	      '1.3.5': '21d65p3q'
	    }
	  }
  }
}
// var categories = {"zd3yzvn2":"Moon Lord","rklgo5wd":"All Bosses","n2y1lve2":"All Pre-Hardmode Bosses","vdo4e5o2":"1 Player","wkpyw5vk":"2 Players","7kjr0gg2":"Night's Edge"}
// var runnerIDs = ["zxzl7vn8","68w1y0lx","kj92v478","kj9rmdrj","98r41qj1","7j4q5ydx","68w1p93x","v8l1r7jm","48gm6dp8",null,"48g942xp","zxz1159j","48g50o2j","zxz430jq","7j40ged8","18v2e15j","o863wnp8","18v5k2vj","e8e9d3dj","5j591wxv","dx3w00kj","7j42w6dx","zx7253y8","e8eeqo80","qxkw32x0","98r7lndj","1xyrz4vj","e8eekkp8","qxkp5e6j","v81m7r58","7j46ykm8","0jm774nj","98r0z381","e8ee40p8","18vrgznx","pj0wyl38","zx7e1687","v8lrg5l8","68w3olqj","y8dp6nm8","y8dwmolj","y8d3epox","pj0v59xw","dx3mek28","qxkld980","qj26p67x","68wlrkqj","18qr6e0j","y8d4yvg8","dx3yy78l","0jmpz04j","68wpovxg","qjnzl52j","5j5v7lw8","zxz9r48q","y8dg2986","qjope30x","kjp4eoyj","v8l4qnrj","48gr47rx","dx3qnp6j","1xy5wen8","pj0v2owx","kjpmnn0j","dx3p3278","zxz7q70j","pj0n6qw8","v8l00l78","qj26p3nx","48g2m02j","1xyk0ez8","5j5pozz8","v8l61448","98r1qv6j","e8eo2d6j","qjn6lmwx","y8de11lj","18vredvx","y8de1zgj","48go7vrx","18vrv62x","7j4p3dwj","e8e6nyoj","qxkzym2x","e8enoq78","pj01qe9x","kjpov9y8","98r6mnw8","48gz2dpj","7j4we3vx","1xyr5vzj","48g9r97x","qjn5og4j","18vy1ev8","o86evwpx","48gynv18","v81vpgp8","0jmrgzo8","qxk23n7x","e8e6y67j","7j4oo758","zxzzpp0x","qj2ygr78","18vmy0v8","zx7zw3q8","e8e7pdpx","qxkq4mkx","1xyvrgmx","kjpok628","kj9d6e7x","18vp0258","18qq5678","1xyr75vj","e8el6y2j","48g9k71x","kj9d4rvx","kj9dl4wx","98rqy0qx","1xyvprmx","zxzvpz0j","0jmqvmex","qjnqv0dj","0jmqvwox","68w3wmvj","qxk1dz9j","kj9d9dox","qjnqdywj","v8lke64x","7j4dm5lj","y8d5m5lj","e8enr778","7j4dzn5j","0jmqynzx","5j5w7wjv","98rp5e6j","y8d51q5j","qjoq5ve8","kjpqwo2x","68w6z23j","68w6o3vj","kj9dnkrx","dx359eej","qj2ol5px","zxzy6drj","zx702m0j","qjn50gqj","18vnr72j","e8ez4d68","0jm4m6ej","48gn04pj","pj0konm8","e8eyg32x","o86me2wj"]
// Object that converts user IDs into usernames. Sadly, this will have to automated eventually through embedding
// TODO: run API calls that embed runner usernames and convert them without this object
var runnerIdToNames = {'48gn04pj': 'Yuidesu', '68w6z23j': 'SwiftDynamics', 'qj26p67x': 'StunterLetsPlay', '0jm4m6ej': 'Knoll24', '98r0z381': 'DrYoshiyahu', 'y8dp6nm8': 'Dacktem', 'y8d51q5j': 'Cruxiable', 'zxzl7vn8': '1lomi', '7j46ykm8': 'Kader87', 'kjpqwo2x': 'BobBobbingson', '18vnr72j': 'Galaxygamer109', 'qjoq5ve8': 'SevenChords', '0jm774nj': 'St4ckeD', 'qxkld980': 'AirGuitarist', '18qr6e0j': 'Codiferus', '68w6o3vj': 'Balduron04', '98rp5e6j': 'Paracusia', '5j5w7wjv': 'Rexaaayyy', 'y8dwmolj': 'Yamayamauchiman', '18vrgznx': 'Aqua_Zw', 'e8enr778': 'CrabBar', '7j4dm5lj': 'Zawza', 'zx702m0j': 'ggcookies', 'zx7e1687': 'Jack', 'y8d5m5lj': 'AdventurerAlex123', 'zxzy6drj': 'SioNisti', 'qj2ol5px': 'mrlink2k', 'dx359eej': 'Taz', '0jmqynzx': 'Saya', 'e8ez4d68': 'Yoshikiller109', 'qjn50gqj': 'LadyChristie', 'pj0v59xw': 'Wilko', '7j4dzn5j': 'assasin900', 'kj9dnkrx': 'ToastNomNomNom', 'dx3mek28': 'DevaVentus', 'o863wnp8': 'ZeroOne', 'o86me2wj': 'Shichimiya', '18v5k2vj': 'anglakey', 'e8eyg32x': 'GoriVerde', 'pj0wyl38': 'TrooperJt', '5j591wxv': 'UnPro', 'pj0konm8': 'Tappoutmc34ftw', 'e8e9d3dj': 'PokemonAce101', 'e8e6y67j': '2Troublesome', 'e8e7pdpx': 'Andrew_Mac', 'e8ee40p8': 'LevelWorld', 'kj9d4rvx': 'Yodapowers_', '68wlrkqj': 'swiftzircon', 'qxk23n7x': 'Hdiszle', '1xyvrgmx': 'darkislight', 'v81vpgp8': 'TVGBadger', 'zxzzpp0x': 'Fawnzee', 'zx7zw3q8': 'ModestTomato', '18vp0258': 'Japanese_Joke', '0jmqvwox': 'NecroNatwhal', 'kj9dl4wx': 'Jazox', '48g9k71x': 'Bodie', 'qxkq4mkx': 'Nuex', 'kj9d6e7x': 'WeEatPears', '18qq5678': 'FeneOne', '7j4oo758': 'Flame970', 'kjpok628': 'Javascript', '48g942xp': 'agyroth', '1xyrz4vj': 'SusiKette', 'v8l1r7jm': 'ProfanedGlitch', '48gm6dp8': 'PepsiMAX', 'e8eeqo80': 'Blaust', '0jmrgzo8': 'Eresor', '1xyr75vj': 'DrRobotnikLand', 'qxk1dz9j': 'PhaxeCoach', 'qj2ygr78': 'Rhombu', '7j40ged8': 'DlinkS', 'qjnqv0dj': 'TopHatApple', 'qjnqdywj': 'Lokipere', '18vmy0v8': 'GearUp', 'e8el6y2j': 'Silexacies', 'kj9d9dox': 'UnboundShark', '68w3olqj': 'naknuL', '1xyvprmx': 'Cube_', 'v8lrg5l8': 'Mack2in', 'qxkp5e6j': 'Llurik', 'v81m7r58': 'Tobafett', 'v8lke64x': 'marcooos', 'zxz430jq': 'RinRabbit', '98rqy0qx': 'CreamyCannon', 'dx3w00kj': 'Raven123321', '48g50o2j': 'Hu3y524', '7j42w6dx': 'DaHoboKing', '68w3wmvj': 'TMHThomas', 'e8eekkp8': 'Domos', 'zxzvpz0j': 'UsefulGarbage', 'y8d3epox': 'z0rr013', '98r7lndj': 'Ornery Ike', '0jmqvmex': 'Claypool', 'qxkw32x0': 'ShawKill', '7j4q5ydx': 'Kimseru', '18v2e15j': 'Stophen', 'zx7253y8': 'TixTak', 'zxz1159j': 'MDMeaux', '98r1qv6j': 'Omfgitsg00', '18vrv62x': 'Pikuss', '48g2m02j': 'Newsplash', 'pj0n6qw8': 'DolphinDasher', 'zxz7q70j': 'Igon', 'y8dg2986': 'MrMopi5000', '7j4p3dwj': 'BenSammell', 'y8de1zgj': 'PsiOnyx_', '5j5pozz8': 'DizzySkin', 'dx3p3278': 'Sefakirik46xc', 'v8l00l78': 'Wolfalous', '7j4we3vx': 'cheekyKup', '18vy1ev8': 'Darklightsds', 'o86evwpx': 'evan052006', '48gynv18': 'Yumemi', 'dx3qnp6j': 'Zwexqukav', '48gr47rx': 'OnlyMidknight', 'v8l4qnrj': 'mirusu400', '68w1p93x': 'Emius', '1xy5wen8': 'halichoerus', 'kj92v478': 'BandsWithLegends', 'pj0v2owx': 'ginga', '0jmpz04j': 'TheGreatZiggyny', 'kj9rmdrj': 'Hellacious', '68wpovxg': 'Straevaras', 'dx3yy78l': 'TheVideoGameBadger', '98r41qj1': 'Knjazvetal', '5j5v7lw8': 'Lyren', 'kjp4eoyj': 'xFury', '68w1y0lx': 'Max_Overpower', 'kjpmnn0j': 'Kappathst', 'zxz9r48q': 'toad1750', 'y8d4yvg8': 'Swanklion', 'qjnzl52j': 'jronaggaz', 'qjope30x': 'spottrigger', 'e8enoq78': 'Imadolphin', 'qjn6lmwx': 'PavleSux', 'qxkzym2x': 'PapaJuan', '1xyk0ez8': 'BlackBelt', 'e8e6nyoj': 'Cirno-baka9', '18vredvx': 'Dr.Sandwich', 'e8eo2d6j': 'Sparksysam', '48go7vrx': 'Refusek', 'qj26p3nx': 'Notag', 'kjpov9y8': 'DragonHeart000', '48gz2dpj': 'MagicBaker', '1xyr5vzj': 'ethanmallard1', 'pj01qe9x': 'cf', 'y8de11lj': 'Xanderius', 'qjn5og4j': 'KagamiiX', '48g9r97x': 'SmashR_TheRedMage', 'v8l61448': 'Lauk', '98r6mnw8': 'yumatei', '98rmknqj': 'null'}

const runnerScore = [["zxzl7vn8",9999],["68w6z23j",634],["0jm4m6ej",532],["98r0z381",43],["y8d51q5j",23],["qj26p67x",12],["48gn04pj",3],["y8dp6nm8",0]]

export {categoryIDLookUp, runnerIdToNames, runnerScore};

// logic for getting all unique IDs for all runs in Terraria
// var runners=[]
//
// function findAllUniqueRunners(url){
//   fetch(url)
//   .then(resp=>{
//     //error handling
//     if(!resp.ok){
//       if(resp.status>=400 && resp.status <500){
//         return resp.json().then(data=> {
//           let err= {errorMessage:data.message};
//           throw err;
//         })
//       } else {
//         let err = {errorMessage: 'Please try again later. Server down'};
//         throw err
//       }
//     }
//   return resp.json();
//   })
//   .then(data => {
//     let runs = data;
//     for(let i = 0; i<runs.data.length; i++){
//       for(let j = 0; j<runs.data[i].players.length; j++){
//         //check to see if runner is unique
//         if(!runners.includes(runs.data[i].players[j].id)){
//           runners.push(runs.data[i].players[j].id);
//         }
//       }
//     }
//     //going to next page, next can be either position
//     if(data.pagination.links[0].rel=="next"){
//       findAllUniqueRunners(data.pagination.links[0].uri);
//     } else if(data.pagination.links[1] && data.pagination.links[1].rel=="next"){
//       findAllUniqueRunners(data.pagination.links[1].uri);
//     } else {
//       //no more pages, return array of IDs
//       console.log(runners);
//       return runners;
//     }
//   })
// }
// findAllUniqueRunners("https://www.speedrun.com/api/v1/runs?game=kdk4e21m");
//
// // logic for getting usernames from API
// var runnerIDs = ["zxzl7vn8","68w1y0lx","kj92v478","kj9rmdrj","98r41qj1","7j4q5ydx","68w1p93x","v8l1r7jm","48gm6dp8",null,"48g942xp","zxz1159j","48g50o2j","zxz430jq","7j40ged8","18v2e15j","o863wnp8","18v5k2vj","e8e9d3dj","5j591wxv","dx3w00kj","7j42w6dx","zx7253y8","e8eeqo80","qxkw32x0","98r7lndj","1xyrz4vj","e8eekkp8","qxkp5e6j","v81m7r58","7j46ykm8","0jm774nj","98r0z381","e8ee40p8","18vrgznx","pj0wyl38","zx7e1687","v8lrg5l8","68w3olqj","y8dp6nm8","y8dwmolj","y8d3epox","pj0v59xw","dx3mek28","qxkld980","qj26p67x","68wlrkqj","18qr6e0j","y8d4yvg8","dx3yy78l","0jmpz04j","68wpovxg","qjnzl52j","5j5v7lw8","zxz9r48q","y8dg2986","qjope30x","kjp4eoyj","v8l4qnrj","48gr47rx","dx3qnp6j","1xy5wen8","pj0v2owx","kjpmnn0j","dx3p3278","zxz7q70j","pj0n6qw8","v8l00l78","qj26p3nx","48g2m02j","1xyk0ez8","5j5pozz8","v8l61448","98r1qv6j","e8eo2d6j","qjn6lmwx","y8de11lj","18vredvx","y8de1zgj","48go7vrx","18vrv62x","7j4p3dwj","e8e6nyoj","qxkzym2x","e8enoq78","pj01qe9x","kjpov9y8","98r6mnw8","48gz2dpj","7j4we3vx","1xyr5vzj","48g9r97x","qjn5og4j","18vy1ev8","o86evwpx","48gynv18","v81vpgp8","0jmrgzo8","qxk23n7x","e8e6y67j","7j4oo758","zxzzpp0x","qj2ygr78","18vmy0v8","zx7zw3q8","e8e7pdpx","qxkq4mkx","1xyvrgmx","kjpok628","kj9d6e7x","18vp0258","18qq5678","1xyr75vj","e8el6y2j","48g9k71x","kj9d4rvx","kj9dl4wx","98rqy0qx","1xyvprmx","zxzvpz0j","0jmqvmex","qjnqv0dj","0jmqvwox","68w3wmvj","qxk1dz9j","kj9d9dox","qjnqdywj","v8lke64x","7j4dm5lj","y8d5m5lj","e8enr778","7j4dzn5j","0jmqynzx","5j5w7wjv","98rp5e6j","y8d51q5j","qjoq5ve8","kjpqwo2x","68w6z23j","68w6o3vj","kj9dnkrx","dx359eej","qj2ol5px","zxzy6drj","zx702m0j","qjn50gqj","18vnr72j","e8ez4d68","0jm4m6ej","48gn04pj","pj0konm8","e8eyg32x","o86me2wj"]
// var runnerObj = {}
// for(let i = 0; i<runnerIDs.length; i++){
//   fetch('https://www.speedrun.com/api/v1/users/' + runnerIDs[i])
//     .then(resp=>{
//       if(!resp.ok){
//         if(resp.status>=400 && resp.status <500){
//           return resp.json().then(data=> {
//             let err= {errorMessage:data.message};
//             throw err;
//           })
//         } else {
//           let err = {errorMessage: 'Please try again later. Server down'};
//           throw err
//         }
//       }
//     return resp.json();
//     })
//     .then(data => {
//       var runnerID = data.data.id;
//       runnerObj[runnerID] = data.data.names.international;
//       if(i==runnerIDs.length-1){
//         console.log(runnerObj);
//       }
//     })
// }
//
// logic for getting all of the variables stored as an array of objects for a certain category
// var MLvariables = []
//
// fetch('https://www.speedrun.com/api/v1/categories/zd3yzvn2/variables')
//   .then(resp=>{
//     if(!resp.ok){
//       if(resp.status>=400 && resp.status <500){
//         return resp.json().then(data=> {
//           let err= {errorMessage:data.message};
//           throw err;
//         })
//       } else {
//         let err = {errorMessage: 'Please try again later. Server down'};
//         throw err
//       }
//     }
//   return resp.json();
//   })
//   .then(data => {
//     console.log(data);
//     for(let i=0; i<data.data.length; i++){
//       eachVar = data.data[i].values.choices;
//       eachVar.name = data.data[i].name;
//       eachVar.id=data.data[i].id;
//       MLvariables.push(eachVar);
//     }
//     console.log(MLvariables);
//   })
//
// Construct variable conversion
// Constructs a variables object for one of the main four categories. Moon Lord, Night's Edge, All Bosses, All Pre-HM Bosses
// this object is structured like and used to convert English names to IDs and visa-versa for readability and flexibility of code.
// This code could be improved by running a function that only takes the category ID (english or ID), but at the moment I haven't needed that much mutability
// "Moon Lord" :{
// 		"categoryID": "zd3yzvn2",
// 		"variables": {
// 			"Difficulty": {
// 				"id": "p852qv8g",
// 				"Normal":"5q8kv3gq",
// 				"Expert":"4qyz2m41"
// 			},
// 			"Seeds": {
// 				"id": "rn12wklj",
// 				"Random": "z192vpjq",
// 				"Seeded": "p12vk0vq"
// 			},
// 			"# of Players": {
// 				"id": "ylpzvk8g",
// 				"1 Player": "21g9exxq",
// 				"2 Players": "jqzgv04l"
// 			},
// 			"Patch Used": {
// 				"id":"e8morel6",
// 				"1.3.5": "21d65p3q",
// 				"1.3.4.4": "klrx980l",
// 				"1.3.3": "jqzg9o4l",
// 				"1.3.2.1": "21g95kxq",
// 				"1.3.0.8": "gq72pyn1"
// 			}
// 		}
// 	}
// construct variable conversion function
// fetch("https://www.speedrun.com/api/v1/categories/n2y1lve2/variables")
// 		//error handling
//     .then(resp=>{
//       if(!resp.ok){
//         if(resp.status>=400 && resp.status <500){
//           return resp.json().then(data=> {
//             let err= {errorMessage:data.message};
//             throw err;
//           })
//         } else {
//           let err = {errorMessage: 'Please try again later. Server down'};
//           throw err
//         }
//       }
//     return resp.json();
//     })
//     .then(data => {
//         var allBossesIDs = {};
//         allBossesIDs.categoryID = "n2y1lve2";
//         allBossesIDs.variables = {};
// 			//nesting variables objects
//         data.data.forEach(function(element, index){
//           allBossesIDs.variables[element.name] = {}
//           allBossesIDs.variables[element.name].id = element.id;
// 				//can we please have some meaningful variable names in the next version of this API
//           for(property in element.values.values){
//             allBossesIDs.variables[element.name][element.values.values[property].label] = property
//           }
//         })
// 			//prints object to console, could be done more eloquently
//         console.log(data.data);
//         console.log(allBossesIDs);
//     })
