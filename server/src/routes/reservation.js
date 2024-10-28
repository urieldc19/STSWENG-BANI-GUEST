const express = require("express");
const router = express.Router();
const {createReservation} = require('../controllers/reservation.js')

router.post("/createReservation", createReservation)

module.exports = router