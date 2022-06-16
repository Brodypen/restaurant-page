import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./HomeSwiper.css"
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
// Donut Pics
import Donut1 from '../pics/Donut1.jpg';
import Donut2 from '../pics/Donut2.jpg';
import MDonut1 from '../pics/MDonut1.jpg';
import MDonut2 from '../pics/MDonut2.jpg';
import { Image,}
from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
const HomeSwiper = () => {
  const [isMobile] = useMediaQuery('(max-width: 680px)')
  const donutsPics = [Donut1, Donut2];
  if(isMobile){
    donutsPics[0] = MDonut1;
    donutsPics[1] = MDonut2;
  }
  return (
    <>
      <Swiper   
        style={{width: '100%', height: '100%'}}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="swiper">
        <SwiperSlide>
          <Image src={donutsPics[0]}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={donutsPics[1]}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSwiper