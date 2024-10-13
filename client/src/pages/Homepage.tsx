import '../components/styles.css'; 
import { Slideshow } from '../components/Slideshow'; 
import { Link } from 'react-router-dom'; /*npm install react-router-dom*/


export function Homepage() {
  const images = [
    '/images/cover/about-us-1.jpg', 
    '/images/cover/about-us-2.png',
    '/images/cover/about-us-3.jpg',
    '/images/cover/about-us-4.jpg'
  ];

  const locationImages = [
    '/images/about-us/slide-1.jpg', 
    '/images/about-us/slide-2.jpg',
    '/images/about-us/slide-3.jpg',
    '/images/about-us/slide-4.jpg'
  ];

  return (
    <div className="flex flex-col w-full" style={{ fontFamily: 'Inria Serif' }}>

      <Slideshow images={images} />

      <div className="bg-[#2F515B]/55 py-4">
        <div className="text-center text-white">
          <img src="/images/logo.png" alt="Logo" className="mx-auto mb-2 w-24 h-24" />
          <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row">
        <div className="flex-1 pr-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Where the Mountains meet the Sea.</h2>
        </div>
        <div className="flex-1 text-left">
          <p className="text-lg md:text-xl">
            <br /><br /><br /><br /><br /> Escape to a haven of relaxation and adventure at our resort, where comfort meets the beauty of nature. 
            Nestled along the shores overlooking the stunning West Philippine Sea, our resort offers an array of 
            amenities and experiences to make your stay unforgettable.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 px-5" style={{ backgroundColor: '#A0B1B5' }}>

        <div className="flex flex-col items-center border-r-2 border-gray-300 pr-5">
          <img
            src="/images/about-us/mission.png"
            alt="Mission"
            className="w-full h-auto max-w-[636px] max-h-[349px] object-cover mb-2"  
          />
          <h2 className="text-5xl font-semibold mb-1"><br />MISSION</h2>  
          <p className="text-center text-lg text-gray-700 max-w-lg">
            To provide all of our guests a memorable experience from the great sceneries, humble facilities, 
            and exceptional services.
          </p>
        </div>

        <div className="flex flex-col items-center pl-5">
          <img
            src="/images/about-us/vision.jpg"
            alt="Vision"
            className="w-full h-auto max-w-[636px] max-h-[349px] object-cover mb-2"
          />
          <h2 className="text-5xl font-semibold mb-1"><br /> VISION</h2>  
          <p className="text-center text-lg text-gray-700 max-w-lg mb-2">  
            To be one of the chosen local destinations that will satisfy each and every guest's craving for relaxation.
          </p>
        </div>
      </div>


      <div className="text-center py-10 bg-white">
        <h2 className="text-5xl font-semibold mb-4"><br /><br />A Fantastic Location Awaits You at Our Resort!</h2>
        <p className="text-lg text-gray-600 max-w-5xl mx-auto">
        <br />Located along the pristine coastline, our resort offers more than just a place to stay – it's a full experience of 
          relaxation, adventure, and natural beauty.<br /><br /><br /><br />
        </p>
          </div>

      <Slideshow images={locationImages} />

      <div className="text-center py-10 bg-[#f6f3ec]">
  <Link to="/faqs">
    <button 
      className="bg-[#ceb186] text-white py-4 px-12 rounded-full hover:bg-[#b89b6e]" 
      style={{ fontSize: '24px' }}>
      FAQs
    </button>
  </Link>
</div>
    </div>
  );
}
