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
      <div style={{ backgroundColor: '#D9BEA1', height: '10px' }}></div>

      <div className="bg-tealblue text-white py-8 px-4 lg:px-12 lg:flex lg:justify-around lg:items-start lg:gap-8 text-center lg:text-left">

        <div className="lg:flex lg:flex-col lg:items-start mt-8 lg:mt-0">
        <br />
          <Image src='./images/navbar-logo.png' alt="Logo" className="footer-logo mb-4 mx-auto lg:mx-0" />
          <p className="text-sm md:text-lg">
            Dacap Sur, Bani,<br />
            Philippines, 2407
          </p>
          <p className="text-sm md:text-lg"><br />contact@banihiddenparadise.com</p>
        </div>

        <div className="lg:flex lg:flex-col lg:items-start mt-8 lg:mt-0">
          <p className="text-sm md:text-lg mb-4">
          <br /> Our beach resort is located on a mountain,<br />
          <br /> offering stunning views of the West Philippine Sea.<br />
          <br /> Enjoy luxurious accommodations and relax in a peaceful setting.<br />
          <br /> Experience beautiful sunsets that will make your stay unforgettable!
          </p>
        </div>

        <div className="lg:flex lg:flex-col lg:items-start lg:mt-0 mt-8">
          <p className="text-sm md:text-lg mb-4">
          <br />
            <FooterLink link="/hotel" title="THE HOTEL" /> <br />
            <br />
            <FooterLink link="/specialoffers" title="SPECIAL OFFERS" /> <br />
            <br />
            <FooterLink link="/faqs" title="FAQs" />
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
