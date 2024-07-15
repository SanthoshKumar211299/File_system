
import express from "express";
import * as dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", function (request, response) {
    response.send("Node server is up & running for Node Day1 Task - NodeJS File System!!!");
});

//Creating date and time
const time_stamp = new Date().toString();
const date_time = new Date();
const date = ("0" + date_time.getDate()).slice(-2);
const month = ("0" + (date_time.getMonth() + 1)).slice(-2);
const year = date_time.getFullYear();
const hours = date_time.getHours();
const minutes = date_time.getMinutes();
const seconds = date_time.getSeconds();
const currentDateTime = date + "_" + month + "_" + year + "-" + hours + "_" + minutes + "_" + seconds;

// adding new text file to a folder with content current timestamp;
app.post("/file", function (request, response) {
    fs.writeFile(`./textFile/${currentDateTime}.txt`, time_stamp, (err) => {
        console.log("file created!!!");
        response.send("file created!!!");
    });
});

// retrieving the added text files list from folder
app.get("/file", function (request, response) {
    fs.readdir("./textFile/", (err, file) => {
        if (err) {
            console.log("files not found" + err);
            response.send("files not found" + err);
        }
        console.log("Available files:" + file);
        response.send(file);
    });
})

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
