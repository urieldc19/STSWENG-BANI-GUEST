import { Link } from "react-router-dom";

const ReserveNowButton = () => {
    return (
        <div className="my-6 text-center">
            <Link 
                to="/reservations" 
                className="mt-5 px-4 py-2 font-serif font-semibold text-black transition-colors duration-300 border border-black hover:bg-[#CBA989] hover:text-black inline-block"
            >
                Reserve Now
            </Link>
        </div>
    );
};

export default ReserveNowButton;
