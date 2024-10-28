import { Slideshow } from '../components/Slideshow'; 
import '../components/styles.css'; 

const images = [
  './images/loc/1.png',
  './images/loc/2.png',
  './images/loc/3.png',
  './images/loc/4.png'
];

export function Locations() {
    return (
      <div className="flex flex-col w-full" style={{ fontFamily: 'Inria Serif' }}>
        <Slideshow images={images} />

        <div className="bg-[#2F515B]/80 py-4">
          <div className="text-center text-white">
            <img src="/images/logo.png" alt="Logo" className="mx-auto mb-2 w-24 h-24" />
            <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
          </div>
        </div>

        <section className="max-w-6xl mx-auto my-16 px-5 flex flex-col md:flex-row items-center">
          <div className="flex-1 pr-10 text-left">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-[#A88565] drop-shadow-md">Relax, Unwind, Enjoy!</h2>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed">
              Welcome to <strong>Bani Hidden Paradise Beach Resort</strong>, a hidden gem nestled in the beautiful landscape of Bani. 
              Our resort features fully air-conditioned rooms with private bathrooms, along with stunning pools that overlook the breathtaking West Philippine Sea.
            </p>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed">
              Experience the serenity of nature, indulge in luxurious amenities, and create unforgettable memories against the backdrop of picturesque sunsets.
            </p>
          </div>
        </section>

        <div className="bg-[#D9BEA1] shadow-2xl rounded-lg py-10 px-5 mb-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center p-8 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-5xl font-bold mb-6 text-left text-[#2F515B]">Get in Touch <br /><br /></h2>
              <p className="text-xl text-left mb-4">
                <strong>Email:</strong> 
                <a href="mailto:contact@banihiddenparadise.com" className="text-blue-600 hover:underline">
                  contact@banihiddenparadise.com
                </a>
              </p>
              <p className="text-xl text-left mb-4">
                <strong>Phone:</strong> <br />
                <span>0969 - 304 - 4735</span> <br />
                <span>0936 - 904 - 2756</span>
              </p>
              <p className="text-xl text-left mb-4">
                <strong>Address:</strong> <br />
                <span>Dacap Sur Sitio Tubong, Bani Pangasinan</span>
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31153.100493221536!2d120.01887603311549!3d16.02053850168412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b63b9c80a6fb9f%3A0x29dc0b7d7a54548f!2sDacap%20Sur%2C%20Bani%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1632928592158!5m2!1sen!2sph"
                  width="100%"
                  height="500"
                  style={{ border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
