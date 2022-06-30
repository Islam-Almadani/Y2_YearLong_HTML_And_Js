function count(){
    const QA = [
        Qus1 = {
            Question : 1+1,
            Answer : 2},
        Qus2 = {
            Question : 5*6,
            Answer : 30},
        Qus3 = {
            Question : 30/6,
            Answer : 5}];
    let countnum = 0;

    var As1 = document.getElementById("Q1").value;
    var As2 = document.getElementById("Q2").value;
    var As3 = document.getElementById("Q3").value;

    let answers = [As1,As2,As3];
    for (let i = 0 ; i < answers.length ; i++){
        if(answers[i] == QA[i].Answer){
            countnum += 1}else{}
    }
    

            

    alert(`your score is ${countnum}`)
}
