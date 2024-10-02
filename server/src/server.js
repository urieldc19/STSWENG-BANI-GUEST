const express = require("express");
const connectDB = require("./config/database.js")

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello')
})

module.exports = {app, PORT}

