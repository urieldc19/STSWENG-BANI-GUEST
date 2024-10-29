const express = require("express");

const router = express.Router();
const {createReservation} = require('../controllers/reservation.js')
const {sendConfirmationEmail} = require('../controllers/reservation.js')

router.post("/", createReservation)
router.post('/sendConfirmationEmail', sendConfirmationEmail)
router.post("/createReservation", createReservation)

module.exports = router