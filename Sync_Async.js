
const fs = require("fs");
// fs.writeFile("chalhatt.txt","Chalja bsdk", (e)=>{
//     console.log(e);
// });

// const data = fs.readFileSync("chalo.txt","utf-8");
// console.log(data);
// console.log("kya he re ram");

// by unsynchronous way 
const data_2 = fs.readFileSync("chalo.txt","utf-8",(err, data) =>{
        console.log(data);
});
console.log(data_2);
console.log("kya hai bhai");
