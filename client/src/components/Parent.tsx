import { useState } from 'react';
import RoomAvailabilityBar from "../components/ReservationBar";
import ReserveNowButton from "../components/ReserveNowButton";


const Reservation = () => {
const [checkInDate, setCheckInDate] = useState('');
const [checkOutDate, setCheckOutDate] = useState('');
const [adultGuests, setAdultGuests] = useState<number>(1);
const [childrenGuests, setChildrenGuests] = useState<number>(0);

return (
    <div>
    
    <RoomAvailabilityBar 
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        adultGuests={adultGuests}
        setAdultGuests={setAdultGuests}
        childrenGuests={childrenGuests}
        setChildrenGuests={setChildrenGuests}
    />

    
    <ReserveNowButton 
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        adultGuests={adultGuests}
        childrenGuests={childrenGuests}
    />
    </div>
);
};

export default Reservation;
