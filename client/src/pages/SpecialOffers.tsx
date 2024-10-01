import { Slideshow } from "../components/Slideshow";

export function SpecialOffers () {
    const images = [
        './images/specialoffers/slideshow1.png',
        './images/specialoffers/slideshow2.png',
        './images/specialoffers/slideshow3.png',
        './images/specialoffers/slideshow4.png',
      ];

    return (
        <Slideshow images={images}/>
    )
}