import { Slideshow } from '../components/Slideshow';
import '../components/styles.css';
import { Link } from 'react-router-dom';

const coverImage = './images/room-cover/Treetop.png';

const slideshowImages = [
  './images/treetop-haven/treetop-1.png',
  './images/treetop-haven/treetop-2.png',
  './images/treetop-haven/treetop-3.png',
  './images/treetop-haven/treetop-4.png',
];

const TreetopHaven = () => {
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ fontFamily: 'Inria Serif' }}>
      <img src={coverImage} alt="Treetop Haven Cover" className="w-full h-auto object-cover" />

      <div className="bg-[#2F515B]/80 py-4 w-full">
        <div className="text-center text-white">
          <img src="/images/logo.png" alt="Logo of Bani Resort" className="mx-auto mb-2 w-24 h-24" />
          <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row">
        <div className="flex-1 pr-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Serene Escape in Nature!</h2>
        </div>
        <div className="flex-1 text-left">
          <p className="text-lg md:text-xl">
            <br /><br /><br /><br /><br />Located among the trees, Treetop Haven offers a unique overnight experience that immerses you in the beauty of nature. This charming hanging kubo is the perfect retreat for families or small groups seeking tranquility and adventure. Enjoy the fresh air and lush surroundings as you relax in this cozy space, designed to foster connection and create lasting memories. With easy access to the pool and beach, you can spend your days soaking up the sun and your evenings under the stars. Experience the essence of nature without sacrificing comfort at Treetop Haven!
          </p>
        </div>
      </section>

      <div className="flex justify-center mb-6">
        <div className="w-full max-w-[1441px] h-[640px]">
          <Slideshow images={slideshowImages} />
        </div>
      </div>

      <div className="text-center mb-4">
        <p className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>Treetop Haven</p>
        <p className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>₱5,000.00</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-6 mx-auto max-w-5xl">
        <div className="w-full md:w-1/2 p-4 bg-[#A0B1B5]/50 rounded-md shadow-md mb-4 md:mr-2 text-left">
          <h3 className="text-2xl font-semibold mb-2">Features</h3>
          <ul className="list-disc list-outside pl-5 text-lg mb-4">
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>
          <p className="text-lg font-semibold">Pricing:</p>
          <p>₱5,000.00 for 5 pax</p>
          <p className="mt-2">Maximum Capacity: 5 pax</p>
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
            aria-label="Book the Treetop Haven"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TreetopHaven;
