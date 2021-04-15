// starting again 

const fs = require("fs");

// making new file 
fs.writeFileSync("padhlo.txt","Kyu bhaiya shuru kar diye");

// rewriting the element s 
fs.appendFileSync("padhlo.txt","\n Hum to hai Coder");

// renaming the file 
fs.renameSync("padhlo.txt","coding.txt");
