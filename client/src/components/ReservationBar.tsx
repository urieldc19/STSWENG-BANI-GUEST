import { useState, useEffect } from "react";
import AvailableRoom from "../components/AvailableRooms";
import { NativeSelect } from "@mantine/core";

const RoomAvailabilityBar = () => {
    const [availableRooms, setAvailableRooms] = useState<{
        images: string[];
        name: string;
        price: string;
        description: React.ReactNode;
        isAvailable: boolean;
        roomCapacity: number;
    }[]>([]);

    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [adultNumber, setAdultNumber] = useState("1");
    const [childrenNumber, setChildrenNumber] = useState("0");
    const [validationErrors, setValidationErrors] = useState<{
        checkIn?: string;
        checkOut?: string;
    }>({});
    const [isValidationComplete, setIsValidationComplete] = useState(false);

    const [imagesObj, setImagesObj] = useState({});
    const [error, setError] = useState(false);
    const [state, setState] = useState("loading");

    const validateDates = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const errors: { checkIn?: string; checkOut?: string } = {};

        const checkIn = new Date(checkInDate);
        checkIn.setHours(0, 0, 0, 0);
        const checkOut = new Date(checkOutDate);
        checkOut.setHours(0, 0, 0, 0);

        if (!checkInDate || checkIn < today) {
        errors.checkIn = "Check-in date cannot be in the past or empty.";
        }

        if (!checkOutDate || checkOut <= checkIn) {
        errors.checkOut = "Check-out date must be after the check-in date.";
        }

        if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return false;
        }

        setValidationErrors({});
        return true;
    };

    const checkAvailability = async () => {
        setIsValidationComplete(false);

        if (!validateDates()) {
        return; // Stop if validation fails
        }

        const totalGuests = parseInt(adultNumber) + parseInt(childrenNumber);
        let filteredRooms = [
            {
                images: imagesObj["Room 1"],
                name: 'Room 1',
                price: '₱9,600/night',
                description: (
                    <div>
                        <p>Escape to paradise with your favorite people! Our room for 8 offers the perfect blend of comfort and luxury.</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 8,
            },
            {
                images: imagesObj["Room 2"],
                name: 'Room 2',
                price: '₱9,600/night',
                description: (
                    <div>
                        <p>Create unforgettable memories in our spacious resort room, perfect for up to 8 guests. Your adventure starts here!</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 8,
            },
            {
                images: imagesObj["Room 3"],
                name: 'Room 3',
                price: '₱9,600/night',
                description: (
                    <div>
                        <p>Your spacious escape awaits! Relax and unwind in our resort room designed for up to 8 guests.</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 8,
            },
            {
                images: imagesObj["Room 4"],
                name: 'Room 4',
                price: '₱4,200/night',
                description: (
                    <div>
                        <p>Find your paradise for two! Our elegantly designed room offers the perfect sanctuary for couples.</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 4,
            },
            {
                images: imagesObj["Room 5"],
                name: 'Room 5',
                price: '₱4,200/night',
                description: (
                    <div>
                        <p>Enjoy a private escape! Our resort room for two is the ideal setting for unforgettable memories and relaxation."</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 4,
            },
            {
                images: imagesObj["Room 6"],
                name: 'Room 6',
                price: '₱4,200/night',
                description: (
                    <div>
                        <p>Romantic retreats await! Our cozy room for two is the perfect getaway for couples looking to relax and reconnect.</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 4,
            },
            {
                images: imagesObj["Room 7"],
                name: 'Room 7',
                price: '₱10,000/night',
                description: (
                    <div>
                        <p>Escape the everyday with your favorite people! Our room for 5 to 9 offers the perfect for unforgettable memories.</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 9,
            },
            {
                images: imagesObj["Room 8"],
                name: 'Room 8',
                price: '₱11,000/night',
                description: (
                    <div>
                        <p>The more, the merrier! Our resort room comfortably fits 6 to 8 guests, making it the perfect for your next group.</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 8,
            },
            {
                images: imagesObj["Room 9"],
                name: 'Room 9',
                price: '₱13,500/night',
                description: (
                    <div>
                        <p>Gather, relax, and enjoy! Our expansive room for 6 to 10 guests is designed for comfort and connection!</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 10,
            },
            {
                images: imagesObj["Villa"],
                name: 'Villa',
                price: '₱15,000/night',
                description: (
                    <div>
                        <p>Bring the whole crew! Our spacious room is perfect for 6 to 8 guests, making it the spot for family and friends gatherings!</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 8,
            },
            {
                images: imagesObj["Hanging Kubo"],
                name: 'Hanging Kubo',
                price: '₱5,000/night',
                description: (
                    <div>
                        <p>Elevate your escape! Our charming hanging kubo comfortably fits 5 guests, offering a unique and cozy retreat.</p>
                    </div>
                ),
                isAvailable: true,
                roomCapacity: 5,
            }
        ];

        filteredRooms = filteredRooms.filter((room) => room.roomCapacity >= totalGuests);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/api/room/getavailable?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
            );
            const data = await response.json();

            filteredRooms = filteredRooms.map((room) => {
                const availability = data.find((item) => item.roomId === room.name);
                return {
                ...room,
                isAvailable: availability ? availability.isAvailable : room.isAvailable,
                };
            });

            filteredRooms = filteredRooms.filter((room) => room.isAvailable);
            setAvailableRooms(filteredRooms);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsValidationComplete(true);
        }
    };

    useEffect(() => {
        if (state === "loading") {
        const fetchData = async () => {
            try {
                const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/room/getAllRoomImages`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                if (!resp.ok) throw new Error("Cannot connect to server");
                const data = await resp.json();
                setState("loaded");
                setImagesObj(data);
            } catch (e) {
                console.error("An error occurred while loading images:", e);
                setState("error");
                setError(true);

                const fallbackImages = {};
                [
                    "Room 1",
                    "Room 2",
                    "Room 3",
                    "Room 4",
                    "Room 5",
                    "Room 6",
                    "Room 7",
                    "Room 8",
                    "Room 9",
                    "Villa",
                    "Hanging Kubo",
                ].forEach((room) => {
                    fallbackImages[room] = ["./images/placeholder1.png", "./images/placeholder2.jpg", "./images/placeholder3.jpg"];
                });
                setImagesObj(fallbackImages);
            }
        };
        fetchData();
        }
    }, [state]);

    return (
        <div>
        {state === "loading" && <div>Loading...</div>}
        {(state === "loaded" || state === "error") && (
            <div className="w-[1350px] p-6 mx-auto mt-5 bg-[#A0B1B5] text-black opacity-100 rounded-sm shadow-lg">
            <div className="flex flex-col justify-between gap-4 opacity-100 md:flex-row">
                {/* Input Fields */}
                <div className="flex flex-col">
                <label className="mb-2 font-serif font-semibold text-left">Check-in</label>
                <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.currentTarget.value)}
                    className="p-1 border w-[230px] border-gray-300 rounded-sm"
                />
                <p className="text-red-500">{validationErrors.checkIn || ""}</p>
                </div>
                <div className="flex flex-col">
                <label className="mb-2 font-serif font-semibold text-left">Check-out</label>
                <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.currentTarget.value)}
                    className="p-1 border w-[230px] border-gray-300 rounded-sm"
                />
                <p className="text-red-500">{validationErrors.checkOut || ""}</p>
                </div>
                <div className="flex flex-col">
                <label className="mb-2 font-serif font-semibold text-left">Number of Adults</label>
                <NativeSelect
                    className="w-[230px] rounded-sm"
                    value={adultNumber}
                    onChange={(e) => setAdultNumber(e.currentTarget.value)}
                    data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                />
                </div>
                <div className="flex flex-col">
                <label className="mb-2 font-serif font-semibold text-left">Number of Children</label>
                <NativeSelect
                    className="w-[230px] rounded-sm"
                    value={childrenNumber}
                    onChange={(e) => setChildrenNumber(e.currentTarget.value)}
                    data={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                />
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
            {isValidationComplete && (
                <div className="mt-6">
                {availableRooms.length === 0 ? (
                    <p className="font-serif text-lg font-semibold text-center">
                    No rooms are available for the selected dates or the specified number of guests.
                    </p>
                ) : (
                    <div className="flex flex-wrap justify-center">
                    <h3 className="w-full mb-4 font-serif text-xl font-semibold text-center">
                        Available Rooms
                    </h3>
                    {availableRooms.map((room, index) => (
                        <AvailableRoom
                        key={index}
                        images={room.images}
                        name={room.name}
                        price={room.price}
                        description={room.description}
                        roomCapacity={room.roomCapacity}
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                        adultGuests={parseInt(adultNumber)}
                        childrenGuests={parseInt(childrenNumber)}
                        />
                    ))}
                    </div>
                )}
                </div>
            )}
            </div>
        )}
        </div>
    );
};

export default RoomAvailabilityBar;
