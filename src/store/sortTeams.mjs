import json from '../local/teams.json';

const array = Object.values(json);


function sortTeams(a, b) {
  if ( a.points > b.points ){
    return -1;
  }
  if ( a.points < b.points ){
    return 1;
  }
  else{
    if ( a.dif > b.dif ){
      return -1;
    }
    if ( a.dif < b.dif ){
      return 1;
    }
    else
      return 0;
  }
}

export default array.sort(sortTeams);