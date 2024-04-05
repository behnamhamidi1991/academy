import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "./user.css";
import "swiper/css";
import "swiper/css/pagination";

const User = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="userContainer"
      >
        <SwiperSlide className="singleUser">Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
};

export default User;
