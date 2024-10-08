const { Client, Reservation } = require('./models/models.js')

const createReservation = async (req, res) => {

    try {
    
        const {
            roomId,
            checkInDate, 
            checkOutDate, 
            numberOfAdults, 
            numberOfChildren, 
            numberOfGuests, 
            pets,  
            otherNotes,
            firstName, 
            lastName, 
            contactNumber,
            email,
            address
        } = req.body

        const totalAmount = 0.00
        const amountPaid = 0.00
        const clientId = "C001"

        const clientEntry = {
            firstName,
            lastName,
            contactNumber,
            email,
            address
        }

        const reservationEntry = {
            roomId,
            roomId,
            checkInDate, 
            checkOutDate, 
            numberOfAdults, 
            numberOfChildren, 
            numberOfGuests, 
            pets,  
            otherNotes,
            totalAmount,
            amountPaid,
            clientId 
        }

        await Client.create(clientEntry)

        await Reservation.create(reservationEntry)

        res.status(201).json({ message: "Reservation created successfully" });

    } catch (error) {
        console.error(error)
    }
};

module.exports = createReservation