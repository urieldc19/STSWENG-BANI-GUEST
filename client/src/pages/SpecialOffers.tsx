import ReserveNowButton from "../components/ReserveButton";
import SeeMoreButton from "../components/SeeMoreButton";
import { Slideshow } from "../components/Slideshow";

export function SpecialOffers () {
    const images = [
        './images/specialoffers/slideshow1.png',
        './images/specialoffers/slideshow2.png',
        './images/specialoffers/slideshow3.png',
        './images/specialoffers/slideshow4.png',
    ];

    const images2 = [
        './images/specialoffers/slideshow5.png',
        './images/specialoffers/slideshow6.png',
    ];

    const images3 = [
        './images/specialoffers/slideshow7.png',
        './images/specialoffers/slideshow8.png',
        './images/specialoffers/slideshow9.png',
    ];

    const images4 = [
        './images/specialoffers/slideshow10.png',
        './images/specialoffers/slideshow11.png',
        './images/specialoffers/slideshow12.png',
    ];

    const images5 = [
        './images/specialoffers/slideshow13.png',
        './images/specialoffers/slideshow14.png',
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
        </div>
    

        <div className="z-20 flex space-x-5">

             {/* Packages */}
                <div className="grid grid-cols-1 gap-6 px-8 md:grid-cols-3">
                
                {/* Wedding Package A */}
                <div className="ml-5 w-100 p-6 text-gray-800 transition-colors duration-200 inner-shadow bg-[#A0B1B5] opacity-75 hover:bg-[#2F515B] hover:text-[#F2EFE8]">
                    
                    <h3 className="mb-4 font-serif text-3xl font-semibold">Wedding Package A</h3>
                    <ul className="mt-4 mb-4 font-serif text-lg font-semibold">
                    <p>Rate: 500,000</p>
                    <p>Promo Rate: 450,000</p>
                    </ul>
                    <ul className="mt-4 mb-1 space-y-4 font-serif text-xl text-justify">
                        <li> - 3days and 2nights accommodation for 60pax with free breakfast (excess pax add. 800/per head)</li>
                        <li> - Outdoor or Indoor Venue w/ basic Sound System</li>
                        <li> - Basic Style with Tiffany Chair & Presidential Table</li>
                        <li> - Free Photo shoot w/ 1 Changing room for whole day</li>
                        <li> - 100pax food catering after ceremony</li>
                        <li> - Free Food Tasting for 2-3person</li>
                        <li> - Grazing Table</li>
                        <li> - 2 to 3 hours use of Photo booth</li>
                    </ul>
                </div>
        
                {/* Wedding Package B */}
                <div className="mr-25 p-6 text-gray-800 transition-colors duration-200 shadow-md inner-shadow  bg-[#A0B1B5] opacity-75 hover:bg-[#2F515B] hover:text-[#F2EFE8]">
                    
                    <h3 className="mb-4 font-serif text-3xl font-semibold">Wedding Package B</h3>
                    <ul className="mt-4 mb-4 font-serif text-xl font-semibold">
                    <p>Rate: 380,000</p>
                    <p>Promo Rate: 350,000</p>
                    </ul>
                    <ul className="mt-4 mb-1 space-y-4 font-serif text-xl text-justify">
                        <li> - 1 night accommodation for 60pax with free breakfast (excess pax add. 800/per head)</li>
                        <li> - Indoor Venue w/ basic Sound System</li>
                        <li> - Basic Style with Tiffany Chair & Presidential Table</li>
                        <li> - Free Photo shoot w/ 1 Changing room for whole day.</li>
                        <li> - 100pax food catering after ceremony</li>
                        <li> - Free Food Tasting for 2-3person</li>
                        <li> - Grazing Table</li>
                        <li> - 2 to 3 hours use of Photo booth</li>
                    </ul>
                </div>


            <div className="flex flex-col space-y-6">
                <div className="flex space-x-10">
                
                {/* Wedding Package C */}
                    <div className="h-auto mr-10 p-6 text-gray-800 transition-colors duration-200 shadow-md inner-shadow bg-[#A0B1B5] opacity-75 hover:bg-[#2F515B] hover:text-[#F2EFE8]">
                        <h3 className="mb-4 font-serif text-3xl font-semibold">Wedding Package C</h3>
                            <ul className="mt-4 mb-4 font-serif text-lg font-semibold">
                                <p>Rate: 200,000</p>
                                <p>Promo Rate: 180,000</p>
                            </ul>
                                <ul className="mt-4 mb-1 space-y-2 font-serif text-lg text-justify">
                                    <li> - 1 night room accommodation for 60pax with breakfast (excess pax add. 800/per head)</li>
                                </ul>
                    </div>
                </div>
        
            
                <div className="flex space-x-10">
                    {/* Wedding Package D */}
                    <div className="h-auto mr-10 p-6 text-gray-800 transition-colors duration-200 shadow-md inner-shadow bg-[#A0B1B5] opacity-75 hover:bg-[#2F515B] hover:text-[#F2EFE8]">
                        <h3 className="mb-4 font-serif text-3xl font-semibold">Wedding Package D</h3>
                            <ul className="mt-4 mb-4 font-serif text-lg font-semibold">
                                <p>Rate: 75,000</p>
                                <p>Promo Rate: 50,000</p>
                            </ul>
                                <ul className="mt-4 mb-1 space-y-2 font-serif text-lg text-justify">
                                    <li> - Pavillion Venue                                    </li>
                                    <li> - 50-80 pax</li>
                                    <li> - 4 to 6 hours use</li>
                                    <li> - With basic sound system & wi-fi access for all</li>
                                    <li> - 1 room accommodation for 2 pax</li>
                                </ul>
                    </div>
                </div>

                <div className="flex space-x-10">
                    {/* Wedding Package E */}
                    <div className="h-auto mr-10 p-6 text-gray-800 transition-colors duration-200 shadow-md inner-shadow bg-[#A0B1B5] opacity-75 hover:bg-[#2F515B] hover:text-[#F2EFE8]">
                        <h3 className="mb-4 font-serif text-3xl font-semibold">Wedding Package E</h3>
                            <ul className="mt-4 mb-4 font-serif text-lg font-semibold">
                                <p>Rate: 300,000</p>
                            </ul>
                                <ul className="mt-4 mb-1 space-y-2 font-serif text-lg text-justify">
                                    <li> - 2 nights accommodation for 60pax with free breakfast</li>
                                    <li> - Indoor or Outdoor Ceremony & Reception</li>
                                
                                </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* 2nd section */}
    
    <div className="mt-10 h-5/6 p-6 text-black transition-colors duration-200 shadow-md bg-[#CBA989] opacity-75">
        
        <div className="my-6 text-center">
            <h2 className="mb-5 font-serif text-4xl text-black">Special Offers</h2>
                <div className="w-[1330px] mx-auto mb-8 border-b-2 border-black"></div> 
                <div className="mt-4 mb-1 ml-10 mr-10 space-y-2 font-serif text-lg text-justify">
                    <p>Discover the hidden gem of Bani Hidden Paradise Resort! Whether you're planning a romantic prenup photoshoot, seeking a pet-friendly getaway, or craving a day of adventure with our scenic day tours, we have it all! Enjoy the tranquility and beauty of nature while creating lasting memories with your loved ones – furry friends included! Book your stay today and reserve your spot in paradise.  Don't miss out on our special offers, designed to make your experience unforgettable!</p>
                </div>
        </div>

        <ReserveNowButton></ReserveNowButton>


        <div className="flex flex-wrap content-center gap-6 mt-10 ml-10 mr-5">
                {/* Box 1 */}
                <div className="bg-[#C68A43] shadow-lg inner-shadow p-4 w-[308px] h-[380px] flex justify-center items-center">
                        <div className="w-[250px] h-[150px] ml-10 mr-10 mb-20 mt-[-100px]">
                            <Slideshow images={images2} />
                                <p className="mt-3 font-serif text-lg font-semibold text-center text-black">Let your fur babies be with YOU</p>
                                
                                <SeeMoreButton content={
                                    <div> 
                                    <p className="items-center justify-center font-serif text-2xl font-semibold">Let your fur babies be with YOU!</p>
                                    <p className="items-center justify-center mt-5 font-serif text-lg text-justify">We're now allowing to bring with you your Fur babies,  but not inside the Hotel/Resort. They will stay at the Kennels provided outside the Hotel/Resort (Free of Charge).</p>
                                    </div> } />
                        </div>
                </div>

                {/* Box 2 */}
                <div className="bg-[#C68A43] shadow-lg inner-shadow p-4 w-[308px] h-[380px] flex justify-center items-center">
                        <div className="w-[250px] h-[150px] ml-10 mr-10 mb-20 mt-[-100px]">
                            <Slideshow images={images3} />
                                <p className="mt-2 mb-16 font-serif text-lg font-semibold text-center text-black">Prenup / Pictorial Rate</p>
                                <SeeMoreButton content={
                                    <div> 
                                    <p className="items-center justify-center font-serif text-2xl font-semibold">Prenup / Pictorial Rate</p>
                                    <p className="justify-center mt-2 font-serif text-lg font-semibold">Morning to Sundown</p>
                                    <p className="justify-center mt-3 font-serif text-lg font-semibold">Package A</p>
                                    <p className="justify-center mt-3 font-serif text-lg font-semibold">Rate: 9,050.00php</p>
                                    <ul className="mt-4 mb-1 space-y-2 font-serif text-justify text-md">
                                    <li> - Only the 2 pax will stay overnight </li>
                                    <li> - HMUA/Photo Videographer</li>
                                    <li> - 400.00 per head</li>
                                    </ul>
                                    <p className="justify-center mt-3 font-serif text-lg font-semibold">Package B</p>
                                    <p className="justify-center mt-3 font-serif text-lg font-semibold">Rate:4,250.00 php</p>
                                    <ul className="mt-4 mb-1 space-y-2 font-serif text-justify text-md">
                                    <li> - KUBO ONLY</li>
                                    <li> - Only the Couple/Model ARE FREE</li>
                                    <li> - 400.00 php per head</li>
                                    <li> - HMUA / Photographer / Videographer</li>
                                    </ul>
                                    </div> } />
                        </div>
                </div>

                {/* Box 3 */}
                <div className="bg-[#C68A43] shadow-lg inner-shadow p-4 w-[308px] h-[380px] flex justify-center items-center">
                        <div className="w-[250px] h-[150px] ml-10 mr-10 mb-20 mt-[-100px]">
                            <Slideshow images={images4} />
                                <p className="mt-2 mb-16 font-serif text-lg font-semibold text-center text-black">Day Tour Rates</p>
                                <SeeMoreButton content={
                                    <div> 
                                    <p className="items-center justify-center font-serif text-2xl font-semibold">Day Tour Rates</p>
                                    <p className="justify-center mt-2 font-serif text-lg font-semibold">8am To Sun Down</p>
                                    <p className="justify-center mt-1 font-serif text-lg font-semibold">(Daytime Rate)</p>
                                    <p className="justify-center mt-5 font-serif text-lg font-semibold">Entrance Fee</p>
                                    <ul className="mt-4 mb-1 space-y-2 font-serif text-justify text-md">
                                    <li> - ₱250.00 - 6yrs old to 12 yrs old </li>
                                    <li> - ₱400.00- 13 - 59 yrs old </li>
                                    <li> - ₱300.00 - PWD / SEÑIOR</li>
                                    </ul>
                                    <p className="justify-center mt-5 font-serif text-lg font-semibold">Kubo Rental Fee</p>
                                    <ul className="mt-4 mb-1 space-y-2 font-serif text-justify text-md">
                                    <li> - ₱800.00 - Kubo for 8pax</li>
                                    </ul>
                                    <p className="justify-center mt-5 font-serif text-lg font-semibold">View Deck Unit 1 & 2</p>
                                    <ul className="mt-4 mb-1 space-y-2 font-serif text-justify text-md">
                                    <li> - ₱1,500.00 View Deck for 10pax</li>
                                    </ul>
                                    </div> } />
                        </div>
                </div>

                {/* Box 4 */}
                <div className="bg-[#C68A43] shadow-lg inner-shadow p-4 w-[308px] h-[380px] flex justify-center items-center">
                        <div className="w-[250px] h-[150px] ml-10 mr-10 mb-20 mt-[-100px]">
                            <Slideshow images={images5} />
                                <p className="mt-4 mb-16 font-serif text-lg font-semibold text-center text-black">On Going Promos</p>
                                <SeeMoreButton content={
                                    <div> 
                                    <p className="items-center justify-center font-serif text-2xl font-semibold">On Going Promos!</p>
                                    <p className="items-center justify-center mt-5 font-serif text-lg text-justify">Stay tuned on our facebook page "Bani-Hidden Paradise Beach Resort" for exclusive offers that promise to elevate your experience at Bani Hidden Paradise Resort! Whether you’re planning a romantic getaway or an adventurous family retreat, our special packages are designed to create unforgettable memories. Don’t miss out on the chance to indulge in paradise—your dream escape awaits!</p>
                                    </div> } />
                        </div>
                </div>
        </div>
    </div>

    </>
    )
}
