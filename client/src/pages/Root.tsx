import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Root () {
    return (
        <>
            <div className="sticky top-0 z-50">
                <Navbar/>
            </div>

            <Outlet/>
            
            <Footer />
        </>
    )
}