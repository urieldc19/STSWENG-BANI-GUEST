const { Room, Reservation } = require('../models/models.js');

const PLACEHOLDER_IMAGES = [
    "./images/placeholder1.png",
    "./images/placeholder2.jpg",
    "./images/placeholder3.jpg",
]
const ROOM_PLACEHOLDER_IMAGES = {
    "Room 1": ["./public/images/family-bunk/fam-1.png", "./public/images/family-bunk/fam-2.png", "./public/images/family-bunk/fam-3.png", "./public/images/family-bunk/fam-4.png"],
    "Room 2": ["./public/images/family-bunk/fam-1.png", "./public/images/family-bunk/fam-2.png", "./public/images/family-bunk/fam-3.png", "./public/images/family-bunk/fam-4.png"],
    "Room 3": ["./public/images/family-bunk/fam-1.png", "./public/images/family-bunk/fam-2.png", "./public/images/family-bunk/fam-3.png", "./public/images/family-bunk/fam-4.png"],
    "Room 4": ["./public/images/lovers-hideaway/lovers-1.png", "./public/images/lovers-hideaway/lovers-2.png", "./public/images/lovers-hideaway/lovers-3.png", "./public/images/lovers-hideaway/lovers-4.png"],
    "Room 5": ["./public/images/lovers-hideaway/lovers-1.png", "./public/images/lovers-hideaway/lovers-2.png", "./public/images/lovers-hideaway/lovers-3.png", "./public/images/lovers-hideaway/lovers-4.png"],
    "Room 6": ["./public/images/lovers-hideaway/lovers-1.png", "./public/images/lovers-hideaway/lovers-2.png", "./public/images/lovers-hideaway/lovers-3.png", "./public/images/lovers-hideaway/lovers-4.png"],
    "Room 7": ["./public/images/scenic-balcony/scenic-1.png", "./public/images/scenic-balcony/scenic-2.png", "./public/images/scenic-balcony/scenic-3.png"],
    "Room 7": ["./public/images/veranda-vista/veranda-1.png", "./public/images/veranda-vista/veranda-2.png", "./public/images/veranda-vista/veranda-3.png", "./public/images/veranda-vista/veranda-4.png"],
    "Room 8": ["./public/images/luxe-suite/luxe-1.png", "./public/images/luxe-suite/luxe-2.png", "./public/images/luxe-suite/luxe-3.png", "./public/images/luxe-suite/luxe-4.png"],
    "Villa": ["./public/images/serenity/serenity-1.png", "./public/images/serenity/serenity-2.png", "./public/images/serenity/serenity-3.png", "./public/images/serenity/serenity-4.png"],
    "Hanging Kubo": ["./public/images/treetop-haven/treetop-1.png", "./public/images/treetop-haven/treetop-2.png", "./public/images/treetop-haven/treetop-3.png", "./public/images/treetop-haven/treetop-4.png"],
}

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
        /*
        if (data["images"] == undefined || data["images"] == "") {
            if (reqRoomId in Object.keys(ROOM_PLACEHOLDER_IMAGES)) {
                images = ROOM_PLACEHOLDER_IMAGES[reqRoomId];
            } else {
                images = PLACEHOLDER_IMAGES;
            }
            console.log(`Retrieved placeholder for id ${reqRoomId}`)
        }  else {
            images = data["images"].split(",")
            console.log(`Retrieved images for id ${reqRoomId}`)
        }
        */
        if (data["images"] != undefined && data["images"] != "") {
            console.log(data)
            images = data[images].split(",");
            console.log(`Retrieved images for id ${reqRoomId}`)
        } else if (Object.keys(ROOM_PLACEHOLDER_IMAGES).includes(reqRoomId)) {
            images = ROOM_PLACEHOLDER_IMAGES[reqRoomId];
            console.log(`Retrieved placeholder for id ${reqRoomId}`)
        } else {
            images = PLACEHOLDER_IMAGES;
            console.log(`Retrieved placeholder for id ${reqRoomId}`)
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
            if (i.images != undefined && i.images != "") {
                imageJson[i.roomId] = i.images.split(",");
            } else if (Object.keys(ROOM_PLACEHOLDER_IMAGES).includes(i.roomId)) {
                imageJson[i.roomId] = ROOM_PLACEHOLDER_IMAGES[i.roomId];
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