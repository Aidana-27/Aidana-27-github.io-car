import React,{useState,useEffect} from 'react';
import "../App.css"
import Cards from "./Cards";
import NewCar from './NewCar'
import axios from 'axios';

const Hero = ({search,setGetId,setDetails}) => {
  const [hendleClick,setHendleClick]=useState('')
  const [product,setProduct]=useState([])
  useEffect(() => {
    axios("https://myfakeapi.com/api/cars")
      .then(({ data }) => setProduct(data.cars.slice(0, 30)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* легковые авто */}
      <div className="container">
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-6">
          <NewCar hendleClick={hendleClick}/>
          <div class="pb-12 px-2.5 py-6">
            <h2 class="text-base font-bold text-indigo-600">
              Легковые авто
            </h2>
          </div>
          <div class="hero__card grid grid-rows-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {product.map((el,id) => (
              <Cards setHendleClick={setHendleClick} el={el} id={id} setGetId={setGetId} search={search} setDetails={setDetails}/>
            ))}
          </div>
        </section>
      </div>

      {/* комерческие авто
      <div className="container">
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-5">
          <div class="pb-12 px-2.5">
            <h2 class="text-base font-bold text-indigo-600">
              Комерческие авто
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {product.map((el) => (
              <Cards el={el}/>
            ))}
          </div>
        </section>
      </div>


      {/* мото */}
      {/* <div className="container">
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-5">
          <div class="pb-12 px-2.5">
            <h2 class="text-base font-bold text-indigo-600">
              Мото
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {product.map((el) => (
              <Cards el={el}/>
            ))}
          </div>
        </section>
      </div> */}


      {/* Запчасти */}
      {/* <div className="container">
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-5">
          <div class="pb-12 px-2.5">
            <h2 class="text-base font-bold text-indigo-600">
              Запчасти
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {product.map((el) => (
              <Cards el={el} search={search}/>
            ))}
          </div>
        </section>
      </div> */}
    </>
  );
}
export default Hero
