function checkNumber(num){
    return (num%2==0?"EVEN":"ODD");
}
function detail(name,id,branch,dep){
    console.log("My name is",name," Id-",id,"work in",branch,"branch","in ",dep,"departement");
}
function percent(maths,english,science){
    return ((maths+science+english)/300)*100;
}
function sumarr(arr){
    let s=0;
    for(let i=0;i<arr.length();i++){
        s+=arr[i];
    }
    return s;
}
let arr=[10,20,30,40,50];
console.log(checkNumber(23));
detail("Kaalu",234,"CS","AIML");
console.log(percent(80,75,90));
console.log(sumarr(arr));
