
const app = require('./src/app')
const connectDB = require('./src/db/db')

async function startServer() {
    await connectDB()
    app.listen(3001, () => {
        console.log('Server is running on port 3001')
    })
}

startServer()