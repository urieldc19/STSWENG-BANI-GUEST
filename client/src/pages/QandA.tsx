import React from 'react';
import FAQDropdown from '../components/FAQDropdown'; 
import { Slideshow } from '../components/Slideshow'; 
import '../components/styles.css'; 

const images = [
  './images/faqs/faq_1.png',
  './images/faqs/faq_2.jpg',
  './images/faqs/faq_3.jpg',
  './images/faqs/faq_4.png'
];

const FAQs: React.FC = () => {
  return (
    <div className="p-0">
      <Slideshow images={images} />

      <div className="w-full text-center text-white bg-[#2F515B]/55 py-2 -mt-4"> {/* Adjust negative margin */}
        <img src="/images/logo.png" alt="Logo" className="mx-auto mb-2 w-24 h-24" />
        <span className="text-[25px]">Bani, Pangasinan | Philippines</span>
      </div>

      <div className="container mx-auto p-4"> 
        <h2 className="text-center text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <p className="text-center text-lg mb-6">
          To help you plan your visit, we’ve compiled answers to some of the most frequently asked questions. From check-in times and payment options to pet policies and resort amenities, our FAQs provide all the essential information you need to know. If you have any additional questions, feel free to reach out to us directly—we’re here to help!
        </p>

        <FAQDropdown />
      </div>
    </div>
  );
};

export default FAQs;
