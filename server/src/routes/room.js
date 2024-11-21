const express = require("express");

const router = express.Router();
const {getAvailableRooms, getRoomImages} = require('../controllers/room.js')

router.get("/available", getAvailableRooms)
router.get("/getRoomImages/:roomId", getRoomImages)

module.exports = router