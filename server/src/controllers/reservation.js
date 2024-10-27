const { Client, Reservation } = require('../models/models.js')

async function checkClient (clientEntry) {

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

async function getReferenceNo () {
    const reservationCount = await Reservation.countDocuments()

    const referenceNo = `R${String(reservationCount + 1).padStart(8, '0')}`

    return referenceNo
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

        const clientId = await checkClient(clientEntry)
        const referenceNo = await getReferenceNo()

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

        console.log(reservationEntry)

        await Reservation.create(reservationEntry)

        res.status(201).json({ message: "Reservation created successfully" });

    } catch (error) {

        res.status(500).json({message: "Reservation creation failed"})
    }
};

module.exports = {checkClient, getReferenceNo, createReservation}