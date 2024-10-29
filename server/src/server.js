const express = require("express");
const bodyParser = require("body-parser");

const app = express()
const PORT = 3000
const cors = require('cors');
const dotenv = require ('dotenv')

dotenv.config()

app.use(express.static("public"));
app.use(express.json())
app.use(bodyParser.json());

const reservation = require("./routes/reservation.js")
const room = require("./routes/room.js")

app.use(cors())

app.use("/api", reservation)
app.use("/room", room)

module.exports = {app, PORT}
