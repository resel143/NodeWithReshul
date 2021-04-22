// creatin the server and learing Streaming 

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req, res)=>{
    
    // fs.readFile('input.txt',(err, data)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     res.end(data.toString());
    // })

    // create a redable stream 
    const rstream = fs.createReadStream('input.txt');
    rstream.on('data',(chunkdata)=>{
            res.write(chunkdata);
    })
    rstream.on('end',()=>{
        res.end();
    })
//     Another way to do stream is by using 
    rstream.pipe(res);
})

server.listen(8000, '127.0.0.1');
