// npm init -y command is used to initate the node js application

// npm i express install express.js 

//server.js this file is responsible for the creating and programing of the server 

// Express.js is a minimal, fast, and flexible web application framework for 
// Node.js used to build server-side applications, APIs, and web services
const express = require('express')

//Create the instance of  server and saving into the app constant 
const app = express()
app.use(express.json())


const notes = []

app.post('/notes', (req, res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.send("Connect Sucessfully")
    res.status(201).json({
        message:"note created sucessfully"
    })
})

module.exports = app