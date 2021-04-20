// finally making a server 

const http = require("http"); 

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end("Request Received Reshul!");
    }else if(req.url == '/contact'){
        res.end("whom you want to talk!");
    }else if(req.url == '/about'){
        res.end("Tell me bout yourself first!!");
    }else{
        res.writeHead(404);
        res.end("<h1>Do you think I am god!!</h1>");
    }
    
});

server.listen(8000,"127.0.0.1",()=> console.log("listening to the port number 8000"));
