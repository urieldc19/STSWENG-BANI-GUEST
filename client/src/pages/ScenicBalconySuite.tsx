import { SlideshowRoom } from '../components/SlideshowRoom';
import '../components/styles.css';
import { Link } from 'react-router-dom';


const coverImage = './images/room-cover/Scenic.png';

const slideshowImages = [
  './images/scenic-balcony/scenic-1.png',
  './images/scenic-balcony/scenic-2.png',
  './images/scenic-balcony/scenic-3.png',
];

const ScenicBalconySuite = () => {
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ fontFamily: 'Inria Serif' }}>
      <img src={coverImage} alt="Scenic Balcony Suite Cover" className="w-full h-auto object-cover" />

      <div className="bg-[#2F515B]/80 py-4 w-full">
        <div className="text-center text-white">
          <img src="/images/logo.png" alt="Logo of Bani Resort" className="mx-auto mb-2 w-24 h-24" />
          <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row">
        <div className="flex-1 pr-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Where Comfort Meets Nature!</h2>
        </div>
        <div className="flex-1 text-left">
          <p className="text-lg md:text-xl">
            <br /><br /><br /><br /><br />
            Experience breathtaking views and ultimate comfort in our Scenic Balcony Suite. Located on the second floor, this spacious suite is perfect for families or groups seeking a relaxing retreat. With modern amenities and a private balcony overlooking the mountains, it's an ideal setting for creating unforgettable memories together.
          </p>
        </div>
      </section>

      <SlideshowRoom roomId="Room 7"></SlideshowRoom>

      <div className="text-center mb-4">
        <p className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>Room 7: Scenic Balcony Suite</p>
        <p className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>Location: Second Floor | ₱10,000.00</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-6 mx-auto max-w-5xl">
        <div className="w-full md:w-1/2 p-4 bg-[#A0B1B5]/50 rounded-md shadow-md mb-4 md:mr-2 text-left">
          <h3 className="text-2xl font-semibold mb-2">Features</h3>
          <ul className="list-disc list-outside pl-5 text-lg mb-4">
            <li>Bed Configuration: 1 queen-size bed + 1 queen-size and single bed bunk</li>
            <li>Bathroom: Private toilet with heater</li>
            <li>Entertainment: Cignal Cable TV</li>
            <li>Connectivity: Own internet router</li>
            <li>Refrigeration: Personal refrigerator</li>
            <li>Outdoor Space: Private balcony with mountain view</li>
          </ul>
          <p className="text-lg font-semibold">Pricing:</p>
          <p>₱10,000.00 for 5 pax</p>
          <p className="mt-2">+₱800.00 per extra person</p>
          <p className="mt-2">Maximum Capacity: 9 pax</p>
          <p className="text-sm text-gray-600 mt-1">*Children aged 4 years and older are included in the head count.</p>
        </div>

        <div className="w-full md:w-1/2 p-4 bg-[#A0B1B5]/50 rounded-md shadow-md mb-4 md:ml-2 text-left">
          <h3 className="text-2xl font-semibold mb-2">Inclusions</h3>
          <ul className="list-disc list-outside pl-5 text-lg mb-4">
            <li>Welcome drink upon arrival</li>
            <li>Free breakfast (6-9 AM)</li>
            <li>Unlimited coffee</li>
            <li>Towels & toiletries</li>
            <li>Access to pool & beach</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Policies</h3>
          <p className="text-lg text-gray-700">No outside foods and drinks allowed; only grill foods are permitted.</p>
        </div>
      </div>

      <div className="flex justify-center mt-6 mb-6">
  <Link to="/reservations">
    <button className="bg-[#966732] text-white px-8 py-4 rounded text-lg font-semibold transition-transform duration-300 ease-in-out transform hover:bg-[#6b4c1e] hover:scale-105">
      Book Now
    </button>
  </Link>
</div>
    </div>
  );
};

export default ScenicBalconySuite;
