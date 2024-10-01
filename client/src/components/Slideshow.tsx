import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

export function Slideshow({images} : {images: string[]}) {

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} fit="cover" style={{ width: '100%', height: '100%' }} />
    </Carousel.Slide>
  ));

  return (
    <div className='w-full flex flex-row justify-center'>
      <div style={{ position: 'relative', width: '70%', height: '400px' }}> {/* Adjust height as needed */}
        <Carousel withIndicators>{slides}</Carousel>
      </div>
    </div>
  );
}