import ReserveNowButton from "../components/ReserveButton";
import { Slideshow } from "../components/Slideshow";
import SpecialOffersBox from "../components/SpecialOffersBox";
import WeddingPackagesCarousel from "../components/WeddingPackages";

export function SpecialOffers () {

    const images = [
        './images/specialoffers/slideshow1.png',
        './images/specialoffers/slideshow2.png',
        './images/specialoffers/slideshow3.png',
        './images/specialoffers/slideshow4.png',
    ];
    
    return (
    <>
        
        <div className="relative z-10 w-full h-full slideshow">
            <Slideshow images={images} />
                <div className="z-10 absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-7xl text-[#C68A43] font-JimNightshade drop-shadow-lg">
                    Wedding in Paradise
                </div>
        </div>


        <div className="my-6 text-center">
            <h2 className="mb-2 font-serif text-4xl text-black">Make your Wedding most memorable</h2>
                <div className="w-5/6 mx-auto mb-8 border-b-2 border-black"></div> 
                <p className="font-serif text-lg text-justify text-black ml-28 mr-28">At Bani Hidden Paradise Beach Resort, we believe that your special day deserves to be nothing less than extraordinary. Imagine exchanging vows with the sound of waves gently lapping at the shore, surrounded by breathtaking views and lush tropical landscapes. Our resort offers the perfect blend of romance, beauty, and luxury, ensuring that every moment of your celebration is unforgettable.
                    From intimate ceremonies to grand receptions, our dedicated team will work closely with you to customize every detail, from exquisite floral arrangements to gourmet catering that tantalizes the taste buds. Let us help you create cherished memories that you and your loved ones will treasure forever.
                    Your dream wedding awaits—let's make it a reality together!</p>
        </div>
    

        <WeddingPackagesCarousel/>

    {/* 2nd section */}
    
    <div className="h-auto p-6 mt-10 text-black transition-colors duration-200 shadow-md">
        
        <div className="my-6 text-center">
            <h2 className="mb-5 font-serif text-4xl text-black">Special Offers</h2>
                <div className="w-[1330px] mx-auto mb-8 border-b-2 border-black"></div> 
                <div className="mt-4 mb-1 ml-10 mr-10 space-y-2 font-serif text-lg text-justify">
                    <p>Discover the hidden gem of Bani Hidden Paradise Resort! Whether you're planning a romantic prenup photoshoot, seeking a pet-friendly getaway, or craving a day of adventure with our scenic day tours, we have it all! Enjoy the tranquility and beauty of nature while creating lasting memories with your loved ones – furry friends included! Book your stay today and reserve your spot in paradise.  Don't miss out on our special offers, designed to make your experience unforgettable!</p>
                </div>
        </div>

        <ReserveNowButton></ReserveNowButton>

        <SpecialOffersBox />
        
    </div>

    <footer/>
    </>
    )
}
