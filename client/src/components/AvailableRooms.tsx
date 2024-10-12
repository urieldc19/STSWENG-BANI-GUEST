import React from 'react';

import ReserveNowButton from "../components/ReserveNowButton";
import { Slideshow } from './Slideshow';

interface AvailableRoomProps {
    images: string[];
    name: string;
    price: string;
    description: React.ReactNode;
    checkInDate: string;
    checkOutDate: string;
    adultGuests: number;
    childrenGuests: number;
}

const AvailableRoom: React.FC<AvailableRoomProps> = ({
    images,
    name,
    price,
    description,
    checkInDate,
    checkOutDate,
    adultGuests,
    childrenGuests,
}) => {
    return (
        <div className="flex flex-col items-center bg-[#2F515B] p-4 rounded-lg shadow-lg m-2 w-[300px]">
            <div className="object-cover w-full mt-5 mb-2 overflow-hidden h-36">
            <Slideshow images={images} />
            </div>
                <h4 className="mt-2 text-lg font-semibold text-[#F2EFE8] font-serif">{name}</h4>
                <p className="text-[#F2EFE8] text-md font-serif">{price}</p>
                <div className="mt-3 text-sm text-justify text-[#F2EFE8] font-serif">{description}</div>
                <ReserveNowButton
                name={name}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                adultGuests={adultGuests}
                childrenGuests={childrenGuests}/>
        </div>
    );
};

export default AvailableRoom;

