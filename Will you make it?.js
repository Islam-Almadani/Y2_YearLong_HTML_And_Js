const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if ( fuelLeft * mpg >= distanceToPump){
      return true ;
    }else {
      return false ;
    }
  };

  function nthEven(n){
    return (n-1)*2;
  }

  console.log(nthEven(1298734))