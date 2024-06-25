import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../New.css'
import { Grid, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import axios from 'axios';


export default function NewCar({hendleClick}) {
  const [product,setProduct]=useState([])
  useEffect(() => {
    axios("https://myfakeapi.com/api/cars")
      .then(({ data }) => setProduct(data.cars.slice(20, 40)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <div className='container'>
      <div class="pb-10">
        <h2 class="text-base font-bold text-indigo-600">
          Новые авто
        </h2>
      </div>
      <Swiper
        loop={true}
        slidesPerView={5}
        grid={{
          rows: 1,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            pagination: {
              clickable: true,
              dynamicBullets: true,
            },
          },
          480: {
            slidesPerView: 3,
            pagination: {
              clickable: true,
              dynamicBullets: true,
            },
          },
          640: {
            slidesPerView: 3,
            pagination: {
              clickable: true,
              dynamicBullets: false,
            },
          },
          768: {
            slidesPerView: 4,
            pagination: {
              clickable: true,
              dynamicBullets: false,
            },
          },
          1024: {
            slidesPerView: 5,
            pagination: {
              clickable: true,
              dynamicBullets: false,
            },
          },
        }}
        modules={[Grid, Pagination , Navigation , Mousewheel, Keyboard]}
        className="mySwiper"
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        centeredSlides={true}
      >
        {product.map((el) => (
          <SwiperSlide className='newCar__img'>
            <div onClick={hendleClick}  className="newCar__wrapper">
            <img src="https://s0.rbk.ru/v6_top_pics/media/img/2/01/756582168340012.jpg" alt='car' />
            <p className='newCar__text'>{el.car}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
