const { Client, Reservation } = require('../models/models.js');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'brandon_jamil_so@dlsu.edu.ph',
      pass: 'vcop ckxg uken rkao',
    },
  });

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

        await Reservation.create(reservationEntry)

        res.status(201).json({ message: "Reservation created successfully" });

    } catch (error) {

        res.status(500).json({message: "Reservation creation failed"})
    }
};

const sendConfirmationEmail = async (req, res) => {
    try{
        console.log ("test entry");
        const body = req.body
        
        console.log ("test set");
        const mailOptions = {
            from: 'brandon_jamil_so@dlsu.edu.ph',
            to: body.email,
            subject: 'Bani Hidden Paradise: Reservation Confirmation Email',
            text: `Hello, this is to confirm your reservation for Bani Hidden Paradise Beach Resort.
----------------------------------------------------------------------------------
Details
----------------------------------------------------------------------------------
Name: ${body.lastName}, ${body.firstName}
Address: ${body.address}
Check In Date: ${new Date(body.checkInDate ?? '').toDateString()}
Check Out Date: ${new Date(body.checkOutDate ?? '').toDateString()}
Number of Adults: ${body.numberOfAdults}
Number of Children: ${body.numberOfChildren}
Total number of Guests: ${body.numberOfGuests}
Pets: ${body.pets === true ? "Yes" : body.pets === false ? "No" : ""}
Other Notes: ${body.otherNotes}
Contact No.: ${body.contactNumber}

If there are any concerns, feel free to contact us at contact@banihiddenparadise.com
`,
        };
        
        console.log ("test set mailing");

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
            console.log(err);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
        console.log ("test sending mail");
        res.status(201).json({ message: "Reservation created successfully" });
    }catch(error){
        res.status(500).json({message: "Confirmation email sending failed"})
    }
};

module.exports = {checkClient, getReferenceNo, createReservation, sendConfirmationEmail}