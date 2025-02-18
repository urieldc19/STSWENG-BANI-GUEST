const { Room, Reservation } = require('../models/models.js');

const PLACEHOLDER_IMAGES = [
    "./images/placeholder1.png",
    "./images/placeholder2.jpg",
    "./images/placeholder3.jpg",
]
const ROOM_PLACEHOLDER_IMAGES = {
    "Room 1": ["./images/family-bunk/fam-1.png", "./images/family-bunk/fam-2.png", "./images/family-bunk/fam-3.png", "./images/family-bunk/fam-4.png"],
    "Room 2": ["./images/family-bunk/fam-1.png", "./images/family-bunk/fam-2.png", "./images/family-bunk/fam-3.png", "./images/family-bunk/fam-4.png"],
    "Room 3": ["./images/family-bunk/fam-1.png", "./images/family-bunk/fam-2.png", "./images/family-bunk/fam-3.png", "./images/family-bunk/fam-4.png"],
    "Room 4": ["./images/lovers-hideaway/lovers-1.png", "./images/lovers-hideaway/lovers-2.png", "./images/lovers-hideaway/lovers-3.png", "./images/lovers-hideaway/lovers-4.png"],
    "Room 5": ["./images/lovers-hideaway/lovers-1.png", "./images/lovers-hideaway/lovers-2.png", "./images/lovers-hideaway/lovers-3.png", "./images/lovers-hideaway/lovers-4.png"],
    "Room 6": ["./images/lovers-hideaway/lovers-1.png", "./images/lovers-hideaway/lovers-2.png", "./images/lovers-hideaway/lovers-3.png", "./images/lovers-hideaway/lovers-4.png"],
    "Room 7": ["./images/scenic-balcony/scenic-1.png", "./images/scenic-balcony/scenic-2.png", "./images/scenic-balcony/scenic-3.png"],
    "Room 8": ["./images/veranda-vista/veranda-1.png", "./images/veranda-vista/veranda-2.png", "./images/veranda-vista/veranda-3.png", "./images/veranda-vista/veranda-4.png"],
    "Room 9": ["./images/luxe-suite/luxe-1.png", "./images/luxe-suite/luxe-2.png", "./images/luxe-suite/luxe-3.png", "./images/luxe-suite/luxe-4.png"],
    "Villa": ["./images/serenity/serenity-1.png", "./images/serenity/serenity-2.png", "./images/serenity/serenity-3.png", "./images/serenity/serenity-4.png"],
    "Hanging Kubo": ["./images/treetop-haven/treetop-1.png", "./images/treetop-haven/treetop-2.png", "./images/treetop-haven/treetop-3.png", "./images/treetop-haven/treetop-4.png"],
}

const getAvailableRooms = async (req, res) => {
    const { checkInDate, checkOutDate } = req.query;

    // Validate input dates
    if (!checkInDate || !checkOutDate) {
        return res.status(400).json({ message: 'Check-in and check-out dates are required.' });
    }

    try {
        // Convert to Date objects for accurate comparison
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);

        // Fetch all rooms
        const allRooms = await Room.find().select('roomId -_id');

        // Function to check if a room is booked
        const isRoomBooked = async (roomId) => {
            // Find any reservations with "Booked" or "Checked-in" status that overlap with the requested dates for the specific room
            const overlappingReservations = await Reservation.find({
                roomId: roomId,
                arrivalStatus: { $in: ["Booked", "Checked-in"] }, // Only consider "Booked" or "Checked-in" statuses
                $or: [
                    // Case 1: Reservation's check-in date is before the requested check-out date, and check-out is after the requested check-in date
                    {
                        $and: [
                            { checkInDate: { $lt: checkOut } },  // Reservation starts before requested check-out
                            { checkOutDate: { $gt: checkIn } }   // Reservation ends after requested check-in
                        ]
                    }
                ]
            });

            // If there are any overlapping "Booked" or "Checked-in" reservations, the room is booked/unavailable
            return overlappingReservations.length > 0;
        };

        // Check availability for each room
        const roomAvailability = await Promise.all(allRooms.map(async (room) => {
            const booked = await isRoomBooked(room.roomId);
            return {
                roomId: room.roomId,
                isAvailable: !booked  // Room is available if no overlapping "Booked" or "Checked-in" reservations
            };
        }));

        console.log(roomAvailability)

        return res.json(roomAvailability);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = { getAvailableRooms };

const getRoomImages = async (req, res) => {
    try {
        let reqRoomId = req.params.roomId;

        // get from mongodb !
        let data = await Room.findOne({roomId: reqRoomId})
        let images = ""

        if (data != null && data["images"] != undefined && data["images"] != "") {
            images = data.images.split(",");
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
        console.log(`Failed to get image`)
        console.log(e)
        res.status(500).json({message: "Failed to get image"})
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
        console.log(`Failed to get images`)
        console.log(e)
        res.status(500).json({message: "Failed to get images"})
    }
}

module.exports = {getAvailableRooms, getRoomImages, getAllRoomImages}