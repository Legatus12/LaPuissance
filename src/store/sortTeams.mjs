import json from '../local/teams.json';

const array = Object.values(json);

/*
function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

objs.sort( compare );
*/

export default array.sort((a,b) => (a.points < b.points) ? 1 : ((a.points > b.points) ? -1 : 0));