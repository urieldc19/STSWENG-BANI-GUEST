import { SlideshowRoom } from '../components/SlideshowRoom';
import '../components/styles.css';
import { Link } from 'react-router-dom';

const coverImage = './images/room-cover/Luxe.png';

const slideshowImages = [
  './images/luxe-suite/luxe-1.png',
  './images/luxe-suite/luxe-2.png',
  './images/luxe-suite/luxe-3.png',
  './images/luxe-suite/luxe-4.png',
];

const LuxeSuite = () => {
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ fontFamily: 'Inria Serif' }}>
      <img src={coverImage} alt="Luxe Suite Cover" className="w-full h-auto object-cover" />

      <div className="bg-[#2F515B]/80 py-4 w-full">
        <div className="text-center text-white">
          <img src="/images/logo.png" alt="Logo of Bani Resort" className="mx-auto mb-2 w-24 h-24" />
          <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row">
        <div className="flex-1 pr-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience Elegance in the Luxe Suite!</h2>
        </div>
        <div className="flex-1 text-left">
          <p className="text-lg md:text-xl">
            <br /><br /><br /><br /><br />The Luxe Suite is a spacious 1-bedroom suite located on the ground floor, designed for ultimate comfort and style. It features a queen-size bed and two king-size beds, providing ample space for families and small groups. Enjoy entertainment on a 60-inch Cignal TV and stay connected with your own internet router. The luxurious bathroom includes a relaxing bathtub and heater, while a walk-in closet and cozy sofa enhance your comfort. Step outside to your exclusive veranda, where breathtaking views of the mountains, sea, and pool create the perfect backdrop for your getaway.
          </p>
        </div>
      </section>

      <SlideshowRoom roomId="Room 9"></SlideshowRoom>

      <div className="text-center mb-4">
        <p className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>Room 9: Luxe Suite</p>
        <p className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>Location: Ground Floor | ₱13,500.00</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-6 mx-auto max-w-5xl">
        <div className="w-full md:w-1/2 p-4 bg-[#A0B1B5]/50 rounded-md shadow-md mb-4 md:mr-2 text-left">
          <h3 className="text-2xl font-semibold mb-2">Features</h3>
          <ul className="list-disc list-outside pl-5 text-lg mb-4">
            <li>Bed Configuration: 1 queen-size bed and 2 king-size beds</li>
            <li>Entertainment: 60-inch Cignal TV</li>
            <li>Connectivity: Personal internet router</li>
            <li>Bathroom: Toilet with bathtub and heater</li>
            <li>Storage: Walk-in closet</li>
            <li>Seating: Cozy sofa</li>
            <li>Refrigeration: Personal refrigerator</li>
            <li>Outdoor Space: Exclusive veranda with stunning views</li>
            <li>Access: Two separate door entries</li>
          </ul>
          <p className="text-lg font-semibold">Pricing:</p>
          <p>₱13,500.00 for 6 pax</p>
          <p className="mt-2">+₱800.00 per extra person</p>
          <p className="mt-2">Maximum Capacity: 8 pax</p>
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
          <button 
            className="bg-[#966732] text-white px-8 py-4 rounded text-lg font-semibold transition-transform duration-300 ease-in-out transform hover:bg-[#6b4c1e] hover:scale-105" 
            aria-label="Book the Luxe Suite"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LuxeSuite;
