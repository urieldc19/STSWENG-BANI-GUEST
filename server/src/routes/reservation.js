const express = require("express");
const router = express.Router();
const createReservation = require('../controllers/reservation')

router.post("/", createReservation)

module.exports = router