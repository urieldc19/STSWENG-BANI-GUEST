import { Slideshow } from "../components/Slideshow";

export function Restaurants() {

  const images = [
    './images/restaurants/slideshow1.png',
    './images/restaurants/slideshow2.png',
    './images/restaurants/slideshow3.png',
    './images/restaurants/slideshow4.png',
    './images/restaurants/slideshow5.png',
  ];

  return (
    <Slideshow images={images}/>
  );
}
