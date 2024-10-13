import { useState } from 'react';

interface ReserveNowProps {
    name: string;
    checkInDate: string;
    checkOutDate: string;
    adultGuests: number;
    childrenGuests: number;
}

const ReserveNowButton: React.FC<ReserveNowProps> = ({
    name,
    checkInDate,
    checkOutDate,
    adultGuests,
    childrenGuests,
}) =>  {
const [isOpen, setIsOpen] = useState(false);
const [roomPreference, setRoomPreference] = useState('');
const [pets, setPets] = useState('no');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [totalGuests, setTotalGuests] = useState(1);
const [otherNotes, setOtherNotes] = useState('');
const [proofOfPayment, setProofOfPayment] = useState<File | null>(null);
const [submissionStatus, setSubmissionStatus] = useState('');

console.log(name,
    checkInDate,
    checkOutDate,
    adultGuests,
    childrenGuests)

const toggleModal = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
    document.body.style.overflow = 'hidden';
    } else {
    document.body.style.overflow = 'auto';
    }

    if (isOpen) {
    
    setRoomPreference(name);
    setPets('no');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setTotalGuests(1);
    setOtherNotes('');
    setProofOfPayment(null);
    setSubmissionStatus('');
    }
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    //validation (need backend)
    if ( !firstName || !lastName || !roomPreference || !email || !phone || !address || !proofOfPayment) {
    setSubmissionStatus('[System Message] Please fill out all the required fields.');
    return;
    }

    if (!/^\d{11}$/.test(phone)) {
    setSubmissionStatus('[System Message] Contact number must be a number with exactly 11 digits.');
    return;
    }
    
    
    setSubmissionStatus('Reservation successfully submitted.');

    //Reset Fields
    setRoomPreference('');
    setPets('no');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setTotalGuests(1);
    setOtherNotes('');
    setProofOfPayment(null);
};

return (
    <>
    <button
        className="mt-2 ml-5 mr-5 px-4 py-2 w-64 mx-auto center block font-serif font-semibold bg-[#2F515B] text-[#F2EFE8] transition-colors duration-300 border border-black hover:bg-[#F2EFE8] hover:text-black"
        onClick={toggleModal}
    >
        Reserve Now
    </button>

    {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#2F515B] p-6 w-[1350px] max-w-full rounded-lg shadow-lg relative">
            <button className="absolute text-white top-2 left-2 hover:text-gray-700" onClick={toggleModal}>
            &#x2715;
            </button>
            <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4 text-sm">

            <div className="flex flex-col">
                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Check In</label>
                <input
                    type="date"
                    value={checkInDate}
                    readOnly
                    className="p-1 border border-gray-300 rounded"
                    />
            </div>
            <div className="flex flex-col">
                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Check Out</label>
                <input
                type="date"
                value={checkOutDate}
                readOnly
                className="p-1 border border-gray-300 rounded"
                />
            </div>

            <div className="flex flex-col">
            <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Adults</label>
            <input 
            type="number" 
            value={adultGuests} 
            readOnly 
            className="p-1 border border-gray-300 rounded"
            />
            </div>

            <div className="flex flex-col">
                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Children</label>
                <input 
                type="string" 
                value={childrenGuests} 
                readOnly 
                className="p-1 border border-gray-300 rounded"
                />
            </div>


            <div className="flex flex-col">
                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Room Preference</label>
                <input 
                type="string" 
                value={name} 
                readOnly 
                className="p-1 border border-gray-300 rounded"
                />
            </div>
            <div className="flex flex-col">
                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Pets</label>
                <div className="flex items-center">
                <label className="mr-4">
                    <input
                    type="radio"
                    name="pets"
                    value="yes"
                    checked={pets === 'yes'}
                    onChange={() => setPets('yes')}
                    />
                    Yes
                </label>
                <label>
                    <input
                    type="radio"
                    name="pets"
                    value="no"
                    checked={pets === 'no'}
                    onChange={() => setPets('no')}
                    />
                    No
                </label>
                </div>
            </div>

            <div className="flex flex-col">
            <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">First Name</label>
                <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-1 border border-gray-300 rounded"
                />
            </div>

            <div className="flex flex-col">
            <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Last Name</label>
                <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-1 border border-gray-300 rounded"
                />
            </div>


            <div className="flex flex-col">
            <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Email Address</label>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-1 border border-gray-300 rounded"
                />
            </div>
            <div className="flex flex-col">
            <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Phone Number</label>
                <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-1 border border-gray-300 rounded"
                />
            </div>

            <div className="flex flex-col col-span-2">
            <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Address</label>
                <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="p-1 border border-gray-300 rounded"
                />
            </div>


            <div className="flex flex-col col-span-2">
                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Total Guests</label>
                <select
                value={totalGuests}
                onChange={(e) => setTotalGuests(parseInt(e.target.value))}
                className="p-1 border border-gray-300 rounded"
                >
                {[...Array(16).keys()].map(num => (
                    <option key={num} value={num + 1}>
                    {num + 1}
                    </option>
                ))}
                </select>
            </div>

            <div className="flex flex-col col-span-2">
            <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Other Notes</label>
                <textarea
                placeholder="Other Notes"
                value={otherNotes}
                onChange={(e) => setOtherNotes(e.target.value)}
                className="p-1 border border-gray-300 rounded"
                />
            </div>


            <div className="flex flex-col col-span-2">
                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Proof of Payment</label>
                <input
                type="file"
                onChange={(e) => setProofOfPayment(e.target.files ? e.target.files[0] : null)}
                className="p-1 border border-gray-300 rounded"
                />
            </div>

            <div className="col-span-4">
                <button
                type="submit"
                className="px-4 py-2 mt-4 w-full text-black bg-[#CBA989] rounded hover:bg-[#F2EFE8]"
                >
                Submit Reservation
                </button>
            </div>
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

export default ReserveNowButton;



