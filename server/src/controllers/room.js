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
    try {
        let reqRoomId = req.params.roomId;

        // get from mongodb !
        let data = await Room.findOne({roomId: reqRoomId})
        let images = ""

        // check if undefined
        if (data["images"] == undefined || data["images"] == "") {
            images = ["./images/hotel/hotel_slide3.png"]
            console.log(`Retrieved image with id ${reqRoomId}`)
        }  else {
            images = data["images"].split(",")
            console.log(`Retrieved placeholder for id ${reqRoomId}`)
        }

        res.json(images);
    } catch(e) {
        res.status(500).json({message: "Failed to get image"})
        console.log(`Failed to get image`)
        console.log(e)
    }
}

module.exports = {getAvailableRooms, getRoomImages}