// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Image } from '@mantine/core';
import './styles.css'



const generateSlideshow = async function(roomId: any) {
  // get from server
  let resp = await fetch(`/room/getRoomImages/${roomId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  console.log("Hello world")
  console.log(resp)
  return resp;
}

export function SlideshowRoom( {roomId} : {roomId: string} ) {
  let images: String[] = [];
  let test = generateSlideshow(roomId);
  

  return (
    <button className="">Hello world</button>
  )

  // todo images
  // {images} : {images: string[]},

  /*
  const slides = images.map((url) => (
    <SwiperSlide>
      <Image src={url} />
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </div>
  );
  */
}
