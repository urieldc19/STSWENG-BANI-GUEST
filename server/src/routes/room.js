const express = require("express");

const router = express.Router();
const {getBookedRooms} = require('../controllers/room.js')

router.get("/booked", getBookedRooms)

module.exports = router