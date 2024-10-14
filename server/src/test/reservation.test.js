const { Client, Reservation } = require('../models/models.js');
const { checkClient, getReferenceNo, createReservation } = require('../controllers/reservation.js');

jest.mock('../models/models.js', () => ({
    Client: {
        findOne: jest.fn(),
        countDocuments: jest.fn(),
        create: jest.fn(),
    },
    Reservation: {
        countDocuments: jest.fn(),
        create: jest.fn(),
    },
}));

describe('checkClient', () => {

    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
        console.error.mockRestore();
    });

    it('Should return clientId when client exists', async () => {
        const mockClient = { clientId: 'C00000001', firstName: 'Avery', lastName: 'Blair', address: '789 Main St' };
        Client.findOne.mockResolvedValue(mockClient);

        const clientEntry = { firstName: 'Avery', lastName: 'Blair', address: '789 Main St' };
        const result = await checkClient(clientEntry);

        expect(result).toBe(mockClient.clientId);
        expect(Client.findOne).toHaveBeenCalledWith(clientEntry);
    });

    it('Should create a new client when not found', async () => {
        Client.findOne.mockResolvedValue(null);
        Client.countDocuments.mockResolvedValue(73);

        const clientEntry = { firstName: 'Jimmy', lastName: 'Denver', address: '456 Elm St' };
        const result = await checkClient(clientEntry);

        expect(Client.create).toHaveBeenCalledWith({
            clientId: 'C00000074',
            ...clientEntry
        });

        expect(result).toBe('C00000074');
    });

    it('Should return null on error', async () => {
        Client.findOne.mockRejectedValue(new Error('Database error')); 

        const result = await checkClient();
        expect(console.error).toHaveBeenCalledWith(expect.any(Error));
        expect(result).toBeNull();
       // 
    });
});

describe('getReferenceNo', () => {

    it('Should return new reference number based on the number of existing documents', async () => {
        Reservation.countDocuments.mockResolvedValue(47);

        const result = await getReferenceNo();

        expect(result).toBe("R00000048");
    });
});

describe('createReservation', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                roomId: 'R00000001',
                checkInDate: '2024-01-01',
                checkOutDate: '2024-01-02',
                numberOfAdults: 2,
                numberOfChildren: 1,
                numberOfGuests: 3,
                pets: false,
                otherNotes: '',
                firstName: 'John',
                lastName: 'Doe',
                contactNumber: '1234567890',
                email: 'john.doe@example.com',
                address: '123 Main St'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    it('Should create a reservation successfully when a client does not exist in the database', async () => {
        
        Client.findOne.mockResolvedValue(null); 
        Client.countDocuments.mockResolvedValue(0); 
        Reservation.countDocuments.mockResolvedValue(0);
        Client.create.mockResolvedValue(); 
        Reservation.create.mockResolvedValue();

        await createReservation(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: "Reservation created successfully" });
        expect(Client.create).toHaveBeenCalled(); 
        expect(Reservation.create).toHaveBeenCalled(); 
    });

    it('Should create a reservation successfully when a client exists in the database', async () => {
        
        Client.findOne.mockResolvedValue(1); 
        Client.countDocuments.mockResolvedValue(3); 
        Reservation.countDocuments.mockResolvedValue(4);
        Client.create.mockResolvedValue(); 
        Reservation.create.mockResolvedValue();

        await createReservation(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: "Reservation created successfully" });
        expect(Client.create).toHaveBeenCalled(); 
        expect(Reservation.create).toHaveBeenCalled(); 
    });

    it('Should return 500 on error', async () => {
        Reservation.create.mockRejectedValue(new Error('Database error'));

        await createReservation(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Reservation creation failed" });
    });
});