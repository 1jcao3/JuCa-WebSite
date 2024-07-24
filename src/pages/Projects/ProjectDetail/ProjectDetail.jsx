/* eslint-disable react/prop-types */
import { IoChevronBackCircleSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importa los módulos necesarios de Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Configura Swiper para usar los módulos
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function ProjectDetail({ project, onBackProject }) {
  return (
    <div className="w-full m-auto px-4">

      <div className="flex flex-row justify-center items-center w-full h-auto">

        <div className="flex justify-start mr-auto">
      <IoChevronBackCircleSharp
        onClick={onBackProject}
        className="icons flex justify-start items-center hover:underline  text-3xl"
      >
        Back
      </IoChevronBackCircleSharp>
      </div>
      <h1 className=" flex items-center justify-center font-bold text-3xl mr-auto ">{project.name}</h1> </div>
      <div className="relative overflow-hidden ">
        <Swiper
          spaceBetween={10} 
          slidesPerView={1} 
          loop={true} // 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          pagination={{ clickable: true }} 
          navigation={true} 
          className="md:w-[500px] w-[200px] h-[400px] md:h-[500px]" 
        >
          {project.images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="">
        
        {project.description}
      </div>
    </div>
  );
}
