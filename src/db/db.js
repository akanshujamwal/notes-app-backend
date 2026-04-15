require('dotenv').config()
const mongoose = require("mongoose")


const {MONGO_URL} = process.env

async function connectDB(){
    await mongoose.connect(MONGO_URL)
    console.log("Connected to DB")
}

module.exports = connectDB