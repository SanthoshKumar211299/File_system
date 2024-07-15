import express from 'express'
import fs from 'fs'
import { format } from 'date-fns';
import path from 'path';

const PORT=8002;
let app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    let today=format(new Date(),'dd-MM-yyyy-HH-mm-ss')
    const filePath = `File_system/${today}.txt`;
    fs.writeFileSync(filePath,`${today}`,'utf8')
    let data=fs.readFileSync(filePath,'utf8')
    try {
        res.status(200).send(data)
        
    } catch (error) {
        req.res(500).send('Internel server error')
        
    }
})
//New endpoint to retrieve all text files in a folder
app.get("/getTextFiles", (req, res) => {
    const folderPath = "File_system";
  
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send("An error occured while listing the files from directory");
      } else {
        const textFiles = files.filter((file) => path.extname(file) === ".txt");
        res.status(200).json(textFiles);
      }
    });
  });
