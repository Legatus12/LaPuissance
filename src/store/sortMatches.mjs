function sortMatches(a, b) {
    if ( Number(a.Jornada) > Number(b.Jornada) ){
      return 1;
    }
    if ( Number(a.Jornada) < Number(b.Jornada) ){
      return -1;
    }
    else{
      return 0;
    }
  }
  
  export default sortMatches;