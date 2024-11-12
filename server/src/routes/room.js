const express = require("express");

const router = express.Router();
const {getAvailableRooms} = require('../controllers/room.js')

router.get("/getavailable", getAvailableRooms)

module.exports = router