import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const Cards = ({el,id,search,setGetId,setDetails,setHendleClick}) => {
  const handleClick = () => {
    setDetails(el)
  };

  setHendleClick(handleClick)
setGetId(id)
  return (
    <>
      {el.car.toLowerCase().includes(search.toLowerCase()) &&
      <div onClick={handleClick} class="cards w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
        <div>
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' /></SwiperSlide>
            <SwiperSlide><img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' /></SwiperSlide>
            <SwiperSlide><img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' /></SwiperSlide>
            <SwiperSlide><img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' /></SwiperSlide>
          </Swiper>
        </div>
        <div class="text-center py-8 sm:py-6">
          <p class="text-xl text-gray-700 font-bold mb-2">{el.car}</p>
          <p class="text-base text-gray-400 font-normal">
           {el.car_model}
          </p>
          <p class="text-xl text-gray-700 font-bold mb-2">{el.price}</p>
          <NavLink to={`/details/${id}`}>Подробнее</NavLink>
        </div>
      </div>}
    </>
  )
}

export default Cards