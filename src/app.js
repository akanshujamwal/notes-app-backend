// npm init -y command is used to initate the node js application

// npm i express install express.js 

//server.js this file is responsible for the creating and programing of the server 

// Express.js is a minimal, fast, and flexible web application framework for 
// Node.js used to build server-side applications, APIs, and web services
const express = require('express')
const nodeModel = require('./models/note.model')
const noteModel = require('./models/note.model')

//Create the instance of  server and saving into the app constant 
const app = express()


app.use(express.json())


const notes = []
// add note
app.post('/saveNotes', async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created sucessfully"
    })
})

// get notes list
app.get('/getNotes', async (req, res) => {

    const notes = await noteModel.find() // find always sends array  and findone it give me one object 
    res.status(200).json({
        message: "Notes feched sucessfully",
        notes: notes

    })
})

// delete note from the notes list 
app.delete('/deleteNote/:id', async (req, res) => {
    const id = req.params.id
    await nodeModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({

        message: "Note deleted sucessfully",

    })
})

// update note which is already present in the notes list
app.patch('/updateNote/:id', async(req, res) => {
    const id = req.params.id
   
    const title = req.body.title
    const description = req.body.description
    await nodeModel.findOneAndUpdate({
        _id:id
    },
    {
        title: title,
        description: description

    })

   


    res.status(200).json({

        message: "Note updated sucessfully",

    })
})

module.exports = app