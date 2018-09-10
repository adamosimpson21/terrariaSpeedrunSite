export function calculateRunnerFame(PBs){
  let fameData = {};
  fameData.fame = 0;
  fameData.place = {"1":0, "2":0, "3":0, "other": 0};
  function checkVersion(run){
    return (run.run.game==="kdk4e21m")
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
    fameData.fame += addedFame;
  }

  PBs.data.filter(checkVersion).forEach(calculateFamePerRun);
  return fameData;
}