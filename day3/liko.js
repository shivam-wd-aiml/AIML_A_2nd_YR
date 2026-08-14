function checkNumber(num){
    return (num%2==0?"EVEN":"ODD");
}
function detail(name,id,branch,dep){
    console.log("My name is",name," Id-",id,"work in",branch,"branch","in ",dep,"departement");
}
function percent(maths,english,science){
    return ((maths+science+english)/300)*100;
}
console.log(checkNumber(23));
detail("Kaalu",234,"CS","AIML");
console.log(percent(80,75,90));