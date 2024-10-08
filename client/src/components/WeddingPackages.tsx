import { useState } from 'react';
import { FlipCard } from "../components/flipcard";
import "../components/flipcard.css";

const WeddingPackagesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Sample data for the wedding packages
    const packages = [
        {
            title: 'Wedding Package A',
            rate: '500,000',
            promoRate: '450,000',
            details: [
                '3days and 2nights accommodation for 60 pax with free breakfast (excess pax add. 800/per head)',
                'Outdoor or Indoor Venue w/ basic Sound System',
                'Basic Style with Tiffany Chair & Presidential Table',
                'Free Photo shoot w/ 1 Changing room for whole day',
                '100 pax food catering after ceremony',
                'Free Food Tasting for 2-3 persons',
                'Grazing Table',
                '2 to 3 hours use of Photo booth',
            ],
            image: './images/specialoffers/image1.png',
        },
        {
            title: 'Wedding Package B',
            rate: '380,000',
            promoRate: '350,000',
            details: [
                '1 night accommodation for 60 pax with free breakfast (excess pax add. 800/per head)',
                'Indoor Venue w/ basic Sound System',
                'Basic Style with Tiffany Chair & Presidential Table',
                'Free Photo shoot w/ 1 Changing room for whole day',
                '100 pax food catering after ceremony',
                'Free Food Tasting for 2-3 persons',
                'Grazing Table',
                '2 to 3 hours use of Photo booth',
            ],
            image: './images/specialoffers/image2.png',
        },
        {
            title: 'Wedding Package C',
            rate: '200,000',
            promoRate: '180,000',
            details: [
                '1 night room accommodation for 60 pax with breakfast ( excess pax add. 800/per head)',
            ],
            image: './images/specialoffers/image3.png',
        },
        {
            title: 'Wedding Package D',
            rate: '75,000',
            promoRate: '50,000',
            details: [
                'Pavillion Venue',
                '50 to 80 pax',
                '4 to 6 hours of use',
                'With basic sound sysrem & wi-fi access for all',
                '1 room accommodation for 2 pax',

            ],
            image: './images/specialoffers/image6.png',
        },
        {
            title: 'Wedding Package E',
            rate: '300,000',
            details: [
                '2 nights accommodation for 60pax with free breakfast',
                'Indoor or Outdoor Ceremony & Reception',
            ],
            image: './images/specialoffers/image5.png',
        },
        
    ];

    // For previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? packages.length - 1 : prevIndex - 1
        );
    };

    // For next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === packages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative py-10 carousel-container">
            <div className="flex justify-center overflow-hidden">
                {/* for the whole carousel */}
                {[...Array(3)].map((_, i) => {
                    const actualIndex = (currentIndex + i - 1 + packages.length) % packages.length;

                    
                    const isCurrent = i === 1; // current image
                    const cardClass = `min-w-[300px] max-w-[400px] h-[500px] flex flex-col items-center justify-center rounded-xl p-6 text-white transition-transform duration-300 ease-in-out ${
                        isCurrent ? 'relative z-10 shadow-lg scale-100' : 'scale-90 z-0 opacity-60'
                    }`;

                    return (
                        <div key={i} className={`flex justify-center ${isCurrent ? 'scale-100 z-10' : 'scale-90 z-0'}`}>
                            <FlipCard
                                frontContent={
                                    <div
                                        className={cardClass}
                                        style={{ backgroundImage: `url(${packages[actualIndex].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    >
                                        <h3 className="mb-4 font-serif text-3xl font-bold">{packages[actualIndex].title}</h3>
                                        <ul className="mt-4 mb-4 font-serif text-lg font-semibold">
                                            <p>Rate: {packages[actualIndex].rate}</p>
                                            <p>Promo Rate: {packages[actualIndex].promoRate}</p>
                                        </ul>
                                        {/* More info button */}
                                        <button className="px-2 py-1 mt-4 text-white bg-black bg-opacity-75 rounded">
                                            More Info
                                        </button>
                                    </div>
                                }
                                backContent={
                                    isCurrent ? (
                                        <div className="p-4 text-[#2F515B] bg-white rounded-xl">
                                            <ul className="space-y-2 text-lg text-justify">
                                                {packages[actualIndex].details.map((detail, detailIndex) => (
                                                    <li key={detailIndex}>- {detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="p-4 text-transparent bg-transparent rounded-xl">
                                            {/* placeholdeer */}
                                        </div>
                                    )
                                }
                            
                            />
                        </div>
                    );
                })}
            </div>

            {/* Carousel Controls */}
            <button
                onClick={handlePrev}
                className="absolute left-0 px-4 py-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 top-1/2 hover:bg-opacity-75"
            >
                Prev
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 px-4 py-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 top-1/2 hover:bg-opacity-75"
            >
                Next
            </button>
        </div>
    );
};

export default WeddingPackagesCarousel;