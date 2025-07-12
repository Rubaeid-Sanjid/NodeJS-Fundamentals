const fs = require("fs");
const path = require("path");

const inputText = process.argv.slice(2);
const text = inputText.join(" ");

if(!text){
    console.log("Please Provide a message after typing index.js");
    process.exit();
}

const filePath = path.join(__dirname, "log.txt");

fs.appendFile(filePath, text, {encoding: "utf-8"}, ()=>{
    console.log("Data inserted successfully.");
})
