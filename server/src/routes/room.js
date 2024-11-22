const express = require("express");

const router = express.Router();
const {getAvailableRooms, getRoomImages, getAllRoomImages} = require('../controllers/room.js')

router.get("/getavailable", getAvailableRooms)
router.get("/getRoomImages/:roomId", getRoomImages)
router.get("/getAllRoomImages", getAllRoomImages)

module.exports = router