import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { users } from "../../../data/user";

import "./user.css";
import "swiper/css";
import "swiper/css/pagination";

const User = () => {
  return (
    <div className="userWrapper">
      <Swiper
        slidesPerView={17}
        spaceBetween={10}
        modules={[Pagination]}
        className="userContainer"
      >
        {users.map((item) => (
          <SwiperSlide key={item.id} className="singleUser">
            <img src={item.image} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default User;
