// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Heading, Image } from "@chakra-ui/react";
import SingleCard from "../Components/SingleCard";
import EachCard from "../Components/HomeEachCard";
export default function SlideShow({ noofslidocard, data, category }) {
  function handlePostdataIncart() {}
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={noofslidocard}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
        {
        data.filter((e,i)=>i<12).map((item,i)=>{
            return  <SwiperSlide>
             <div style={{width:"100%"}}>
             <EachCard category={category} handlePostdataIncart={handlePostdataIncart }   item={item}/>
             </div>
              
           
              
               </SwiperSlide>
           })
        }
       
     
    </Swiper>
  );
}
