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

      <div className="w-full text-center text-white bg-[#2F515B]/55 py-4 -mt-4">
        <img src="/images/logo.png" alt="Logo" className="mx-auto mb-2 w-24 h-24" />
        <span className="text-lg md:text-xl">Bani, Pangasinan | Philippines</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> 
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <p className="text-center text-lg md:text-xl mb-6">
          To help you plan your visit, we’ve compiled answers to some of the most frequently asked questions. From check-in times and payment options to pet policies and resort amenities, our FAQs provide all the essential information you need to know. If you have any additional questions, feel free to reach out to us directly—we’re here to help!
        </p>

        <FAQDropdown />
      </div>
    </div>
  );
};

export default FAQs;
