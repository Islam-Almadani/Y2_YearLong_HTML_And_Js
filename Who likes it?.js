function likes(names = []) {
    if (names.lenght = 0){
        return(`no one like it`)}
    else if (names.lenght = 1){
      return(`${names[0]} like it`)
    }else if(names.lenght = 2 ) {
        return (`${names[0]} and ${names[1]} like it`)
    } else{
        let x = names.lenght -2 ;
        return (`${names[0]} and ${names[1]} and ${x} othes like it`)
    }
  };

console.log( likes([]));
