const File=require('fs');
File.writeFile("std.txt",'Name:Utkarsh',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Done')
    }
})
File.appendFile("std.txt","Chut ka chudakad",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('doneee')
    }
})
File.readFile('std.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})