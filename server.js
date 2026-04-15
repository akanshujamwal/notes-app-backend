
const app = require('./src/app')
const connectDB = require('./src/db/db')


connectDB()

// this is for listening the server 
app.listen(3001, ()=>{
    console.log('Server is running of port 3001')
}) // here is 3000 that is the port no 