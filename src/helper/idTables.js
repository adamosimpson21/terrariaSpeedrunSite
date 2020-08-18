import {findAllUniqueRunners, addRunnerNames} from "./idConstructors";

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
  'Queen Slime': {
    'type': 'level',
    'id': 'rdn2x4qd',
    'image': 'queenSlime.png'
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
  'Empress of Light':{
    'type' : 'level',
    'id' : 'ldy8klkw',
    'image':'empressOfLight.png'
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
		'Expert': 'rqvv0n5q',
    'Master': '0q5k6j2q'
	},
	'Seeds': {
		'id': 'j8423jn9',
		'Random': '814o6nwq',
		'Seeded': '4lx5kjj1'
	},
	'Players': {
		'id': 'ylpzvk8g',
		'1 Player': '21g9exxq',
		'2 Players': 'jqzgv04l'
	},
	'Major patch': {
	   'id': 'e8morel6',
     "1.4":'mlnrnvjq',
     "1.4 NMA":'zqod06x1',
     "Journey":'5lmzpwjq',
     "1.3.5":'21d65p3q',
     "1.3.5 NMA":'klryw32q',
     "Legacy patches":'klrx980l'
	}
}

const runnerIds = ["zxzl7vn8","68w1y0lx","kj92v478","kj9rmdrj","98r41qj1","7j4q5ydx","68w1p93x","v8l1r7jm","48gm6dp8",null,"48g942xp","zxz1159j","48g50o2j","7j40ged8","18v2e15j","o863wnp8","18v5k2vj","e8e9d3dj","5j591wxv","dx3w00kj","7j42w6dx","zx7253y8","e8eeqo80","qxkw32x0","98r7lndj","1xyrz4vj","e8eekkp8","qxkp5e6j","v81m7r58","7j46ykm8","0jm774nj","98r0z381","e8ee40p8","18vrgznx","pj0wyl38","zx7e1687","v8lrg5l8","68w3olqj","y8dp6nm8","y8dwmolj","y8d3epox","dx3mek28","qxkld980","qj26p67x","68wlrkqj","18qr6e0j","y8d4yvg8","dx3yy78l","0jmpz04j","68wpovxg","qjnzl52j","5j5v7lw8","zxz9r48q","y8dg2986","qjope30x","kjp4eoyj","v8l4qnrj","48gr47rx","dx3qnp6j","1xy5wen8","pj0v2owx","dx3p3278","zxz7q70j","pj0n6qw8","v8l00l78","qj26p3nx","48g2m02j","1xyk0ez8","5j5pozz8","v8l61448","98r1qv6j","e8eo2d6j","qjn6lmwx","y8de11lj","18vredvx","48go7vrx","18vrv62x","7j4p3dwj","e8e6nyoj","qxkzym2x","e8enoq78","pj01qe9x","kjpov9y8","y8de1zgj","98r6mnw8","48gz2dpj","7j4we3vx","1xyr5vzj","48g9r97x","qjn5og4j","18vy1ev8","o86evwpx","48gynv18","v81vpgp8","0jmrgzo8","qxk23n7x","e8e6y67j","7j4oo758","zxzzpp0x","18vmy0v8","zx7zw3q8","e8e7pdpx","qxkq4mkx","1xyvrgmx","kjpok628","kj9d6e7x","18vp0258","18qq5678","1xyr75vj","e8el6y2j","48g9k71x","kj9d4rvx","kj9dl4wx","98rqy0qx","1xyvprmx","zxzvpz0j","0jmqvmex","qjnqv0dj","0jmqvwox","68w3wmvj","qxk1dz9j","kj9d9dox","qjnqdywj","v8lke64x","7j4dm5lj","y8d5m5lj","e8enr778","7j4dzn5j","0jmqynzx","5j5w7wjv","98rp5e6j","y8d51q5j","qjoq5ve8","kjpqwo2x","68w6z23j","68w6o3vj","kj9dnkrx","dx359eej","qj2ol5px","zxzy6drj","zx702m0j","qjn50gqj","18vnr72j","e8ez4d68","0jm4m6ej","48gn04pj","pj0konm8","e8eyg32x","o86me2wj","18qkezo8","18qz0pd8","48gnko2j","dx37rze8","7j4ge05j","zx75d4r8","zxzpegnj","68wzdyv8","0jmvewoj","48g1n028","pj049k4x","qjovl9nx","v81500lj","v8150g5j","kjpn745x","e8e9302j","o86d215j","qjo972ej","7j4n9qmx","o860yzp8","zxzkonnx","y8d7dym8","zx71ny6x","7j4mp0lj","qxkd67mj","o861e4qj","y8dm3398","68wdllqx","7j4mk0dj","kjpde74j","1xyenvy8","v81zq4lj","zx7rz1qj","48g35lrx","y8dvrv58","o86z710x","68wer738","5j51pdg8","68w7oz4x","kj9yk4nx","18q1reox","kj9mpwox","o86l4oq8","zxzq9yrx","18q9zz0j","qxkwm2x0","0jm69e81","y8dwlloj","v816prlx","dx35pmej","1xy5dzn8","5j5w4ozj","pj0nn298","v8l04o28","kjpr4m08","pj07n4xw","qxkomr78","y8dm5m86","1xy55lm8","pj0n3298","qjo3y9nj","kj92p778","kj923078","zx7q5w08","qj2713o8","18v47558","kj97zdnx","kjpy464j","kj9mwrrx","o86w0yqx","7j4erplx","v8lwqn7x","18qg35ox","qjnweqwj","18vn6znj","e8e3vkpj","48gqp77j","48gq47pj","kj9gk07x","qjozm638","kjprkw48","o862vk5x","qxklog68","1xydlpyx","1xydkynx","48g10dr8","zx7vdnqx","zxzgyvej","qj24or78","e8e32qdj","0jmn5o4x","68wprllx","98ro0768","qjo0957j","zx70wv6j","zx7yvyx7","qxk4wq7j","zx7v3vrx","kjp1gn2j","zx7rq6vj","0jm0q6y8","qjno40dx","kj9w17o8","7j4425lj","kj94oewx","e8epvy7x","xz9m9598","5j50qp6x","qjnodm1x","j2yvw0n8","8wkylm38","j4rlprv8","jmo2zq48","jmo2d7n8","v8lv5gvj","0jmdqo4j","dx3k2d2j","o86vkgpj","y8d00plx","zx7deyyx","98rd4zwj","8geeo5pj","j4rrpom8","j5w7o4nj","j5wwggqj","8e994k6j","1xyp33zx","jo342n7j","j5wwrpwj","7j41lmlj","jprrw108","8144py58","86vnngwj","kj9zyvo8","8gerryyj","8qzrp708","8dw3po9j","1xyl7zjr","8146vkp8","8gerzzrj","j2yw7wp8","xko4ld98","8gerpgrj","x7q2pyy8","kj9ywdrx","8qz3p4o8","8l04wkl8","8e96gk2j","v8l27qrx","zx7d270x","v8l6dlv8","8l030zv8","x7q2ekr8","86v3qg5j","x7qwnlq8","1xydq6vx","xz905v98","x7q6go68","7j49qql8","j4r09pw8","8e9wqn6j","j92k2ev8","jo3kn5nj","kj957d78","8e9eol6j","8wk334v8","qjnepr1j","pj0y6n3x","j2yql3l8","8qz5elw8","8wk7y2z8","v81z3n3j","5j5d3q68","jo34d0ej","8dwenmlj","x7qz5468","j2ypron8","j4rpnod8","18qqy108","x7qz5068","j5wpyp6j","jo3kqw3j","qxknn77x","98r9erq8","zx70eqqj","j4rp3l58","j2ypm2l8","j5wpy6nj","jmo69on8","7j4opzw8","8rp6g93j","e8eq52d8","xkozmlm8","68wlov4j","j5wrv4qj","8e9zkm7j","j5wrqpnj","814vmw38","v81y5958","jprpyy58","j4rpw1v8","j2y12e68","dx3w252j","8wkg5m38","x351vvkj","814v35r8","jo3z717j","8gezlzrj","xz954k08","zx7ywq6x","8l0zqzr8","8e9kqqdj","98reevqx","x7qgdmv8","j4rwnpw8","7j4z0mdx","xy5yzlw8","zx70w0j7","jmo0dzz8","98r521qx","kjpdke2j","jprpee58","8v5rdynj","8wk35d38","x3512e6j","j4rw1ow8","8rprg93j","x7qyqwy8","j4r7rkd8","j2ywdvo8","8rpr3ydj","jpr9o2k8","j92lr0v8","5j560rzx","xz9n0208","8wk50wv8","8l0kzvl8","x35r1q7j","j92lllo8","jo3llv3j","8wk5gez8","jmoyr3y8","qj2e7z6j","8qznkwo8","j0nlle48","8l05yv48","8wkylwz8","8rp6ywqj","j0n3qk98","8v5yq0nj","jo3g4d7j","68wle3qj","j2yev0o8","qj231nlx","j2ye33p8","8geyzoyj","8l02z5r8","x7qeqp68","8dw7e6mj","8gezq4rj","x35en46j","x351rpkj","8rp1w7qj","8v5mdq5j","x35egd7j","xkonv028","8dw7zkoj","jn3336qx","8rp549qj","18v6gnxl","814elep8","jn3043dx","8rpk2mqj","8qzg5078","xko20v28","jmom5m48","7j4ypkmj","8gekpe1j","jn30e22x","8rpqp0gj","j92zrro8","xy5vmvw8","j0ndl238","xy5v9pw8","8e9l4edj","86vdog3j","xz9v3608","86vmnepj","8v5nopnj","pj0v59xw","8e9y2doj"]
const runnerIdToNames = {"zxzl7vn8":"1lomi","68w1y0lx":"Max_Overpower","kj92v478":"BandsWithLegends","kj9rmdrj":"Hellacious","98r41qj1":"Knjazvetal","7j4q5ydx":"Kimseru","68w1p93x":"Emius","v8l1r7jm":"ProfanedGlitch","48gm6dp8":"PepsiMAX","48g942xp":"agyroth","zxz1159j":"MDMeaux","48g50o2j":"Hu3y524","7j40ged8":"DlinkS","18v2e15j":"Stophen","o863wnp8":"ZeroOne","18v5k2vj":"anglakey","e8e9d3dj":"PokemonAce101","5j591wxv":"UnPro","dx3w00kj":"Raven123321","7j42w6dx":"DaHoboKing","zx7253y8":"TixTak","e8eeqo80":"Blaust","qxkw32x0":"ShawKill","98r7lndj":"Ornery Ike","1xyrz4vj":"ScottySR","e8eekkp8":"Domos","qxkp5e6j":"Llurik","v81m7r58":"Tobafett","7j46ykm8":"Kader87","0jm774nj":"St4ckeD","98r0z381":"DrYoshiyahu","e8ee40p8":"LevelWorld","18vrgznx":"Aqua_Zw","pj0wyl38":"TrooperJt","zx7e1687":"Jack","v8lrg5l8":"Mack2in","68w3olqj":"naknuL","y8dp6nm8":"Dacktem","y8dwmolj":"Yamayamauchiman","y8d3epox":"z0rr013","dx3mek28":"DevaVentus","qxkld980":"AirGuitarist","qj26p67x":"StunterLetsPlay","68wlrkqj":"swiftzircon","18qr6e0j":"Codiferus","y8d4yvg8":"Swanklion","dx3yy78l":"TheVideoGameBadger","0jmpz04j":"TheGreatZiggyny","68wpovxg":"Straevaras","qjnzl52j":"jronaggaz","5j5v7lw8":"Lyren","zxz9r48q":"Ashyurii","y8dg2986":"MrMopi5000","qjope30x":"spottrigger","kjp4eoyj":"xFury","v8l4qnrj":"mirusu400","48gr47rx":"OnlyMidknight","dx3qnp6j":"Zwexqukav","1xy5wen8":"halichoerus","pj0v2owx":"ginga","dx3p3278":"Sefakirik46xc","zxz7q70j":"Igon","pj0n6qw8":"DolphinDasher","v8l00l78":"Wolfalous","qj26p3nx":"Notag","48g2m02j":"Newsplash","1xyk0ez8":"BlackBelt","5j5pozz8":"DizzySkin","v8l61448":"Lauk","98r1qv6j":"Omfgitsg00","e8eo2d6j":"Sparksysam","18vredvx":"Dr.Sandwich","18vrv62x":"Pikuss","48go7vrx":"Refusek","y8de11lj":"Xanderius","7j4p3dwj":"BenSammell","e8e6nyoj":"SylvetteSylveon","qxkzym2x":"PapaJuan","e8enoq78":"Imadolphin","qjn6lmwx":"PavleSux","7j4we3vx":"cheekyKup","48gz2dpj":"MagicBaker","98r6mnw8":"yumatei","y8de1zgj":"PsiOnyx_","kjpov9y8":"DragonHeart000","pj01qe9x":"cf","kj9dl4wx":"Jazox","kj9d4rvx":"Yodapowers_","48g9k71x":"Bodie","e8el6y2j":"Silexacies","1xyr75vj":"DrRobotnikLand","18qq5678":"FeneOne","18vp0258":"Japanese_Joke","kj9d6e7x":"WeEatPears","kjpok628":"Javascript","1xyvrgmx":"darkislight","qxkq4mkx":"Nuex","e8e7pdpx":"Andrew_Mac","zx7zw3q8":"ModestTomato","18vmy0v8":"GearUp","zxzzpp0x":"Fawnzee","7j4oo758":"Flame970","e8e6y67j":"2Troublesome","qxk23n7x":"Hdiszle","0jmrgzo8":"Eresor","v81vpgp8":"TVGBadger","48gynv18":"Yumemi","o86evwpx":"evan052006","18vy1ev8":"Darklightsds","qjn5og4j":"KagamiiX","48g9r97x":"SmashR_TheRedMage","1xyr5vzj":"ethanmallard1","kjpqwo2x":"BobBobbingson","qjoq5ve8":"SevenChords","y8d51q5j":"Cruxiable","98rp5e6j":"Paracusia","5j5w7wjv":"Rexaaayyy","0jmqynzx":"Saya","7j4dzn5j":"assasin900","e8enr778":"CrabBar","y8d5m5lj":"Phantasm_CodeXSG","7j4dm5lj":"Zawza","v8lke64x":"marcooos","qjnqdywj":"Lokipere","kj9d9dox":"UnboundShark","qxk1dz9j":"PhaxeCoach","68w3wmvj":"TMHThomas","0jmqvwox":"NecroNatwhal","qjnqv0dj":"TopHatApple","0jmqvmex":"Claypool","zxzvpz0j":"UsefulGarbage","1xyvprmx":"Cube","98rqy0qx":"CreamyCannon","e8ez4d68":"Yoshikiller109","18vnr72j":"Galaxygamer109","qjn50gqj":"LadyChristie","zx702m0j":"ggcookies","zxzy6drj":"SioN","qj2ol5px":"mrlink2k","dx359eej":"Taz","kj9dnkrx":"ToastNomNomNom","68w6o3vj":"Balduron04","68w6z23j":"SwiftDynamics","18qkezo8":"Cloch73","o86me2wj":"Shichimiya","e8eyg32x":"GoriVerde","pj0konm8":"Tappoutmc34ftw","48gn04pj":"Yuidesu","0jm4m6ej":"Knoll24","7j4ge05j":"BlobDylan","48gnko2j":"Nacho82","dx37rze8":"Byrd","18qz0pd8":"xXWalkingDeathXx","zxzpegnj":"Kainy","zx75d4r8":"Servant","qjovl9nx":"LilQuaz","68wzdyv8":"Ralekk","0jmvewoj":"dave5005","v81500lj":"Lenford_Leonard","pj049k4x":"CrazyK","48g1n028":"Calum79","v8150g5j":"Flarefin","o86d215j":"MaxFrei4","kjpn745x":"RageMan","qjo972ej":"Vlorder","7j4n9qmx":"Gabri3","e8e9302j":"connor_0212","68wdllqx":"Red.ffs","y8d7dym8":"Voltack123","7j4mp0lj":"Ningishu","o861e4qj":"catlop","qxkd67mj":"PhasingDice","y8dm3398":"Denyan","o860yzp8":"Teresu","zx71ny6x":"xxxholic2020","zxzkonnx":"CaptainDoofus","68wer738":"RellikZruns","o86z710x":"Shreke","y8dvrv58":"Brogan_","48g35lrx":"IOwnPotatoes","v81zq4lj":"NoisyKarma01","1xyenvy8":"d8texe","kjpde74j":"thevukovic","zx7rz1qj":"SMence","7j4mk0dj":"Musk_ox76","5j51pdg8":"rythin","68w7oz4x":"Stuoid","kj9yk4nx":"chocolatecake5000","18q1reox":"Justnotgood","kj9mpwox":"SpicyBubels","o86l4oq8":"Daiko__","18q9zz0j":"Bandi","qxkwm2x0":"Master_Yoda","zxzq9yrx":"Tubsen5","y8dwlloj":"NinjaNas","0jm69e81":"FearfulFerret","5j5w4ozj":"DemonicGamer123","1xy5dzn8":"QuackLord","pj0nn298":"TheAlchemistGamer","v816prlx":"JuanPunchMan","dx35pmej":"jani69","v8l04o28":"The_Beninator","kjpr4m08":"Sweetsu","1xy55lm8":"GameTurtleX","pj07n4xw":"pedguin","qxkomr78":"LukeSpense","y8dm5m86":"JuanPablo","pj0n3298":"Dingus","kj92p778":"PreferredSelection","qjo3y9nj":"skye4life","kj923078":"Aapee","zx7q5w08":"Dusky","qj2713o8":"AndrewHatesIan","18v47558":"Brzyrt","kj97zdnx":"Smichman123","kjpy464j":"launch2k","kj9mwrrx":"Descendrio","o86w0yqx":"Trend","7j4erplx":"FeaR","v8lwqn7x":"truecrowbarpowah","e8e3vkpj":"MadMax_0407","18qg35ox":"InstaFiz","qjnweqwj":"Axwood","18vn6znj":"Voktor","48g10dr8":"Rockstomb","1xydkynx":"hotfieryramen","1xydlpyx":"-XzBrawl_NinjazX-","qxklog68":"Centinull","o862vk5x":"SkyzSoars","kjprkw48":"RyuQuezacotl","qjozm638":"Nivlak","kj9gk07x":"NONYRAU","48gq47pj":"BR4ECJlAB","48gqp77j":"Jibval","zx7v3vrx":"Crzyclocker","qxk4wq7j":"emcrockstar","zx7yvyx7":"edzan","zx70wv6j":"Ryreaka","qjo0957j":"DurranSD","98ro0768":"skyper24","68wprllx":"Curt0815","0jmn5o4x":"jusrus13","e8e32qdj":"EthanJayAce","qj24or78":"SWATDuck","zxzgyvej":"Depriesticles","zx7vdnqx":"narzick","qjno40dx":"Kelpat","0jm0q6y8":"Baliame","zx7rq6vj":"S-TWO","kjp1gn2j":"Yorbos","jprrw108":"StrilX","7j41lmlj":"xXxRevolutiøn","j5wwrpwj":"Snoo24","jo342n7j":"A_Person_13","1xyp33zx":"josh.uwu","8e994k6j":"zngooo","j5wwggqj":"Ariesz83","j5w7o4nj":"Cookie_Eater","j4rrpom8":"PancakeMaster28","8geeo5pj":"Pentaplay","98rd4zwj":"Mikashigi","zx7deyyx":"Javantea","y8d00plx":"plank","o86vkgpj":"Faustas","dx3k2d2j":"Jaarl","0jmdqo4j":"darlade","v8lv5gvj":"Mazzie","jmo2d7n8":"lukeguere","jmo2zq48":"camel","j4rlprv8":"Ranga","8wkylm38":"The_1ndiegamer","j2yvw0n8":"TylrodtheTerrariaGod","qjnodm1x":"Asdd487","5j50qp6x":"Tobyyx3","xz9m9598":"chewty","e8epvy7x":"AAAAAAA","kj94oewx":"Xinn","7j4425lj":"SgtChuckles","kj9w17o8":"hellfireofdoom","x7q2pyy8":"quack009","8gerpgrj":"Synidix","xko4ld98":"TheTiredFox","j2yw7wp8":"copy_cat","8gerzzrj":"XCC48","8146vkp8":"NoahMD","1xyl7zjr":"TheTrooble","8dw3po9j":"ChunkyChomp","8qzrp708":"Crazy_Blake","8gerryyj":"AestheticGravity","kj9zyvo8":"wadeisbadatgames","86vnngwj":"nicroveda123456762","8144py58":"BreadLoaf","qxknn77x":"smythe","jo3kqw3j":"InceptionSpeedruns","j5wpyp6j":"Zigrey","x7qz5068":"EthanPhelps","18qqy108":"KrakenTheJaken","j4rpnod8":"Waifuwu0","j2ypron8":"TheTerrariaTrio","x7qz5468":"poggeroni","8dwenmlj":"terrariaisdead","jo34d0ej":"Sness","5j5d3q68":"Barber","v81z3n3j":"megamanreborn","8wk7y2z8":"WaveySK","8qz5elw8":"mewsubi","j2yql3l8":"OfficialAdz101","pj0y6n3x":"Beffort","qjnepr1j":"FearTheVillain3","8wk334v8":"IamAbus","8e9eol6j":"XFC-Astoria","kj957d78":"Inevitable","jo3kn5nj":"kaeru_no_kane","j92k2ev8":"Ningi","8e9wqn6j":"szydlovsky","j4r09pw8":"ILikeToColor","7j49qql8":"Foxygen","x7q6go68":"itsyaboyjoshie","xz905v98":"NathanMucher","1xydq6vx":"KingZabra","x7qwnlq8":"MrNyoom","86v3qg5j":"Kruyoto","x7q2ekr8":"Apelta","8l030zv8":"Manzia","v8l6dlv8":"Numberplay","zx7d270x":"ProverbialPenguin","v8l27qrx":"reBTF","8e96gk2j":"InTime99","8l04wkl8":"El_powel","8qz3p4o8":"Suranis90","kj9ywdrx":"bloxar","xkozmlm8":"mell_jelly","e8eq52d8":"Sonicraft118","8rp6g93j":"TBPengy","7j4opzw8":"EchoStorm","jmo69on8":"Matsyir","j5wpy6nj":"xSolarz","j2ypm2l8":"BlueSamurai","j4rp3l58":"Link5963","zx70eqqj":"Perodi","98r9erq8":"TheSmashHero","8e9zkm7j":"Terminus_xX","j5wrv4qj":"Pianoboycaleb","68wlov4j":"Ghost1280","jmo0dzz8":"tek_69","zx70w0j7":"MochaS","xy5yzlw8":"WillFulForza","7j4z0mdx":"infinityeight","j4rwnpw8":"AnniederBaum","x7qgdmv8":"Meliamé","98reevqx":"Kowa","8e9kqqdj":"BlaZ","8l0zqzr8":"SilkTach","zx7ywq6x":"chester123569","xz954k08":"Even645","8gezlzrj":"BedHeadNinja","jo3z717j":"zetapressedAltF4","j4rpw1v8":"pmi_piranha","j5wrqpnj":"Durkah","814vmw38":"BenignAndAHalf13","j2y12e68":"Icysnowman","jprpyy58":"tjruk","v81y5958":"ChrisDaDerp","98r521qx":"wshedd","jprpee58":"Tychq","kjpdke2j":"LukasTheKIller2","8v5rdynj":"sands1orm91234","x3512e6j":"TheDarkMoon121","j4r7rkd8":"dougrocks421","8rprg93j":"KillerB","j4rw1ow8":"Dajen","x7qyqwy8":"wangzao93","j2ywdvo8":"Lenivy_krabik","8wk35d38":"deebo","8rpr3ydj":"ScarletSunrise","dx3w252j":"trainerjbird","8wkylwz8":"Rhøgar","8l05yv48":"zGamuT","j0nlle48":"lupusrandom","8qznkwo8":"kirby1080p","j92lr0v8":"DenyTriesToSpeedrun","x35r1q7j":"CactusBoiCactus","jpr9o2k8":"Olsh_Ajna","xz9n0208":"S1IverMustard","5j560rzx":"salti","8wk50wv8":"frostide","j92lllo8":"Dan1million","8l0kzvl8":"mooperdoop555","jmoyr3y8":"Borgar","8wk5gez8":"RandomSpan","qj2e7z6j":"master279_","jo3llv3j":"Archx13","814v35r8":"EddikSchmeddik","x351vvkj":"Aiffelowy","8wkg5m38":"Alkalaria","8e9y2doj":"DuckHammer","pj0v59xw":"Wilko","8v5nopnj":"Myni","86vmnepj":"CookedOven","xz9v3608":"Flukanz","86vdog3j":"henry9868","8e9l4edj":"Chappc1","xy5v9pw8":"Letkanexplain","j0ndl238":"CraftBox94","xy5vmvw8":"BoomBoxing","j92zrro8":"TristanLetsPlays","8rpqp0gj":"benjamin50483","jn30e22x":"Permaspark","8gekpe1j":"Nol789","7j4ypkmj":"Regot","jmom5m48":"SapphireSuicune","xko20v28":"timpylunk","8qzg5078":"SHADOWKITTEN","8rpk2mqj":"Drbolsen","jn3043dx":"PixelFlann","814elep8":"DominatingCrow","18v6gnxl":"baq","8rp549qj":"mezita1","jn3336qx":"MasterZo","8dw7zkoj":"moomanmarc","xkonv028":"KILLERKy1e","x35egd7j":"Dougman2","8v5mdq5j":"Daveed22","8rp1w7qj":"Jubbl3","x351rpkj":"Vertexia","x35en46j":"Sasege2","8gezq4rj":"Radz","8dw7e6mj":"Viby","x7qeqp68":"Koivuklapi","8l02z5r8":"StormZI","8geyzoyj":"BaconConQueso","j2ye33p8":"TheLastFish19","qj231nlx":"TheHaboo","j2yev0o8":"JoeriTube","68wle3qj":"BiSaXa","jo3g4d7j":"PattiS","8v5yq0nj":"DRSsecretGaming","j0n3qk98":"Scramble4","8rp6ywqj":"KollosZylan","8geeqdpj":"Null"}
export {categoryIDLookUp, runnerIdToNames, runnerIds, variableIDLookUp};
