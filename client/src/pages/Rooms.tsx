import { useState } from 'react';
import '../components/styles.css';
import { Slideshow } from '../components/Slideshow';

export function Rooms() {
    const images = [
        './images/room/room_1.jpg',
        './images/room/room_2.jpg',
        './images/room/room_3.jpg',
        './images/room/room_4.jpg'
    ];

    const roomData = [
        { src: './images/room/lovers_hideaway.jpg', alt: "Lover's Hideaway", maxOccupancy: 4, price: 4200.00, bedSize: "1 Queen Size" },
        { src: './images/room/scenic_balcony.jpg', alt: "Scenic Balcony Suite", maxOccupancy: 9, price: 10000.00, bedSize: "2 Queen and 1 Single" },
        { src: './images/room/veranda_vista.jpg', alt: "Veranda Vista Suite", maxOccupancy: 8, price: 11000.00, bedSize: "2 Queen and 1 Double Deck" },
        { src: './images/room/luxe_suite.jpg', alt: "Luxe Suite", maxOccupancy: 10, price: 13500.00, bedSize: "3 Queen Size" },
        { src: './images/room/serenity_villa.jpg', alt: "Serenity Villa", maxOccupancy: 8, price: 15000.00, bedSize: "2 Queen Size" },
        { src: './images/room/family_bunk.jpg', alt: "Family Bunk", maxOccupancy: 8, price: 9600.00, bedSize: "2 Bed Bunk" },
        { src: './images/room/treetop_haven.jpg', alt: "Treetop", maxOccupancy: 6, bedSize: "N/A" }, 
        { src: './images/room/leisure_day_access.jpg', alt: "Leisure", maxOccupancy: 7, bedSize: "N/A" }  
    ];

    const [selectedOccupancy, setSelectedOccupancy] = useState<number | null>(null);
    const [selectedBedSize, setSelectedBedSize] = useState<string | null>(null);

    const fitsOccupancy = (roomMaxOccupancy: number, roomAlt: string) => {
        if (selectedOccupancy === null) return true;
    
        switch (selectedOccupancy) {
            case 2:
            case 3:
            case 4:
                return roomMaxOccupancy === 4; 
            case 5:
                return roomMaxOccupancy === 5 || (roomMaxOccupancy >= 8 && roomAlt !== "Family Bunk"); 
            case 8:
                return roomMaxOccupancy === 8 || roomMaxOccupancy === 10 || roomAlt === "Scenic Balcony Suite"; 
            case 9:
                return roomMaxOccupancy === 9 || roomMaxOccupancy === 10;
            case 10:
                return roomMaxOccupancy >= 10; 
            default:
                return false;
        }
    };
    

    const fitsBedSize = (roomBedSize: string) => {
        if (selectedBedSize === null) return true; 
        return roomBedSize === selectedBedSize;
    };

    const filteredRooms = roomData.filter(room => 
        fitsOccupancy(room.maxOccupancy, room.alt) && fitsBedSize(room.bedSize)
    );    

    const handleOccupancyChange = (value: number | null) => {
        setSelectedOccupancy(value);
    };

    const handleRoomClick = (roomAlt: string) => {
        alert(`You clicked on ${roomAlt}`);  
    };

    return (
        <div className="w-full" style={{ fontFamily: 'Inria Serif' }}>
            <Slideshow images={images} />

            <div className="bg-[#2F515B]/55 py-4">
                <div className="text-center text-white">
                    <img src="/images/logo.png" alt="Logo" className="mx-auto mb-2 w-24 h-24" />
                    <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
                </div>
            </div>

            <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row">
                <div className="flex-1 pr-5 text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Escape the city’s hustle and find calm where nature reigns and life slows down.</h2>
                </div>
                <div className="flex-1 text-left">
                    <p className="text-lg md:text-xl">
                        At Bani - Hidden Paradise Beach Resort, each room is thoughtfully designed to provide comfort and relaxation during your stay. Fully air-conditioned, our rooms offer a cool and cozy atmosphere, perfect for unwinding after a day of adventure. Every room comes with its own private bathroom, ensuring convenience and privacy for our guests. Whether you're visiting for a family getaway or a romantic retreat, our rooms are equipped to cater to your needs with a serene ambiance and all the essentials for a delightful stay.
                    </p>
                </div>
            </section>

            <div className="flex max-w-6xl mx-auto mb-0 flex-col md:flex-row">
                <div className="md:w-1/4 bg-[#7951238f] p-6 mb-6 md:mb-0">
                    <h3 className="text-lg md:text-xl mb-4 font-bold flex items-center">
                        <img src="./images/room/filter_icon.png" alt="Filter Icon" className="ml-2 w-5 h-5" />
                        Filters
                    </h3>
                    <div className="mb-8">
                        <h4 className="font-semibold mb-2">Max Occupancy:</h4>
                        <div className="text-base">
                            {[2, 5, 8, 9, 10].map((occupancy) => (
                                <div key={occupancy}>
                                    <label>
                                        <input
                                            type="radio"
                                            value={occupancy}
                                            checked={selectedOccupancy === occupancy}
                                            onChange={() => handleOccupancyChange(occupancy)}
                                        />
                                        {occupancy} Pax
                                    </label>
                                </div>
                            ))}
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="all"  
                                        checked={selectedOccupancy === null}
                                        onChange={() => handleOccupancyChange(null)}
                                    />
                                    Show All
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-semibold mb-2">Bed Size:</h4>
                        <div className="text-base">
                            {[
                                "1 Queen Size", 
                                "2 Bed Bunk", 
                                "2 Queen and 1 Single", 
                                "2 Queen and 1 Double Deck", 
                                "3 Queen Size", 
                                "2 Queen Size"
                            ].map((bed) => (
                                <div key={bed}>
                                    <label>
                                        <input
                                            type="radio"
                                            value={bed}
                                            checked={selectedBedSize === bed}
                                            onChange={() => setSelectedBedSize(bed)}
                                        />
                                        {bed}
                                    </label>
                                </div>
                            ))}
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="all"
                                        checked={selectedBedSize === null}
                                        onChange={() => setSelectedBedSize(null)}
                                    />
                                    Show All
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-3/4 bg-[#D9BEA1] p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {filteredRooms.map((room) => (
                            <div
                                className="text-center cursor-pointer room-card"
                                key={room.alt}
                                onClick={() => handleRoomClick(room.alt)} 
                            >
                                <div className="bg-[#79512380] p-4 rounded">
                                    <img src={room.src} alt={room.alt} className="mb-4 w-full rounded" />
                                    <p className="text-lg font-semibold">{room.alt}</p>
                                    <p className="text-md font-medium">₱{room.price ? room.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 'N/A'}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
