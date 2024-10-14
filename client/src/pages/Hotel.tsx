import '../components/styles.css'; 
import { Slideshow } from '../components/Slideshow'; 
import { FlipCard } from '../components/flipcard'; 

export function Hotel() {
  const images = [
    './images/hotel/hotel_slide1.png',
    './images/hotel/hotel_slide2.jpg',
    './images/hotel/hotel_slide3.png',
    './images/hotel/hotel_slide4.jpg'
  ];

  const footerImages = [
    './images/hotel/hotel_slide5.jpg',
    './images/hotel/hotel_slide6.jpg',
    './images/hotel/hotel_slide7.jpg',
    './images/hotel/hotel_slide8.jpg',
    './images/hotel/hotel_slide9.jpg',
    './images/hotel/hotel_slide10.png',
    './images/hotel/hotel_slide11.jpg',
    './images/hotel/hotel_slide12.jpg',
  ];

  return (
    <div className="flex flex-col w-screen" style={{ fontFamily: 'Inria Serif' }}>
      <Slideshow images={images} />

      <div className="bg-[#2F515B]/55 py-4">
        <div className="text-center text-white">
          <img src="/images/logo.png" alt="Logo" className="mx-auto mb-2 w-24 h-24" />
          <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row">
        <div className="flex-1 pr-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience Unmatched <br /> Comfort at Our Resort</h2>
        </div>
        <div className="flex-1 text-left">
          <p className="text-lg md:text-xl">
          <br /><br /><br /><br /><br /> Welcome to a hideaway where comfort meets convenience. Our fully air-conditioned rooms provide the perfect escape, each complete with its own private bathroom to ensure a relaxing and enjoyable stay. Whether you're here for a weekend getaway or a longer vacation, we have everything you need for a comfortable stay.
          </p>
        </div>
      </section>

      <Slideshow images={footerImages} />

      <div className="mt-1 bg-[#2F515B]/50 py-5 text-center"> 
        <h3 className="text-white text-4xl font-bold">AMENITIES</h3>
      </div>

      <div className="text-center my-4">
        <p className="text-lg md:text-xl">
          At our resort, we aim to provide a seamless blend of relaxation, recreation, and comfort with a variety of amenities that cater to your every need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto my-8 mb-20 justify-center">
        <FlipCard
          frontContent={<img src="./images/flipcard/pool_front.png" alt="Pool" className="w-full h-full object-cover" />}
          backContent={<img src="./images/flipcard/pool_back.png" alt="Pool Back" className="w-full h-full object-cover" />}
        />
        <FlipCard
          frontContent={<img src="./images/flipcard/function_front.png" alt="Function Hall" className="w-full h-full object-cover" />}
          backContent={<img src="./images/flipcard/function_back.png" alt="Function Hall Back" className="w-full h-full object-cover" />}
        />
        <FlipCard
          frontContent={<img src="./images/flipcard/dining_front.png" alt="Dining" className="w-full h-full object-cover" />}
          backContent={<img src="./images/flipcard/dining_back.png" alt="Dining Back" className="w-full h-full object-cover" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto my-8 mb-20 justify-center">
        <FlipCard
          frontContent={<img src="./images/flipcard/room_front.png" alt="Room" className="w-full h-full object-cover" />}
          backContent={<img src="./images/flipcard/room_back.png" alt="Room Back" className="w-full h-full object-cover" />}
        />
        <FlipCard
          frontContent={<img src="./images/flipcard/beach_front.png" alt="Beach" className="w-full h-full object-cover" />}
          backContent={<img src="./images/flipcard/beach_back.png" alt="Beach Back" className="w-full h-full object-cover" />}
        />
        <FlipCard
          frontContent={<img src="./images/flipcard/kennels_front.png" alt="Kennels" className="w-full h-full object-cover" />}
          backContent={<img src="./images/flipcard/kennels_back.png" alt="Kennels Back" className="w-full h-full object-cover" />}
        />
      </div>

      <div className="w-full bg-[#2F515B] flex justify-center items-center py-10">
        <div className="max-w-5xl w-full bg-white p-5 rounded-lg shadow-lg">
          <h2 className="font-bold text-2xl text-black">Free Wi-Fi:</h2>
          <p className="text-lg text-black mb-4">
            We offer complimentary Wi-Fi throughout the resort, so you can stay connected whether you’re relaxing by the pool or in your room.
          </p>

          <h2 className="font-bold text-2xl text-black">Payment Information:</h2>
          <ul className="text-lg text-black mb-4">
            <li><strong>• Cash Only:</strong> Please note that we accept cash payments only. Debit or credit cards are currently not accepted.</li>
            <li><strong>• Reservation Policy:</strong> A 50% reservation fee is required to secure your booking. The remaining balance is due upon arrival.</li>
          </ul>

          <h2 className="font-bold text-2xl text-black">Important Notes:</h2>
          <p className="text-lg text-black">
            The road leading to the resort is unpaved, so please plan your journey accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}
