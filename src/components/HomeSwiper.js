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
import { Autoplay, Navigation, Pagination } from "swiper";
// Donut Pics
import Donut1 from '../pics/Donut1.jpg';
import Donut2 from '../pics/Donut2.jpg';
import Donut3 from '../pics/Donut3.jpg';
// Mobile Donut Pics
import MDonut1 from '../pics/MDonut1.jpg';
import MDonut2 from '../pics/MDonut2.jpg';
import MDonut3 from '../pics/MDonut3.jpg';
import { useMediaQuery, Text } from "@chakra-ui/react";
const HomeSwiper = () => {
  const [isMobile] = useMediaQuery('(max-width: 1000px)')
  const donutsPics = [Donut1, Donut2, Donut3];
  if(isMobile){
    donutsPics[0] = MDonut1;
    donutsPics[1] = MDonut2;
    donutsPics[2] = MDonut3;
  }
  return (
    <>
      <Swiper
        style={{ width: '100%', height: '100%' }}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="swiper"
      >
        <SwiperSlide>
          <img src={donutsPics[0]} alt="" />
          <Text
          >
            Keep calm and eat a doughnut
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <img src={donutsPics[1]} alt="" />
          <Text      
          >
            Donut go breaking my heart<br/>(I couldn't if I fried)
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <img src={donutsPics[2]} alt="" />
          <Text
          >
            Donut worry, I'm fine!
          </Text>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default HomeSwiper