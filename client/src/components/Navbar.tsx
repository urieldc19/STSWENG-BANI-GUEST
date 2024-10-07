import {Link} from "react-router-dom";
import { Image } from '@mantine/core';

export function Navbar () {

    function Header({link, title}: {link:string, title: string}){
        return <Link 
                    to={link} 
                    className={'hover:text-orange-300 hover:underline hover:underline-offset-8'}
                >
                    {title}
                </Link>
    }

    return (
        <div className="flex flex-col w-screen">
            <div className="bg-tealblue text-white h-20 font-serif text-2xl">
                <div className="mx-12 flex items-center justify-between h-full">
                    <div className="flex-1 m-auto">
                        <div className="flex items-center justify-between space-x-12 h-full">
                            <Header link={'/'} title={"The Hotel"} />
                            <Header link={'/rooms'} title={"Rooms"} />
                            <Header link={'/locations'} title={"Locations & Contacts"} />
                            <Link to={'/'}><Image h={50} src='./images/navbar-logo.png'></Image></Link>
                            <Header link={'/specialoffers'} title={"Special Offers"} />
                            <Header link={'/restaurants'} title={"Restaurants"} />
                            <Header link={'/reservations'} title={"Reservations"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}