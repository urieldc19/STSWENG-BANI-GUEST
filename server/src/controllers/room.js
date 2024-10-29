const { Room, Reservation } = require('../models/models.js');

const getBookedRooms = async (req, res) => {

    try {

        const reservations = await Reservation.find({}, 'roomId checkInDate checkOutDate -_id');

        
        return reservedRoomIds;

    } catch (error) {
        res.status(500).json({message: "Failed to get avaiable rooms"})
    }
}

module.exports = {getBookedRooms}