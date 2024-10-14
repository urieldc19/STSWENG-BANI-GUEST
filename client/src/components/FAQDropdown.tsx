import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What time is check-in and check-out?',
    answer: 'Check-in: 2:00 PM\nCheck-out: 12:00 noon\nEarly check-in and late check-out are subject to availability and may incur additional charges.',
  },
  {
    question: 'Is outside food and drinks allowed at the resort?',
    answer: 'Outside food and drinks are not allowed on the premises, except for food that can be grilled (e.g., BBQ). Portable stoves, butane, or rice cookers are strictly prohibited.',
  },
  {
    question: 'Are pets allowed at the resort?',
    answer: 'Yes, we allow pets! However, pets are not permitted inside the hotel/resort rooms. They will stay in the kennels provided outside the resort that is free of charge.',
  },
  {
    question: 'Do you accept credit or debit card payments?',
    answer: 'No, we currently only accept cash payments. Please make sure to bring enough cash for your stay, as there are no ATMs nearby.',
  },
  {
    question: 'Is there WiFi available at the resort?',
    answer: 'Yes, we offer free WiFi for our guests throughout the resort.',
  },
  {
    question: 'What amenities are included in the rooms?',
    answer: 'All rooms are fully air-conditioned and come with a private bathroom. Extra foam with breakfast is available for ₱800.00. We provide basic toiletries, but guests are encouraged to bring any personal items they may need.',
  },
  {
    question: 'Is there parking available at the resort?',
    answer: 'Yes, we have parking available for guests, though the road leading to the resort is unpaved, so please drive carefully.',
  },
  {
    question: 'What are the payment terms for reservations?',
    answer: 'We require a 50% reservation fee to confirm your booking. The remaining 50% must be paid upon arrival.',
  },
  {
    question: 'What activities are available at the resort?',
    answer: 'Guests can enjoy swimming in our pool overlooking the West Philippine Sea or head to the nearby beach for a relaxing day. We also offer guided tours to local attractions upon request.',
  },
  {
    question: 'Can I book the resort for private events or functions?',
    answer: 'Yes, we have a function room available for weddings, parties, and corporate events. Please contact us for more information on packages and availability.',
  },
  {
    question: 'Is there a charge for a lost key?',
    answer: 'Yes, there is a charge of ₱150 for a lost key, which covers the cost of re-keying the lock for security reasons.',
  },
];

const FAQDropdown: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem: React.FC<FAQ> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg shadow-md">
      <button
        onClick={toggleAnswer}
        className="flex justify-between items-center w-full p-4 text-left bg-[#A88565] hover:bg-[#A88565]/80 focus:outline-none" 
      >
        <span className="font-medium text-white">{question}</span>
        <span className="text-white">{isOpen ? 'V' : '∧'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-[#A88565]/50 border-t"> 
          <p>{answer.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}</p>
        </div>
      )}
    </div>
  );
};

export default FAQDropdown;
