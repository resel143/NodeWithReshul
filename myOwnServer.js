// finally making a server 

const http = require("http"); 

const server = http.createServer((req, res)=>{
    res.end("Request Received Reshul!");
});

server.listen(8000,"127.0.0.1",()=> console.log("listening to the port number 8000"));
