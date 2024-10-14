import { Link } from "react-router-dom";
import { Image } from '@mantine/core';

export function Footer() {

  function FooterLink({ link, title }: { link: string; title: string }) {
    return (
      <Link
        to={link}
        className="text-white hover:text-orange-300 hover:underline hover:underline-offset-8"
        style={{ fontSize: '1rem', fontFamily: 'Inria Serif' }}
      >
        {title}
      </Link>
    );
  }

  return (
    <div className="w-full" style={{ fontFamily: 'Inria Serif' }}>
      {/* Top thin bar */}
      <div style={{ backgroundColor: '#D9BEA1', height: '10px' }}></div>

      <div className="bg-tealblue text-white py-8 px-12 lg:flex lg:justify-around lg:items-start lg:gap-8 text-center lg:text-left">

        <div className="lg:flex lg:flex-col lg:items-start mt-8 lg:mt-0">
          < br /> < br />
          <Image src='./images/navbar-logo.png' alt="Logo" className="footer-logo mb-4 mx-auto lg:mx-0" />
          <p className="text-sm md:text-lg">
            Dacap Sur, Bani,<br />
            Philippines, 2407
          </p>
          <p className="text-sm md:text-lg"><br />contact@banihiddenparadise.com</p>
        </div>

        <div className="lg:flex lg:flex-col lg:items-start mt-8 lg:mt-0">
        < br /> < br />
          <FooterLink link="/hotel" title="THE HOTEL" />
          < br />
          <FooterLink link="/special-offers" title="SPECIAL OFFERS" />
          < br />
          <FooterLink link="/faqs" title="FAQs" />
          < br />
          <FooterLink link="/terms-and-conditions" title="TERMS AND CONDITIONS" />
        </div>

        <div className="lg:flex lg:flex-col lg:items-start lg:mt-0 mt-8">
          <p className="text-sm md:text-lg mb-4">
          < br />
            Be the first to discover exclusive deals.<br />
            <strong>Subscribe now!</strong>
          </p>
          <form className="flex mt-2 w-full max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none flex-1 text-black"
              style={{ fontSize: '1rem' }}
            />
            <button
              type="submit"
              className="bg-[#A88565] text-white px-4 py-2 rounded-r-md"
              style={{ fontSize: '1rem' }}
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm md:text-lg">
            Stay informed with our latest offers and updates.<br />
            By subscribing, you agree to our {' '}
            <Link to="/privacy-policy" className="text-orange-300 hover:underline">Privacy Policy</Link>.
          </p>

          <div className="flex justify-center items-center mx-auto mt-4 w-full">
            <Link to="https://www.facebook.com/profile.php?id=100076074763488" target="_blank">
              <Image src='./images/facebook logo.jpg' alt='Facebook Logo' className="w-10 h-10" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-tealblue text-center text-white py-4">
        <div className="border-t border-white w-[90%] lg:w-[70%] mx-auto"></div>
        <p className="mt-4 text-sm md:text-lg">COPYRIGHT BANI-HIDDEN PARADISE RESORT 2024</p>
      </div>
    </div>
  );
}
