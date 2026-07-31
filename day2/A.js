console.log("========VAR========");
let text="ESITESI";
console.log(text);

console.log("\N=====IF ELSE=======");
let a=30;
let b=40;
if(a>b){
    console.log("A is greater");
}
else{
    console.log("B is greater");
}

console.log("\n=====Function=====");
function abes(){
    console.log("Welcome");
    console.log("Ajjo MC");
}
abes();


console.log("\n======Func Parameter=====")
function greet(name,lname){
    console.log("Hello",name,lname);
}
greet("Lullu","Khota");

console.log("\n========Func Return")
function add(x,y){
    return x+y;
}
console.log(add(9,1));

console.log("\n=====Default Args=====");
function fn(f="Mallu",n="Bullu"){
    return f+" "+n;
}
console.log(fn());

console.log("\n=====Percent========")
function tot(a,b,c){
    return a+b+c;
}
function per(x){
    return (x/300)*100;
}
let toa= tot(80,70,90);
console.log("Total",toa);
console.log("Percent",per(toa));
