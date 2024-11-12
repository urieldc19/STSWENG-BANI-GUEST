const { Room, Reservation } = require('../models/models.js');

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

