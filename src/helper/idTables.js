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

const runnerIds = ["zxzl7vn8","68w1y0lx","kj92v478","kj9rmdrj","98r41qj1","7j4q5ydx","68w1p93x","v8l1r7jm","48gm6dp8",null,"48g942xp","zxz1159j","48g50o2j","zxz430jq","7j40ged8","18v2e15j","o863wnp8","18v5k2vj","e8e9d3dj","5j591wxv","dx3w00kj","7j42w6dx","zx7253y8","e8eeqo80","qxkw32x0","98r7lndj","1xyrz4vj","e8eekkp8","qxkp5e6j","v81m7r58","7j46ykm8","0jm774nj","98r0z381","e8ee40p8","18vrgznx","pj0wyl38","zx7e1687","v8lrg5l8","68w3olqj","y8dp6nm8","y8dwmolj","y8d3epox","dx3mek28","qxkld980","qj26p67x","68wlrkqj","18qr6e0j","y8d4yvg8","dx3yy78l","0jmpz04j","68wpovxg","qjnzl52j","5j5v7lw8","zxz9r48q","y8dg2986","qjope30x","kjp4eoyj","v8l4qnrj","48gr47rx","dx3qnp6j","1xy5wen8","pj0v2owx","dx3p3278","zxz7q70j","pj0n6qw8","v8l00l78","qj26p3nx","48g2m02j","1xyk0ez8","5j5pozz8","v8l61448","98r1qv6j","e8eo2d6j","qjn6lmwx","y8de11lj","18vredvx","y8de1zgj","48go7vrx","18vrv62x","7j4p3dwj","e8e6nyoj","qxkzym2x","e8enoq78","pj01qe9x","kjpov9y8","98r6mnw8","48gz2dpj","7j4we3vx","1xyr5vzj","48g9r97x","qjn5og4j","18vy1ev8","o86evwpx","48gynv18","v81vpgp8","0jmrgzo8","qxk23n7x","e8e6y67j","7j4oo758","zxzzpp0x","18vmy0v8","zx7zw3q8","e8e7pdpx","qxkq4mkx","1xyvrgmx","kjpok628","kj9d6e7x","18vp0258","18qq5678","1xyr75vj","e8el6y2j","48g9k71x","kj9d4rvx","kj9dl4wx","98rqy0qx","1xyvprmx","zxzvpz0j","0jmqvmex","qjnqv0dj","0jmqvwox","68w3wmvj","qxk1dz9j","kj9d9dox","qjnqdywj","v8lke64x","7j4dm5lj","y8d5m5lj","e8enr778","7j4dzn5j","0jmqynzx","5j5w7wjv","98rp5e6j","y8d51q5j","qjoq5ve8","kjpqwo2x","68w6z23j","68w6o3vj","kj9dnkrx","dx359eej","qj2ol5px","zxzy6drj","zx702m0j","qjn50gqj","18vnr72j","e8ez4d68","0jm4m6ej","48gn04pj","pj0konm8","e8eyg32x","o86me2wj","18qkezo8","18qz0pd8","48gnko2j","dx37rze8","7j4ge05j","zx75d4r8","zxzpegnj","68wzdyv8","0jmvewoj","48g1n028","pj049k4x","qjovl9nx","v81500lj","v8150g5j","kjpn745x","e8e9302j","o86d215j","qjo972ej","7j4n9qmx","o860yzp8","zxzkonnx","y8d7dym8","zx71ny6x","7j4mp0lj","qxkd67mj","o861e4qj","kjpdke2j","y8dm3398","68wdllqx","7j4mk0dj","kjpde74j","1xyenvy8","zx7rz1qj","48g35lrx","y8dvrv58","o86z710x","dx3z1n7j","68wer738","5j51pdg8","68w7oz4x","kj9yk4nx","18q1reox","kj9mpwox","o86l4oq8","zxzq9yrx","18q9zz0j","qxkwm2x0","0jm69e81","y8dwlloj","v816prlx","dx35pmej","1xy5dzn8","5j5w4ozj","pj0nn298","v8l04o28","kjpr4m08","pj07n4xw","qxkomr78","y8dm5m86","1xy55lm8","pj0n3298","qjo3y9nj","kj92p778","kj923078","zx7q5w08","qj2713o8","18v47558","kj97zdnx","kjpy464j","kj9mwrrx","o86w0yqx","7j4erplx","v8lwqn7x","18qg35ox","qjnweqwj","18vn6znj","e8e3vkpj","48gqp77j","98rw94dx","48gq47pj","kj9gk07x","qjozm638","kjprkw48","o862vk5x","qxklog68","1xydlpyx","1xydkynx","48g10dr8","zx7vdnqx","zxzgyvej","qj24or78","e8e32qdj","0jmn5o4x","98ro0768","68wprllx","y8ddv4g8","qjo0957j","zx70wv6j","zx7yvyx7","qxk4wq7j","zx7v3vrx","kjp1gn2j","98roqeg8","zx7rq6vj","0jm0q6y8","qjno40dx","kj9w17o8","7j4425lj","kj94oewx","e8epvy7x","xz9m9598","5j50qp6x","qjnodm1x","8qz7r3d8","j2yvw0n8","8wkylm38","j4rlprv8","jmo2zq48","jmo2d7n8","v8lv5gvj","0jmdqo4j","dx3k2d2j","o86vkgpj","y8d00plx","zx7deyyx","98rd4zwj","8geeo5pj","j4rrpom8","j5w7o4nj","j5wwggqj","8e994k6j","1xyp33zx","jo342n7j","j5wwrpwj","7j41lmlj","jprrw108","8144py58","86vnngwj","kj9zyvo8","8gerryyj","8qzrp708","8dw3po9j","1xyl7zjr","8146vkp8","8gerzzrj","j2yw7wp8","xko4ld98","8gerpgrj","x7q2pyy8","kj9ywdrx","8qz3p4o8","8l04wkl8","8e96gk2j","v8l27qrx","zx7d270x","v8l6dlv8","8l030zv8","x7q2ekr8","86v3qg5j","x7qwnlq8","1xydq6vx","xz905v98","x7q6go68","7j49qql8","j4r09pw8","j92p4vr8","8e9wqn6j","j92k2ev8","jo3kn5nj","kj957d78","8e9eol6j","8wk334v8","qjnepr1j","pj0y6n3x","j2yql3l8","8qz5elw8","8wk7y2z8","v81z3n3j","5j5d3q68","v8lrgl8m","jo34d0ej","8dwenmlj","x7qz5468","j2ypron8","j4rpnod8","18qqy108","x7qz5068","j5wpyp6j","jo3kqw3j","qxknn77x","98r9erq8","zx70eqqj","j4rp3l58","j2ypm2l8","j5wpy6nj","jmo69on8","7j4opzw8","8rp6g93j","e8eq52d8","xkozmlm8","68wlov4j","j5wrv4qj","8e9zkm7j"]
const runnerIdToNames = {"zxzl7vn8":"1lomi","o86d215j":"MaxFrei4","qjo972ej":"Vlorder","7j4n9qmx":"Gabri3","o860yzp8":"Teresu","zxzkonnx":"CaptainDoofus","y8d7dym8":"Voltack123","68w1y0lx":"Max_Overpower","kj92v478":"BandsWithLegends","zx71ny6x":"xxxholic2020","kj9rmdrj":"Hellacious","98r41qj1":"Knjazvetal","7j4q5ydx":"Kimseru","68w1p93x":"Emius","7j4mp0lj":"Ningishu","v8l1r7jm":"ProfanedGlitch","qxkd67mj":"PhasingDice","48gm6dp8":"PepsiMAX","48g942xp":"agyroth","zxz1159j":"MDMeaux","48g50o2j":"Hu3y524","zxz430jq":"RinRabbit","7j40ged8":"DlinkS","18v2e15j":"Stophen","o861e4qj":"catlop","o863wnp8":"ZeroOne","18v5k2vj":"anglakey","e8e9d3dj":"PokemonAce101","5j591wxv":"UnPro","dx3w00kj":"Raven123321","kjpdke2j":"LukasTheKIller2","7j42w6dx":"DaHoboKing","y8dm3398":"Denyan","68wdllqx":"Red.ffs","zx7253y8":"TixTak","e8eeqo80":"Blaust","qxkw32x0":"ShawKill","98r7lndj":"Ornery Ike","1xyrz4vj":"ScottySR","7j4mk0dj":"Musk_ox76","e8eekkp8":"Domos","kjpde74j":"thevukovic","qxkp5e6j":"Llurik","1xyenvy8":"d8texe","v81m7r58":"Tobafett","zx7rz1qj":"SMence","7j46ykm8":"Kader87","0jm774nj":"St4ckeD","48g35lrx":"IOwnPotatoes","98r0z381":"DrYoshiyahu","e8ee40p8":"LevelWorld","y8dvrv58":"Brogan_","18vrgznx":"Aqua_Zw","pj0wyl38":"TrooperJt","o86z710x":"Shreke","zx7e1687":"Jack","dx3z1n7j":"wav","v8lrg5l8":"Mack2in","68w3olqj":"naknuL","68wer738":"RellikZruns","y8dp6nm8":"Dacktem","5j51pdg8":"rythin","y8dwmolj":"Yamayamauchiman","y8d3epox":"z0rr013","dx3mek28":"DevaVentus","qxkld980":"AirGuitarist","qj26p67x":"StunterLetsPlay","68w7oz4x":"Stuoid","68wlrkqj":"swiftzircon","18qr6e0j":"Codiferus","kj9yk4nx":"chocolatecake5000","y8d4yvg8":"Swanklion","18q1reox":"Justnotgood","kj9mpwox":"SpicyBubels","dx3yy78l":"TheVideoGameBadger","0jmpz04j":"TheGreatZiggyny","o86l4oq8":"Daiko__","68wpovxg":"Straevaras","zxzq9yrx":"Tubsen5","qjnzl52j":"jronaggaz","5j5v7lw8":"Lyren","zxz9r48q":"Ashyurii","18q9zz0j":"Bandi","y8dg2986":"MrMopi5000","qxkwm2x0":"Master_Yoda","qjope30x":"spottrigger","0jm69e81":"FearfulFerret","kjp4eoyj":"xFury","y8dwlloj":"NinjaNas","v816prlx":"JuanPunchMan","v8l4qnrj":"mirusu400","dx35pmej":"jani69","48gr47rx":"OnlyMidknight","dx3qnp6j":"Zwexqukav","1xy5wen8":"halichoerus","1xy5dzn8":"QuackLord","pj0v2owx":"ginga","dx3p3278":"Sefakirik46xc","zxz7q70j":"Igon","pj0n6qw8":"DolphinDasher","v8l00l78":"Wolfalous","5j5w4ozj":"DemonicGamer123","qj26p3nx":"Notag","48g2m02j":"Newsplash","pj0nn298":"TheAlchemistGamer","1xyk0ez8":"BlackBelt","5j5pozz8":"DizzySkin","v8l61448":"Lauk","v8l04o28":"The_Beninator","98r1qv6j":"Omfgitsg00","kjpr4m08":"Sweetsu","e8eo2d6j":"Sparksysam","qjn6lmwx":"PavleSux","y8de11lj":"Xanderius","18vredvx":"Dr.Sandwich","y8de1zgj":"PsiOnyx_","48go7vrx":"Refusek","pj07n4xw":"pedguin","18vrv62x":"Pikuss","7j4p3dwj":"BenSammell","e8e6nyoj":"Cirno-baka9","qxkzym2x":"PapaJuan","e8enoq78":"Imadolphin","pj01qe9x":"cf","kjpov9y8":"DragonHeart000","98r6mnw8":"yumatei","48gz2dpj":"MagicBaker","7j4we3vx":"cheekyKup","1xyr5vzj":"ethanmallard1","48g9r97x":"SmashR_TheRedMage","qjn5og4j":"KagamiiX","18vy1ev8":"Darklightsds","o86evwpx":"evan052006","48gynv18":"Yumemi","v81vpgp8":"TVGBadger","0jmrgzo8":"Eresor","qxkomr78":"LukeSpense","qxk23n7x":"Hdiszle","e8e6y67j":"2Troublesome","7j4oo758":"Flame970","zxzzpp0x":"Fawnzee","18vmy0v8":"GearUp","zx7zw3q8":"ModestTomato","e8e7pdpx":"Andrew_Mac","qxkq4mkx":"Nuex","1xyvrgmx":"darkislight","kjpok628":"Javascript","kj9d6e7x":"WeEatPears","18vp0258":"Japanese_Joke","18qq5678":"FeneOne","1xyr75vj":"DrRobotnikLand","e8el6y2j":"Silexacies","48g9k71x":"Bodie","kj9d4rvx":"Yodapowers_","kj9dl4wx":"Jazox","98rqy0qx":"CreamyCannon","1xyvprmx":"Cube_","zxzvpz0j":"UsefulGarbage","0jmqvmex":"Claypool","qjnqv0dj":"TopHatApple","0jmqvwox":"NecroNatwhal","68w3wmvj":"TMHThomas","qxk1dz9j":"PhaxeCoach","kj9d9dox":"UnboundShark","qjnqdywj":"Lokipere","v8lke64x":"marcooos","7j4dm5lj":"Zawza","y8d5m5lj":"Phantasm_CodeXSG","e8enr778":"CrabBar","7j4dzn5j":"assasin900","0jmqynzx":"Saya","5j5w7wjv":"Rexaaayyy","98rp5e6j":"Paracusia","y8d51q5j":"Cruxiable","qjoq5ve8":"SevenChords","kjpqwo2x":"BobBobbingson","68w6z23j":"SwiftDynamics","68w6o3vj":"Balduron04","kj9dnkrx":"ToastNomNomNom","dx359eej":"Taz","qj2ol5px":"mrlink2k","zxzy6drj":"SioN","zx702m0j":"ggcookies","qjn50gqj":"LadyChristie","18vnr72j":"Galaxygamer109","e8ez4d68":"Yoshikiller109","0jm4m6ej":"Knoll24","48gn04pj":"Yuidesu","pj0konm8":"Tappoutmc34ftw","e8eyg32x":"GoriVerde","o86me2wj":"Shichimiya","18qkezo8":"Cloch73","18qz0pd8":"xXWalkingDeathXx","48gnko2j":"Nacho82","dx37rze8":"Byrd","7j4ge05j":"BlobDylan","zx75d4r8":"Servant","zxzpegnj":"Kainy","68wzdyv8":"Ralekk","0jmvewoj":"dave5005","48g1n028":"Calum79","pj049k4x":"CrazyK","qjovl9nx":"LilQuaz","v81500lj":"Lenford_Leonard","v8150g5j":"Flarefin","kjpn745x":"RageMan","e8e9302j":"connor_0212","y8dm5m86":"JuanPablo","1xy55lm8":"GameTurtleX","pj0n3298":"Dingus","qjo3y9nj":"skye4life","kj92p778":"PreferredSelection","kj923078":"Aapee","zx7q5w08":"Dusky","qj2713o8":"AndrewHatesIan","18v47558":"Brzyrt","kj97zdnx":"Smichman123","kjpy464j":"launch2k","kj9mwrrx":"Descendrio","o86w0yqx":"Trend","7j4erplx":"FeaR","v8lwqn7x":"truecrowbarpowah","18qg35ox":"InstaFiz","qjnweqwj":"Axwood","18vn6znj":"Voktor","e8e3vkpj":"MadMax_0407","48gqp77j":"Jibval","98rw94dx":"Just_Disco","48gq47pj":"BR4ECJlAB","kj9gk07x":"NONYRAU","qjozm638":"Nivlak","kjprkw48":"RyuQuezacotl","o862vk5x":"SkyzSoars","qxklog68":"Centinull","1xydlpyx":"-XzBrawl_NinjazX-","1xydkynx":"hotfieryramen","48g10dr8":"Rockstomb","zx7vdnqx":"narzick","zxzgyvej":"Depriesticles","qj24or78":"SWATDuck","e8e32qdj":"EthanJayAce","0jmn5o4x":"jusrus13","98ro0768":"skyper24","68wprllx":"Curt0815","y8ddv4g8":"Tibberstheking","qjo0957j":"DurranSD","zx70wv6j":"Ryreaka","zx7yvyx7":"edzan","qxk4wq7j":"emcrockstar","zx7v3vrx":"Crzyclocker","kjp1gn2j":"Yorbos","98roqeg8":"rich_chanel","zx7rq6vj":"S-TWO","0jm0q6y8":"Baliame","qjno40dx":"Kelpat","kj9w17o8":"hellfireofdoom","7j4425lj":"SgtChuckles","kj94oewx":"Xinn","e8epvy7x":"AAAAAAA","xz9m9598":"chewty","5j50qp6x":"Tobyyx3","qjnodm1x":"Asdd487","8qz7r3d8":"NinjaBurrito","j2yvw0n8":"TylrodtheTerrariaGod","8wkylm38":"The_1ndiegamer","j4rlprv8":"Ranga","jmo2zq48":"camel","jmo2d7n8":"lukeguere","v8lv5gvj":"Mazzie","0jmdqo4j":"darlade","dx3k2d2j":"Jaarl","o86vkgpj":"Faustas","y8d00plx":"plankboii","zx7deyyx":"Javantea","98rd4zwj":"Mikashigi","8geeo5pj":"Pentaplay","j4rrpom8":"PancakeMaster28","j5w7o4nj":"Cookie_Eater","j5wwggqj":"Ariesz83","8e994k6j":"zngooo","1xyp33zx":"josh.uwu","jo342n7j":"A_Person_13","j5wwrpwj":"Snoo24","7j41lmlj":"xXxRevolutiøn","jprrw108":"StrilX","8144py58":"BreadLoaf","86vnngwj":"nicroveda123456762","kj9zyvo8":"wadeisbadatgames","8gerryyj":"AestheticGravity","8qzrp708":"Crazy_Blake","8dw3po9j":"ChunkyChomp","1xyl7zjr":"TheTrooble","8146vkp8":"NoahMD","8gerzzrj":"XCC48","j2yw7wp8":"copy_cat","xko4ld98":"TheTiredFox","8gerpgrj":"Synidix","x7q2pyy8":"quack009","kj9ywdrx":"bloxar","8qz3p4o8":"Suranis90","8l04wkl8":"El_powel","8e96gk2j":"InTime99","v8l27qrx":"reBTF","zx7d270x":"ProverbialPenguin","v8l6dlv8":"Numberplay","8l030zv8":"Manzia","x7q2ekr8":"Apelta","86v3qg5j":"Kruyoto","x7qwnlq8":"MrNyoom","1xydq6vx":"KingZabra","xz905v98":"NathanMucher","x7q6go68":"itsyaboyjoshie","7j49qql8":"Foxygen","j4r09pw8":"ILikeToColor","j92p4vr8":"Hippy1","8e9wqn6j":"szydlovsky","j92k2ev8":"Ningi","jo3kn5nj":"kaeru_no_kane","kj957d78":"Inevitable","8e9eol6j":"XFC-Astoria","8wk334v8":"IamAbus","qjnepr1j":"FearTheVillain3","pj0y6n3x":"Beffort","j2yql3l8":"OfficialAdz101","8qz5elw8":"mewsubi","8wk7y2z8":"WaveySK","v81z3n3j":"megamanreborn","5j5d3q68":"Barber","v8lrgl8m":"Ben","jo34d0ej":"Sness","8dwenmlj":"terrariaisdead","x7qz5468":"poggeroni","j2ypron8":"TheTerrariaTrio","j4rpnod8":"Waifuwu0","18qqy108":"KrakenTheJaken","x7qz5068":"EthanPhelps","j5wpyp6j":"Zigrey","jo3kqw3j":"InceptionSpeedruns","qxknn77x":"smythe","98r9erq8":"CTHero","zx70eqqj":"Perodi","j4rp3l58":"Link5963","j2ypm2l8":"BlueSamurai","j5wpy6nj":"xSolarz","jmo69on8":"Matsyir","7j4opzw8":"EchoStorm","8rp6g93j":"TBPengy","e8eq52d8":"Sonicraft118","xkozmlm8":"mell_jelly","68wlov4j":"ghostryder","j5wrv4qj":"Pianoboycaleb","8e9zkm7j":"Terminus_xX","8geeqdpj":"Null"}
export {categoryIDLookUp, runnerIdToNames, runnerIds, variableIDLookUp};
