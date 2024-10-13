import React from 'react';
import InquiryButton from "../components/InquiryButton";
import ReserveNowButton from "../components/ReserveNowButton";
import { Slideshow } from './Slideshow';

interface AvailableRoomProps {
    images: string[];
    name: string;
    price: string;
    description: React.ReactNode; 
}

const AvailableRoom: React.FC<AvailableRoomProps> = ({ images, name, price, description }) => {
    return (
        <div className="flex flex-col items-center bg-[#2F515B] p-4 rounded-lg shadow-lg m-2 w-[300px]">
            <div className="w-[250px] h-[150px] ml-10 mr-10 mb-2 mt-5">
            <Slideshow images={images} />
            </div>
                <h4 className="mt-2 text-lg font-semibold text-[#F2EFE8] font-serif">{name}</h4>
                <p className="text-[#F2EFE8] text-md font-serif">{price}</p>
                <div className="mt-3 text-sm text-justify text-[#F2EFE8] font-serif">{description}</div>
                <p className="mt-5 mr-3 ml-3 mb-0 text-sm text-left font-semibold text-[#F2EFE8] font-serif">send an inquiry for more details</p>
                <InquiryButton/>
                <p className="mt-5 mr-3 ml-3 mb-0 text-sm text-left font-semibold text-[#F2EFE8] font-serif">or reserve your room now</p>
                <ReserveNowButton/>
        </div>
    );
};

export default AvailableRoom;

