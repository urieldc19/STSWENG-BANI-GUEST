import { Slideshow } from '../components/Slideshow';
import '../components/styles.css';
import { Link } from 'react-router-dom';

const coverImage = './images/room-cover/Lovers.png';

const slideshowImages = [
  './images/lovers-hideaway/lovers-1.png',
  './images/lovers-hideaway/lovers-2.png',
  './images/lovers-hideaway/lovers-3.png',
  './images/lovers-hideaway/lovers-4.png',
];

const LoversHideaway = () => {
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ fontFamily: 'Inria Serif' }}>
      <img src={coverImage} alt="Lover's Hideaway Cover" className="w-full h-auto object-cover" />

      <div className="bg-[#2F515B]/80 py-4 w-full">
        <div className="text-center text-white">
          <img src="/images/logo.png" alt="Logo of Bani Resort" className="mx-auto mb-2 w-24 h-24" />
          <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row">
        <div className="flex-1 pr-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Romantic Escape by the Beach!</h2>
        </div>
        <div className="flex-1 text-left">
          <p className="text-lg md:text-xl">
            <br /><br /><br /><br /><br />
            The Lover’s Hideaway offers a cozy and intimate space, perfect for couples seeking a relaxing escape. Located in a serene setting, this room provides all the essentials for a comfortable stay, complete with modern amenities and access to the pool and beach. Whether you're here for a romantic getaway or simply to unwind, the Couple Room is your ideal retreat.
          </p>
        </div>
      </section>

      <div className="flex justify-center mb-6">
        <div className="w-full max-w-[1441px] h-[640px]">
          <Slideshow images={slideshowImages} />
        </div>
      </div>

      <div className="text-center mb-4">
        <p className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>Rooms 4, 5, & 6: Lover’s Hideaway</p>
        <p className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>₱4,200.00</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-6 mx-auto max-w-5xl">
        <div className="w-full md:w-1/2 p-4 bg-[#A0B1B5]/50 rounded-md shadow-md mb-4 md:mr-2 text-left">
          <h3 className="text-2xl font-semibold mb-2">Features</h3>
          <ul className="list-disc list-outside pl-5 text-lg mb-4">
            <li>Bed Configuration: 1 bed for couples</li>
            <li>Bathroom: Private toilet</li>
            <li>Entertainment: Cignal Cable TV</li>
            <li>Connectivity: Own internet router</li>
          </ul>
          <p className="text-lg font-semibold">Pricing:</p>
          <p>₱4,200.00 for 2 pax</p>
          <p className="mt-2">+₱800.00 per extra person</p>
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

export default LoversHideaway;
