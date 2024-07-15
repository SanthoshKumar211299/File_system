import express from "express";
import * as fs from "fs";
import { type } from "os";

const app = express();

const d = new Date();
const time = d.toLocaleTimeString();
const realTime = time.slice(0,5).split(':').join('_');
console.log(realTime);

const date = d.toLocaleDateString();
const realDate = date.split('/').join('_');


const fileTitle = realDate  + '-' + realTime + 'pm';
const newFileTitle = fileTitle.split(' ').join('');
console.log(newFileTitle);


// first question solution

fs.writeFile(`./File_system/${newFileTitle}.txt`, time, (err) => {
    if(err) console.log(err);
    console.log("File created.");
});

// second question answer

fs.readdir('./File_system', (err, files) => {
    if(err) console.log(err);
    files.forEach((file) => {
        console.log(file);
    })
})