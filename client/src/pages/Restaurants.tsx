import { Slideshow } from "../components/Slideshow";

export function Restaurants() {

  const images = [
    './images/restaurants/slideshow1.png',
  ];

  return (
    <>
      <Slideshow images={images}/>
      <br />
      <a href="/restaurant_menu" class="underline">Temporary link to restaurant menu</a> (remove in production)
    </>
  );
}
