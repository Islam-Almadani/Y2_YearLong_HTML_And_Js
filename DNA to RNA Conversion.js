function DNAtoRNA(dna){
    var OutPut = ""
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] == 'T') {
            OutPut+= 'U'
        }else{
            OutPut+=dna[i]
        }
    }
    console.log(OutPut)

}
DNAtoRNA("U")
function DNAtoRNA(dna) {
    var hold = ''
    for(var i =0;i<dna.length;i++) {
       if(dna[i]=="T") {
          hold+="U"
  }
  else{hold+=dna[i]}
  }
  return hold;
        
  }