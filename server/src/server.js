const express = require("express");
const bodyParser = require("body-parser");

const app = express()
const PORT = 3000

app.use(express.static("public"));
app.use(express.json())
app.use(bodyParser.json());

module.exports = {app, PORT}

const reservation = require("./routes/reservation.js")

app.use("/reservation", reservation)