
import { Link } from "react-router-dom";
import { Image } from '@mantine/core';

export function Footer() {
  
  function FooterLink({ link, title }: { link: string; title: string }) {
    return (
      <Link
        to={link}
        className="text-white hover:text-orange-300 hover:underline hover:underline-offset-8"
        style={{ fontSize: '1.25rem', fontFamily: 'Inria Serif' }} 
      >
        {title}
      </Link>
    );
  }

  return (
    <div className="flex flex-col w-full" style={{ fontFamily: 'Inria Serif' }}>
      <div style={{ backgroundColor: '#D9BEA1', height: '10px' }}></div>
      <div className="bg-tealblue text-white py-8 flex flex-col md:flex-row justify-center items-start gap-10 px-4">
        <div className="flex flex-col items-start mb-4">
          <Image h={100} src='./images/navbar-logo.png' />
          <p className="text-lg md:text-xl">Dacap Sur, Bani,<br /> Philippines, 2407</p>
          <p className="text-lg md:text-xl">contact@banihiddenparadise.com</p>
        </div>
        <div className="flex flex-col items-start space-y-4 px-10 mb-4">
          <FooterLink link="/hotel" title="THE HOTEL" />
          <FooterLink link="/special-offers" title="SPECIAL OFFERS" />
          <FooterLink link="/faqs" title="FAQs" />
          <FooterLink link="/terms-and-conditions" title="TERMS AND CONDITIONS" />
        </div>
        <div className="flex flex-col items-start mb-4">
          <p className="text-lg md:text-xl">
            Be the first to discover exclusive deals.<br />
            <strong>Subscribe now!</strong>
          </p>
          <form className="flex mt-2 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none h-[40px] flex-1" 
              style={{ fontSize: '1rem', color: 'black' }}
            />
            <button
              type="submit"
              className="bg-[#A88565] text-white px-4 py-2 rounded-r-md h-[40px] ml-2"
              style={{ fontSize: '1rem' }}
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-lg md:text-xl">
            Stay informed with our latest offers and updates.<br /> By subscribing, you agree to our {' '}
            <Link to="/privacy-policy" className="text-orange-300 hover:underline">Privacy Policy</Link>.
          </p>
          <div className="flex justify-center w-full mt-2">
            <Link to="https://www.facebook.com/profile.php?id=100076074763488" target="_blank">
              <Image src='./images/facebook logo.jpg' alt='Facebook Logo' style={{ width: '40px', height: '40px' }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-tealblue text-center text-white py-7 w-full">
        <div className="border-t border-white w-[70%] mx-auto"></div>
        <p className="mt-10 text-lg md:text-xl">COPYRIGHT BANI-HIDDEN PARADISE RESORT 2024</p>
      </div>
    </div>
  );
}
