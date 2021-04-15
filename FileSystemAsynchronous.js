// Working in asynchronous version 

const fs = require("fs");

// fs.writeFile("chalo.txt","Hello par Chalo", (e)=>{
//     console.log("File Ban Gya");
//     console.log(e);
// })

// reading the data 
fs.readFile("chalo.txt",(e, data)=>{
    console.log(data.toString());
})
