const A = require('http');
const server= A.createServer((req,res)=>{
    res.writeHead(200,{'contentType':'text/html'});
    res.end('C:\Users\hp\Desktop\wd3\regisvalid.html');
})
server.listen(3000,()=>{
    console.log('Port 3000')
});