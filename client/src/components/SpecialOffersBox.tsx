import SeeMoreButton from "./SeeMoreButton";
import { Slideshow } from "./Slideshow";

const InfoBox = ({images, title, content } : {images: string[], title: string, content: JSX.Element}) => {
    return (
        <div className={`bg-[#CBA989] shadow-lg p-4 w-[308px] h-[380px] flex justify-center items-center`}>
            <div className="w-[250px] h-[150px] ml-10 mr-10 mb-20 mt-[-100px]">
                <Slideshow images={images} />
                <p className="mt-3 font-serif text-lg font-bold text-left text-black">{title}</p>
                <SeeMoreButton content={content} />
            </div>
        </div>
    );
};

const SpecialOffersBox = () => {

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

    const boxesData = [
        {
            images: images2,
            title: "Let your fur baby be with you",
            content: (
                <div>
                    <p className="items-center justify-center font-serif text-2xl font-semibold">Let your fur babies be with YOU!</p>
                    <p className="items-center justify-center mt-5 font-serif text-lg text-justify">We're now allowing to bring with you your Fur babies, but not inside the Hotel/Resort. They will stay at the Kennels provided outside the Hotel/Resort (Free of Charge).</p>
                </div>
            )
        },
        {
            images: images3,
            title: "Prenup / Pictorial Rate",
            content: (
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
                    <p className="justify-center mt-3 font-serif text-lg font-semibold">Rate: 4,250.00 php</p>
                    <ul className="mt-4 mb-1 space-y-2 font-serif text-justify text-md">
                        <li> - KUBO ONLY</li>
                        <li> - Only the Couple/Model ARE FREE</li>
                        <li> - 400.00 php per head</li>
                        <li> - HMUA / Photographer / Videographer</li>
                    </ul>
                </div>
            )
        },
        {
            images: images4,
            title: "Day Tour Rates",
            content: (
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
                </div>
            )
        },
        {
            images: images5,
            title: "On Going Promos",
            content: (
                <div>
                    <p className="items-center justify-center font-serif text-2xl font-semibold">On Going Promos!</p>
                    <p className="items-center justify-center mt-5 font-serif text-lg text-justify">Stay tuned on our facebook page "Bani-Hidden Paradise Beach Resort" for exclusive offers that promise to elevate your experience at Bani Hidden Paradise Resort! Whether you’re planning a romantic getaway or an adventurous family retreat, our special packages are designed to create unforgettable memories. Don’t miss out on the chance to indulge in paradise—your dream escape awaits!</p>
                </div>
            )
        }
    ];

    return (
        <div className="flex flex-wrap content-center gap-6 mt-10 ml-10 mr-5">
            {boxesData.map((box, index) => (
                <InfoBox
                    key={index}
                    images={box.images}
                    title={box.title}
                    content={box.content}
                />
            ))}
        </div>
    );
};

export default SpecialOffersBox

