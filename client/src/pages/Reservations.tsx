import { Slideshow } from "../components/Slideshow";

export function Reservations () {

    const images = [
        './images/reservations/slideshow1.png',
        './images/reservations/slideshow2.png',
        './images/reservations/slideshow3.png',
      ];

    return (
        <Slideshow images={images}/>
    )
}