function sortTeams(a, b) {
  if ( Number(a.Puntos) > Number(b.Puntos) ){
    return -1;
  }
  if ( Number(a.Puntos) < Number(b.Puntos) ){
    return 1;
  }
  else{
    if ( Number(a.Goles_favor) - Number(a.Goles_contra) > Number(b.Goles_favor) - Number(b.Goles_contra) ){
      return -1;
    }
    if ( Number(a.Goles_favor) - Number(a.Goles_contra) < Number(b.Goles_favor) - Number(b.Goles_contra) ){
      return 1;
    }
    else
      return 0;
  }
}

export default sortTeams;