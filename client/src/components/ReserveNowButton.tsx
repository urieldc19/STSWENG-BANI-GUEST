import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput} from '@mantine/core';

interface ReserveNowProps {
    name: string;
    checkInDate: string;
    checkOutDate: string;
    adultGuests: number;
    childrenGuests: number;
    roomCapacity: number;
}

const ReserveNowButton: React.FC<ReserveNowProps> = ({
    name,
    checkInDate,
    checkOutDate,
    adultGuests,
    childrenGuests,
    roomCapacity,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [pets, setPets] = useState('no');
    const [submissionStatus, setSubmissionStatus] = useState('');

    const toggleModal = () => {
        setIsOpen(!isOpen);

        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        if (isOpen) {
            form.reset();
            setPets('no');
            setSubmissionStatus('');
        }
    };

    const form = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
            roomPreference: name,
            email: '',
            address: '',
            phone: '',
            adultGuests: adultGuests,
            childrenGuests: childrenGuests,
            totalGuests: 1,
            roomCapacity: roomCapacity,
            otherNotes: '',
        },

        validate: {
            firstName: (value) => (value ? null : 'First name is required'),
            lastName: (value) => (value ? null : 'Last name is required'),
            roomPreference: (value) => (value ? null : 'Room preference is required'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            address: (value) => (value ? null : 'Address is required'),
            phone: (value) => (/^\d{11}$/.test(value) ? null : 'Contact number must be exactly 11 digits'),
            
        },
    });

    
    const handleSubmit = form.onSubmit((values) => {
        const totalGuests = values.adultGuests + values.childrenGuests;
    
        
        if (totalGuests > values.roomCapacity) {
            setSubmissionStatus(`[Error] Total guests cannot exceed the room capacity of ${values.roomCapacity}.`);
            return; 
        }
    
        
        setSubmissionStatus(`Reservation successfully submitted.`);
        form.reset();
    });

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

                            {/* Check In and Check Out Dates */}
                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Check In</label>
                                <input type="date" value={checkInDate} readOnly className="p-1 border border-gray-300 rounded" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Check Out</label>
                                <input type="date" value={checkOutDate} readOnly className="p-1 border border-gray-300 rounded" />
                            </div>

                            {/* Adults and Children */}
                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Adults</label>
                                <input type="number" value={adultGuests} readOnly className="p-1 border border-gray-300 rounded" />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Children</label>
                                <input type="string" value={childrenGuests} readOnly className="p-1 border border-gray-300 rounded" />
                            </div>

                            {/* Room Preference */}
                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Room Preference</label>
                                <input type="string" value={name} readOnly className="p-1 border border-gray-300 rounded" />
                            </div>

                            {/* Pets */}
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

                            {/* Fields */}
                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">First Name</label>
                                <TextInput {...form.getInputProps('firstName')} placeholder="First Name" />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Last Name</label>
                                <TextInput {...form.getInputProps('lastName')} placeholder="Last Name" />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Email Address</label>
                                <TextInput {...form.getInputProps('email')} placeholder="Email" />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Phone Number</label>
                                <TextInput {...form.getInputProps('phone')} placeholder="Phone Number"/>
                            </div>

                            <div className="flex flex-col col-span-2">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Address</label>
                                <TextInput {...form.getInputProps('address')} placeholder="Address"/>
                            </div>

                            <div className="flex flex-col col-span-2">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Total Guests</label>
                                <select
                                    {...form.getInputProps('totalGuests')}
                                    className="p-1 border border-gray-300 rounded"
                                >
                                    {[...Array(roomCapacity).keys()].map((num) => (
                                        <option key={num} value={num + 1}>
                                            {num + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Other Notes */}
                            <div className="flex flex-col col-span-2">
                                <label className="font-serif text-left text-[#F2EFE8] mt-5 font-semibold">Other Notes</label>
                                <textarea
                                    value={form.values.otherNotes}
                                    onChange={(e) => form.setFieldValue('otherNotes', e.target.value)}
                                    className="p-1 border border-gray-300 rounded"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-4"> <button type="submit" className="px-4 py-2 mt-4 w-full text-black bg-[#CBA989] rounded hover:bg-[#F2EFE8]" > 
                            Submit Reservation </button> 
                            </div> 
                        </form>

                        {/* Submission Status */}
                        <p className={`mt-4 text-center ${submissionStatus.startsWith('[Error]') ? 'text-red-500' : 'text-[#F2EFE8]'}`}>
                        {submissionStatus}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReserveNowButton;



