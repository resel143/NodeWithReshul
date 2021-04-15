// challenge related to CURD 

const fs = require("fs");

// making folder 
fs.mkdirSync("Reshul");
fs.writeFileSync("Bio.txt","Abhi hum shuru karte ahi ");
// adding more data 
fs.appendFileSync("Bio.txt","Chaliye Shuru karte hain");
// reading the data 
const not_buf_data = fs.readFileSync("Bio.txt").toString();
// renaming Bio.txt
fs.renameSync("Bio.txt","Selena.txt");
deleting the file 
fs.unlink("Reshul/Selena.txt");
fs.rmdirSync("Reshul")
