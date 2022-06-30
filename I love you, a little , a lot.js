function howMuchILoveYou(nbPetals) {
    var list =["I love you","a little","a lot","passionately","madly","not at all"]
    var x =  nbPetals % 6 
    if (nbPetals % 6 == 0) {
        return(list[5])
    }else{
        return(list[x-1])
    }
}
console.log(howMuchILoveYou(6));
