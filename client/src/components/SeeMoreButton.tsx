import { useState } from 'react';

const SeeMoreButton = ({ content }: { content: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = 'auto';   // Re-enable scroll when modal is closed
    }
  };
  

  return (
    <>
      
      <button
        className="mt-10 px-4 py-2 w-64 mx-auto block font-serif text-left underline font-semibold text-black transition-colors duration-300 hover:text-[#F2EFE8]"
        onClick={toggleModal}
      >
        Learn More
      </button>

      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#CBA989] p-6 w-[90%] max-w-lg rounded-lg shadow-lg relative opacity-100 z-60">
            {/* Close Button */}
            <button
              className="absolute text-[#F2EFE8] top-2 left-2 hover:text-gray-700"
              onClick={toggleModal}
            >
              &#x2715;
            </button>

            
            <div className="text-center">
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SeeMoreButton;

