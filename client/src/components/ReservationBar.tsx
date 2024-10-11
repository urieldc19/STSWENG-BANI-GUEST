{/* install first: npm install react-datepicker and npm install --save @types/react-datepicker */}

import { useState } from 'react';
import AvailableRoom from "../components/AvailableRooms";


const RoomAvailabilityBar = () => {
    
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [adultGuests, setAdultGuests] = useState<number>(1);
    const [childrenGuests, setChildrenGuests] = useState<number>(0);
    const [availableRooms, setAvailableRooms] = useState<{
        images: string[];
        name: string;
        price: string;
        description: React.ReactNode;
        isAvailable: boolean;
    }[]>([]);

    const [errors, setErrors] = useState<{ checkIn?: string; checkOut?: string }>({});

    // Validation For CheckIn and CheckOut
    const validateDates = () => {
        let validationErrors: { checkIn?: string; checkOut?: string } = {};

        const today = new Date().toISOString().split('T')[0];
        if (!checkInDate || checkInDate < today) {
            validationErrors.checkIn = "Check-in date cannot be in the past or empty.";
        }

        if (!checkOutDate || checkOutDate <= checkInDate) {
            validationErrors.checkOut = "Check-out date must be after the check-in date.";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    // sample only (need backend for isAvailable and need actual images for the rooms)
    const checkAvailability = () => {
        if (!validateDates()) {
            return; // prompts error
        }
        
        const rooms = [
            {
                images: ['./images/reservations/slideshow4.png'],
                name: 'Room 1',
                price: '₱9,600/night',
                description: (
                    <div>
                        <p>Escape to paradise with your favorite people! Our room for 8 offers the perfect blend of comfort and luxury.</p>
                    </div>
                ),
                isAvailable: true,
            },
            {
                images: [],
                name: 'Room 2',
                price: '₱9,600/night',
                description: (
                    <div>
                        <p>Create unforgettable memories in our spacious resort room, perfect for up to 8 guests. Your adventure starts here!</p>
                    </div>
                ),
                isAvailable: false,
            },
            {
                images: [],
                name: 'Room 3',
                price: '₱9,600/night',
                description: (
                    <div>
                        <p>Your spacious escape awaits! Relax and unwind in our resort room designed for up to 8 guests.</p>
                    </div>
                ),
                isAvailable: true,
            },
            {
                images: [],
                name: 'Room 4',
                price: '₱4,200/night',
                description: (
                    <div>
                        <p>Find your paradise for two! Our elegantly designed room offers the perfect sanctuary for couples.</p>
                    </div>
                ),
                isAvailable: false,
            },
            {
                images: [],
                name: 'Room 5',
                price: '₱4,200/night',
                description: (
                    <div>
                        <p>Enjoy a private escape! Our resort room for two is the ideal setting for unforgettable memories and relaxation."</p>
                    </div>
                ),
                isAvailable: true,
            },
            {
                images: [],
                name: 'Room 6',
                price: '₱4,200/night',
                description: (
                    <div>
                        <p>Romantic retreats await! Our cozy room for two is the perfect getaway for couples looking to relax and reconnect.</p>
                    </div>
                ),
                isAvailable: true,
            },
            {
                images: [],
                name: 'Room 7',
                price: '₱10,000/night',
                description: (
                    <div>
                        <p>Escape the everyday with your favorite people! Our room for 5 to 9 offers the perfect for unforgettable memories.</p>
                    </div>
                ),
                isAvailable: true,
            },
            {
                images: [],
                name: 'Room 8',
                price: '₱11,000/night',
                description: (
                    <div>
                        <p>The more, the merrier! Our resort room comfortably fits 6 to 8 guests, making it the perfect for your next group.</p>
                    </div>
                ),
                isAvailable: true,
            },
            {
                images: [],
                name: 'Room 9',
                price: '₱13,500/night',
                description: (
                    <div>
                        <p>Gather, relax, and enjoy! Our expansive room for 6 to 10 guests is designed for comfort and connection!</p>
                    </div>
                ),
                isAvailable: true,
            },
            {
                images: [],
                name: 'Villa',
                price: '₱15,00/night',
                description: (
                    <div>
                        <p>Bring the whole crew! Our spacious room is perfect for 6 to 8 guests, making it the spot for family and friends gatherings!</p>
                    </div>
                ),
                isAvailable: false,
            },
            {
                images: [],
                name: 'Hanging Kubo',
                price: '₱5,000/night',
                description: (
                    <div>
                        <p>Elevate your escape! Our charming hanging kubo comfortably fits 5 guests, offering a unique and cozy retreat.</p>
                    </div>
                ),
                isAvailable: true,
            }
        ];
        setAvailableRooms(rooms);
    };

    const filterAvailableRooms = () => {
        return availableRooms.filter(room => room.isAvailable);
    };
    return (

        <div className="w-[1350px] p-6 mx-auto mt-5 bg-[#A0B1B5] text-black opacity-100 rounded-sm shadow-lg"> 
            <div className="flex flex-col justify-between gap-4 opacity-100 md:flex-row">
                {/* Check-In Field */}
                <div className="flex flex-col">
                    <label className="mb-2 font-serif font-semibold text-left">Check-in</label>
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className={`p-1 border w-[230px] border-gray-300 rounded-sm ${errors.checkIn ? 'border-red-500' : ''}`}
                    />
                    {errors.checkIn && <p className="text-sm text-red-900">{errors.checkIn}</p>}
                </div>

                {/* Check-Out Field */}
                <div className="flex flex-col">
                    <label className="mb-2 font-serif font-semibold text-left">Check-out</label>
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className={`p-1 border w-[230px] border-gray-300 rounded-sm ${errors.checkOut ? 'border-red-500' : ''}`}
                    />
                    {errors.checkOut && <p className="text-sm text-red-900">{errors.checkOut}</p>}
                </div>

                {/* Number of Guests Field */}
                <div className="flex flex-col">
                    <label className="mb-2 font-serif font-semibold text-left">Number of Guest(s)</label>
                    <div className="flex gap-2">
                        <select
                            value={adultGuests}
                            onChange={(e) => setAdultGuests(Number(e.target.value))}
                            className="w-[200px] p-2 border rounded-sm"
                        >
                            <option value={1}>1 Adult</option>
                            <option value={2}>2 Adults</option>
                            <option value={3}>3 Adults</option>
                            <option value={4}>4 Adults</option>
                            <option value={5}>5-10 Adults</option>
                        </select>
                        <select
                            value={childrenGuests}
                            onChange={(e) => setChildrenGuests(Number(e.target.value))}
                            className="w-[200px]p-2 border rounded-sm"
                        >
                            <option value={0}>No Children</option>
                            <option value={1}>1 Child</option>
                            <option value={2}>2 Children</option>
                            <option value={3}>3 Children</option>
                            <option value={4}>4-10 Children</option>
                        </select>
                    </div>
                </div>

                {/* Check Availability Button */}
                <div className="flex items-end">
                    <button
                        onClick={checkAvailability}
                        className="font-serif p-2 bg-[#A0B1B5] border border-black text-white font-semibold rounded-sm shadow-md hover:bg-[#2F515B]"
                    >
                        Check Availability
                    </button>
                </div>
            </div>

            {/* Available Rooms */}
            {filterAvailableRooms().length > 0 && (
                <div className="flex flex-wrap justify-center mt-6">
                    <h3 className="w-full mb-4 font-serif text-xl font-semibold text-center">Available Rooms</h3>
                    {filterAvailableRooms().map((room, index) => (
                        <AvailableRoom
                            key={index}
                            images={room.images}
                            name={room.name}
                            price={room.price}
                            description={room.description}
                        />
                    ))}
                </div>
            )}
        </div>
    );
    
};


export default RoomAvailabilityBar;
