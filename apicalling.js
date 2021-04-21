const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    // res.end("<h1> Pu mister gadhe ki sister </h1>");
    if(req.url == '/about'){
        res.end('Pu is gadha');
    }else if(req.url == '/userapi'){
        // res.end("<h1> Welcome par phail kum </h1>");
        fs.readFile(`${__dirname}/userAPI.json`,"utf-8",(err, data)=>{
            res.end(data);
        })
    }else{
        res.end("<h1> Pu mister gadhe ki sister </h1>");
    }
})

server.listen(8000,'127.0.0.1',()=>{
        console.log("listening to port 8000");
})
