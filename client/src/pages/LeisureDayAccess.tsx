import { Slideshow } from '../components/Slideshow';
import '../components/styles.css';

const coverImage = './images/room-cover/Leisure.png';

const slideshowImages = [
  './images/leisure-day-access/leisure-1.png',
  './images/leisure-day-access/leisure-2.png',
  './images/leisure-day-access/leisure-3.png',
  './images/leisure-day-access/leisure-4.png',
];

const LeisureDayAccess = () => {
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ fontFamily: 'Inria Serif' }}>
      <img src={coverImage} alt="Leisure Day Access Cover" className="w-full h-auto object-cover" />

      <div className="bg-[#2F515B]/80 py-4 w-full">
        <div className="text-center text-white">
          <img src="/images/logo.png" alt="Logo of Bani Resort" className="mx-auto mb-2 w-24 h-24" />
          <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row">
        <div className="flex-1 pr-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Day in Paradise!</h2>
        </div>
        <div className="flex-1 text-left">
          <p className="text-lg md:text-xl">
          <br /><br /><br /><br /><br />  Experience a day of relaxation and fun with our Leisure Day Access Pass! Perfect for families and individuals, this pass grants you entry to our stunning pool and beach facilities from 8 AM to 6 PM. Whether you’re looking to soak up the sun, take a refreshing dip, or enjoy a leisurely stroll in our garden areas, there's something for everyone. With affordable entrance fees for all ages, you can create wonderful memories while enjoying the beauty of our resort. Embrace the outdoors and unwind in style with your loved ones!
          </p>
        </div>
      </section>

      <div className="flex justify-center mb-6">
        <div className="w-full max-w-[1441px] h-[640px]">
          <Slideshow images={slideshowImages} />
        </div>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl" style={{ fontSize: '25px' }}>Leisure Day Access</h2>
        <p className="text-lg md:text-xl">Hours of Operation: 8 AM to 6 PM</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-6 mx-auto max-w-5xl">
        <div className="w-full md:w-1/2 p-4 bg-[#A0B1B5]/50 rounded-md shadow-md mb-4 md:mr-2 text-left">
          <h3 className="text-2xl font-semibold mb-2">Entrance Fees</h3>
          <ul className="list-disc list-outside pl-5 text-lg mb-4">
            <li>Children (4 - 12 years old): <strong>₱250.00</strong></li>
                <br />
            <li>Adults (13 - 59 years old): <strong>₱400.00</strong></li>
                 <br />
            <li>Seniors/PWD: <strong>₱320.00</strong></li>
                </ul>

        </div>

        <div className="w-full md:w-1/2 p-4 bg-[#A0B1B5]/50 rounded-md shadow-md mb-4 md:ml-2 text-left">
          <h3 className="text-2xl font-semibold mb-2">Access Includes</h3>
          <p className="text-lg mb-4">Pool and beach facilities</p>

          <h3 className="text-2xl font-semibold mb-2">Kubo Rate</h3>
          <p className="text-lg mb-4">Kubo Rental: ₱800.00</p>

          <h3 className="text-2xl font-semibold mb-2">Designated Areas</h3>
          <ul className="list-disc list-outside pl-5 text-lg mb-4">
            <li>Pool Area: Pools 1, 2, & 3</li>
            <li>Garden Area: Garden 4 & 5</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button className="bg-[#966732] text-white px-8 py-4 rounded text-lg font-semibold transition-transform duration-300 ease-in-out transform hover:bg-[#6b4c1e] hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default LeisureDayAccess;
