const a={
    name:"ravi",
    marks:80,
    grade:"A",
    updatemark:function(n){
        this.marks=n;
    }
};
function updatemarks(n){
    this.marks=n;
}
a.updatemark(70);
console.log(a.marks);
function add(...numb){
    console.log(numb);
}
add(12,32,54,23,5,3,5,2,9);
function namto(name,...num){
    let sum=num.reduce((sum,num)=>sum+num,0);
    console.log("Hello "+name);
    console.log(sum);
}
namto('ko',23,45,89,23,7,1,90);

const sumAll = (...numbers) => {
  return numbers.reduce((total, current) => total + current, 0);
};
const userInput = "23,45,78,9,1,67,54";
const stringArray = userInput.split(",");
const numberArray = stringArray.map(num => Number(num.trim()));
const result = sumAll(...numberArray);
console.log(result);