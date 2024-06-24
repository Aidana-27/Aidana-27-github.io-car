import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const Details = ({details}) => {

  return (
    <div className='container'>
            <NavLink to="/">
            <a href="#_"
                class="px-4 py-2 my-3.5 p-0.5 text-xs font-semibold text-white  peer uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                На главную
              </a>
        </NavLink>
<div class="flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div class=" p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="">
                <div class="relative">
                <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={50}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='image'><img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' /></SwiperSlide>
            <SwiperSlide className='image'><img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' /></SwiperSlide>
            <SwiperSlide className='image'><img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' /></SwiperSlide>
            <SwiperSlide className='image'><img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' /></SwiperSlide>
          </Swiper>
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-1/2 px-10">
                <div class="mb-5">
                    <h1 class="font-bold uppercase text-3xl mb-5">{details.car}</h1>
                    <p class="text-xl">{details.car_model}</p>
                    <p class="text-xl">{details.car_color}</p>
                </div>
                <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae inventore aliquid exercitationem earum voluptatem recusandae mollitia aliquam, ut fugiat!</p>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="font-bold  text-4xl leading-none align-baseline">{details.price}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Details