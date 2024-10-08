const { Client, Reservation } = require('../models/models.js')

async function clientChecker (clientEntry) {

    try {

        const clientFirstName = clientEntry.firstName
        const clientLastName = clientEntry.lastName
        const clientAddress = clientEntry.address

        const clientMatch = await Client.findOne({'firstName' : clientFirstName, 'lastName' : clientLastName, 'address' : clientAddress})

        if (clientMatch) {

            return clientMatch.clientId

        } else {

            const clientCount = await Client.countDocuments()

            const newClientId = `C${String(clientCount + 1).padStart(8, '0')}`;

            const newClientEntry = {
                clientId: newClientId,
                ...clientEntry
            }

            await Client.create(newClientEntry)

            return newClientId
        }

    } catch (error) {
        console.error(error)
        return null
    }
}

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
        const arrivalStatus = "Booked"

        const clientEntry = {
            firstName,
            lastName,
            contactNumber,
            email,
            address
        }

        const clientId = await clientChecker(clientEntry)

        const reservationCount = await Reservation.countDocuments()

        const referenceNo = `R${String(reservationCount + 1).padStart(8, '0')}`;

        const reservationEntry = {
            referenceNo,
            roomId,
            arrivalStatus,
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

        await Reservation.create(reservationEntry)

        res.status(201).json({ message: "Reservation created successfully" });

    } catch (error) {

        res.status(500).json({message: "Reservation creation failed"})
        console.error(error)
    }
};

module.exports = createReservation