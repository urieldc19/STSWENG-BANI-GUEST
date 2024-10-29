const { Room, Reservation } = require('../models/models.js');

const getAvailableRooms = async (req, res) => {

    const { checkInDate, checkOutDate } = req.body

    if (!checkInDate || !checkOutDate) {
        return res.status(400).json({ message: 'Check-in and check-out dates are required.' })
    }

    try {
        const occupiedReservations = await Reservation.find({
            $or: [
                { checkInDate: { $lt: new Date(checkOutDate), $gte: new Date(checkInDate) } },
                { checkOutDate: { $gt: new Date(checkInDate), $lte: new Date(checkOutDate) } }
            ]
        }).select('roomId -_id');

        const occupiedRoomIds = new Set(occupiedReservations.map(res => res.roomId));

        const allRooms = await Room.find().select('roomId -_id');

        const roomAvailability = allRooms.map(room => ({
            roomId: room.roomId,
            isAvailable: !occupiedRoomIds.has(room.roomId)
        }));

        return res.json(roomAvailability);

    } catch (error) {
        console.error(error)
    }
}

module.exports = {getAvailableRooms}