import { Link } from "react-router-dom";

const ReserveNowButton = () => {
    return (
        <div className="my-6 text-center">
            <Link 
                to="/reservations" 
                className="mt-5 px-4 py-2 font-serif font-semibold bg-[#CBA989] text-black transition-colors duration-300 border border-black hover:bg-[#2F515B] hover:text-[#F2EFE8] inline-block"
            >
                Reserve Now
            </Link>
        </div>
    );
};

export default ReserveNowButton;
