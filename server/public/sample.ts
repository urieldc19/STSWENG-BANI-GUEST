export const data = {
    "clients": [
      {
        "clientId": "C123456",
        "firstName": "John",
        "lastName": "Doe",
        "contactNumber": "+1234567890",
        "email": "john.doe@example.com",
        "address": "123 Main St, Springfield, USA",
        "createdAt": "2024-10-01T12:00:00Z",
        "updatedAt": "2024-10-01T12:00:00Z"
      },
      {
        "clientId": "C123457",
        "firstName": "Jane",
        "lastName": "Smith",
        "contactNumber": "+0987654321",
        "email": "jane.smith@example.com",
        "address": "456 Elm St, Springfield, USA",
        "createdAt": "2024-10-01T12:05:00Z",
        "updatedAt": "2024-10-01T12:05:00Z"
      }
    ],
    "rooms": [
      {
        "roomId": "R101",
        "bedType": "Double",
        "pax": 2,
        "createdAt": "2024-10-01T12:00:00Z",
        "updatedAt": "2024-10-01T12:00:00Z"
      },
      {
        "roomId": "R102",
        "bedType": "Suite",
        "pax": 4,
        "createdAt": "2024-10-01T12:10:00Z",
        "updatedAt": "2024-10-01T12:10:00Z"
      }
    ],
    "reservations": [
      {
        "referenceNo": "RES001",
        "checkInDate": "2024-10-10T15:00:00Z",
        "checkOutDate": "2024-10-15T11:00:00Z",
        "numberOfAdults": 2,
        "numberOfChildren": 1,
        "numberOfGuests": 3,
        "pets": false,
        "clientId": "C123456",
        "roomId": "R101",
        "otherNotes": "Late check-in requested",
        "createdAt": "2024-10-01T12:20:00Z",
        "updatedAt": "2024-10-01T12:20:00Z"
      },
      {
        "referenceNo": "RES002",
        "checkInDate": "2024-10-20T15:00:00Z",
        "checkOutDate": "2024-10-25T11:00:00Z",
        "numberOfAdults": 4,
        "numberOfChildren": 2,
        "numberOfGuests": 6,
        "pets": true,
        "clientId": "C123457",
        "roomId": "R102",
        "otherNotes": "Requires pet-friendly room",
        "createdAt": "2024-10-01T12:30:00Z",
        "updatedAt": "2024-10-01T12:30:00Z"
      }
    ]
}