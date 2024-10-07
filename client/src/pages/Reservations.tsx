import RoomAvailabilityBar from "../components/ReservationBar";
import { Slideshow } from "../components/Slideshow";

export function Reservations () {

    const images = [
        './images/reservations/slideshow1.png',
        './images/reservations/slideshow2.png',
        './images/reservations/slideshow3.png',
    ];

    return (
    <>
        <div className="relative z-10 w-full h-full slideshow">
            <Slideshow images={images} />
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-7xl text-[#C68A43] font-JimNightshade drop-shadow-lg z-20">
                    Reservations
                </div>
        </div>

        <div className="z-30 mt-0 h-auto p-6 text-black transition-colors duration-200 shadow-md bg-[#F2EFE8] opacity-75">
        
        <div className="my-6 text-center">
            <h2 className="mt-2 mb-5 font-serif text-4xl text-black">Your perfect escape awaits at Bani Hidden Paradise Resort!</h2>
                <div className="w-[1350px] mx-auto mb-5 border-b-2 border-black"></div> 
                    <div className="mt-4 mb-8 ml-10 mr-10 space-y-2 font-serif text-lg text-justify">
                        <p>Looking for the perfect escape?  Reserve your room at Bani Hidden Paradise Resort and step into a world of relaxation and natural beauty. Whether you're seeking a peaceful retreat or an adventure-filled stay, our rooms offer the ultimate comfort, surrounded by stunning views of nature. From cozy getaways to luxurious accommodations, we have the perfect space to suit your needs. Don’t wait—secure your reservation today and ensure your spot in paradise! Experience the tranquility you deserve, with the best in hospitality and scenic beauty. Book now for a vacation you’ll never forget! </p>
                    </div>
                    <h2 className="mt-2 mb-5 font-serif text-2xl font-bold text-black">Check Room Availability Now!</h2>
                    <RoomAvailabilityBar />
        </div>
        
    </div>
        
    </>
        
    )
}
