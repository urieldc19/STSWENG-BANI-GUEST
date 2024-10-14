import { useState } from 'react';

const InquiryButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    if (isOpen) {
      setName('');
      setContact('');
      setEmail('');
      setMessage('');
      setSubmissionStatus('');
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation
    if (!name || !contact || !email || !message) {
      setSubmissionStatus('[System Message} Sorry, your message wasn’t sent. Please make sure you input everything right and try again.');
      return;
    }

    if (!/^\d{11}$/.test(contact)) {
      setSubmissionStatus('[System Message] Contact number must be a number with exactly 11 digits.');
      return;
    }
    
    setSubmissionStatus('[System Message] Message successfully sent, please wait for the response of the resort.');
    
    // reset fields 
    setName('');
    setContact('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <button
        className="mt-2 ml-5 mr-5 px-4 py-2 w-64 mx-auto center block font-serif font-semibold bg-[#2F515B] text-[#F2EFE8] transition-colors duration-300 border border-black hover:bg-[#F2EFE8] hover:text-black"
        onClick={toggleModal}
      >
        Send an Inquiry
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#2F515B] p-6 w-[90%] max-w-lg rounded-lg shadow-lg relative">
            <div className="mt-4 mb-4 text-[#F2EFE8] font-semibold font-serif text-justify mb-5space-y-2 text-md">
            <p> Call Us or Send as a Message to know if your Booking Date is available. Before you send a Reservation. We will answer with availabilities as quickly as possible. Thank You.</p>
            </div>
            
            {/* Close Button */}
            <button
              className="absolute text-white top-2 left-2 hover:text-gray-700"
              onClick={toggleModal}
            >
              &#x2715;
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 mb-2 border border-gray-300 rounded"
              />
              <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Contact Number</label>
              <input
                type="text"
                placeholder="Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="p-2 mb-2 border border-gray-300 rounded"
              />
              <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 mb-2 border border-gray-300 rounded"
              />
              <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Message</label>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-2 mb-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="px-4 py-2 mt-4 text-black bg-[#CBA989] rounded hover:bg-[#F2EFE8]"
              >
                Submit
              </button>
            </form>

            {submissionStatus && (
              <p className="mt-4 text-center text-[#F2EFE8]">{submissionStatus}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryButton;
