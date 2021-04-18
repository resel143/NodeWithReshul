const fs = require("fs");

fs.writeFile("bio.txt","chalaja",(er)=>{
    console.log(er);
});

// reading the file 
const data = fs.readFile("bio.txt","utf-8",(err, data)=>{
    console.log(data);
});

// adding more data 
fs.appendFile("bio.txt","kyu bhia jara dekh k chalo",(err)=>{
    console.log(err);
})

fs.rename("bio.txt","nayabio.txt",(err)=>{
    console.log(err);
})

fs.unlink("nayabio.txt",(err)=>{
    console.log(err);
});
