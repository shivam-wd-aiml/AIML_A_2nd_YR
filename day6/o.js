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