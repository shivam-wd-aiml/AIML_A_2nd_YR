const express= require('express');
const app= express();
app.use(express.json());
let student=[
    {id:1,'name':"Lola"},
    {id:2,'name':"Loli"},
];
app.get('/student/',(req,res)=>{
    res.json(student);
});
app.post('/student/',(req,res)=>{
    const stud= req.body;
    student.push(stud);
    res.send("Done added");
});
app.put('/student/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const stud= student.find(s=>s.id===s);
    if(stud){
        stud.name= req.body.name;
        res.send("Updated");
    }
    else{
        res.send("Not found");
    }
});
app.delete('/student/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const stud= student.find(s=>s.id!=s);
    res.send("deleted");
});

app.listen(3003,()=>{
    console.log("Running");
});