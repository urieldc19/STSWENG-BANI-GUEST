const { app, PORT } = require('./src/server')
const { connectDB } = require('./src/config/database')

app.listen(PORT, () => {
    connectDB
    console.log(`Server is currently running on port ${PORT}`)
});