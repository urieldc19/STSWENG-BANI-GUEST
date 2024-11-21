const { Room, Reservation } = require('../models/models.js');

const getAvailableRooms = async (req, res) => {

    try {

        const reservedRooms = await Reservation.find().select('roomId');
        const reservedRoomIds = reservedRooms.map(reservation => reservation.roomId);
        
        const availableRooms = await Room.find({ roomId: { $nin: reservedRoomIds } });
        const availableRoomIds = availableRooms.map(reservation => reservation.roomId);
        
        return availableRoomIds;

    } catch (error) {
        res.status(500).json({message: "Failed to get avaiable rooms"})
    }
}

const getRoomImages = async (req, res) => {
    console.log("hello 0");
    try {
        console.log("hello world");
        return "return";

        let roomId = req.body;
        // let images = await Room.find({roomId: }) 

        return images
    } catch {
        res.status(500).json({message: "Failed to get image"})
    }
}

module.exports = {getAvailableRooms, getRoomImages}