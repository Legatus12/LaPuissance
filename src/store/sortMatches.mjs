function sortMatches(a, b) {
    if ( Number(a[4]) > Number(b[4]) ){
      return 1;
    }
    if ( Number(a[4]) < Number(b[4]) ){
      return -1;
    }
    else{
      return 0;
    }
  }
  
  export default sortMatches;