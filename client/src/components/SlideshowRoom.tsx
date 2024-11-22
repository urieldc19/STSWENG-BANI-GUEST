// Import Swiper React components
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Image } from '@mantine/core';
import { Slideshow } from "./Slideshow.tsx"
import './styles.css'

function createSlideshow(images: any, cn = "") {
  const slides = images.map((url: any) => (
    <SwiperSlide>
      <Image src={url} />
    </SwiperSlide>
  ));

  cn = "slideshow " + cn.toString();
  return (
    <div className = {cn}>
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
}

export const SlideshowRoom = (roomId: any, cn="") => {
  // effects
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [state, setState] = useState("loading");
  roomId = roomId["roomId"]

  useEffect(() => {
    if (state == "loading") {
      const fetchData = async function() {
        let data: any = []
        try { 
          let resp = await fetch(`/api/getRoomImages/${roomId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (!resp.ok) { throw new Error("Cannot connect to server") }
          data = await resp.json()

          // success
          setState("loaded");
          setImages(data);
        } catch(e: any) {
          setState("error");
          setError(e);
          console.log(`An error occured while loading slideshow with id ${roomId}`)
          console.log(e)
        }
      }
      fetchData();
  }})
  return (
    <div>
      {state == "loading" && (
        <div>Loading slideshow...</div>
      )}
      {state == "loaded" &&
        createSlideshow(images, cn)
      }
    </div>
  )
}
export default SlideshowRoom;
  /*
  // get from server
  let resp = await fetch(`/api/getRoomImages/${roomId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).catch((e) => {
    setState("error");
    setError(e);
    return "";
  });
  
  let images = await resp.json()
  console.log("hi")

  setState("loaded");
  setImages(images);
}

export function SlideshowRoom( {roomId} : {roomId: string} ) {
  let images: String[] = [];
  useEffect(() => {
    setState("loading");
    generateSlideshow(roomId);
  })

  // todo images
  // {images} : {images: string[]},

  const slides = images.map((url) => (
    <SwiperSlide>
      <Image src={url} />
    </SwiperSlide>
  ));
}
      /*
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
      */