function sortTeams(a, b) {
  if ( Number(a[6]) > Number(b[6]) ){
    return -1;
  }
  if ( Number(a[6]) < Number(b[6]) ){
    return 1;
  }
  else{
    if ( Number(a[11]) - Number(a[12]) > Number(b[11]) - Number(b[12]) ){
      return -1;
    }
    if ( Number(a[11]) - Number(a[12]) < Number(b[11]) - Number(b[12]) ){
      return 1;
    }
    else
      return 0;
  }
}

export default sortTeams;