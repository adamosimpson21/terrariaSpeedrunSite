export function calculateRunnerFame(PBs){
  let fameData = {};
  fameData.fame = 0;
  fameData.place = {"1":0, "2":0, "3":0, "other": 0};
  function checkGame(run){
    return (run.run.game==="kdk4e21m")
  }
  function checkVersion(run){
    return (run.run.values['e8morel6']!=='klrx980l')
  }
  function calculateFamePerRun(run){
    let addedFame = 0;
    switch (run.place) {
      case 1:
        addedFame += 10;
        ++fameData.place["1"];
        break;
      case 2:
        addedFame += 5;
        ++fameData.place["2"];
        break;
      case 3:
        addedFame += 3;
        ++fameData.place["3"];
        break;
      default:
        addedFame += 1;
        ++fameData.place["other"];
        break;
    }
    //full game categories get +5 points, hard mode categories get +2
    switch (run.run.category){
      case 'zd3yzvn2':
      case 'rklgo5wd':
      case 'n2y1lve2':
      case '7kjr0gg2':
        addedFame += 5;
        break;
      default:
        break;
    }
    switch(run.run.level){
      case 'ywe4g04d':
      case '69zrj74d':
      case 'r9gz562d':
      case 'rdn2x4qd':
      case 'o9x2q67w':
      case '495jgp4w':
      case 'ldy8klkw':
      case 'rdq0rygw':
      case 'kwjyj01w':
      case 'owokn83d':
        addedFame += 2;
        break;
      default:
        break;
    }
    //Expert runs are multiplied by 1.5x, master mode by 2x
    if(run.run.values["wleq7kl6"] && run.run.values["wleq7kl6"]==="0q5k6j2q"){
      addedFame += addedFame
    } else if(run.run.values["wleq7kl6"] && run.run.values["wleq7kl6"]==="rqvv0n5q"){
      addedFame += addedFame/2
    }
    fameData.fame += Math.floor(addedFame);
  }

  // for 1.3.5 only
  // PBs.data.filter(checkGame).filter(checkVersion).forEach(calculateFamePerRun);
  // no legacy patches
  PBs.data.filter(checkGame).filter(checkVersion).forEach(calculateFamePerRun);
  // all time
  // PBs.data.filter(checkGame).forEach(calculateFamePerRun);
  return fameData;
}
