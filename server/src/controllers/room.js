const { Room, Reservation } = require('../models/models.js');

const PLACEHOLDER_IMAGES = [
    "./images/placeholder1.png",
    "./images/placeholder2.jpg",
    "./images/placeholder3.jpg",
]

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
            images = PLACEHOLDER_IMAGES
            console.log(`Retrieved placeholder for id ${reqRoomId}`)
        }  else {
            images = data["images"].split(",")
            console.log(`Retrieved images for id ${reqRoomId}`)
        }

        res.json(images);
    } catch(e) {
        res.status(500).json({message: "Failed to get image"})
        console.log(`Failed to get image`)
        console.log(e)
    }
}

const getAllRoomImages = async (req, res) => {
    try {
        // get from mongodb !
        let images = await Room.find({}).select(["roomId", "images"])
        let imageJson = {};
        for (i of images) {
            if (i.images != undefined || i.images == "") {
                imageJson[i.roomId] = i.images.split(",");
            } else {
                imageJson[i.roomId] = PLACEHOLDER_IMAGES;
            }
        }
        console.log("Retrieved all room images");

        res.json(imageJson);
    } catch(e) {
        res.status(500).json({message: "Failed to get images"})
        console.log(`Failed to get images`)
        console.log(e)
    }
}

module.exports = {getAvailableRooms, getRoomImages, getAllRoomImages}