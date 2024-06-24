import React, { useState } from 'react'
import SignIn from '../component/SignIn'
import SignUp from '../component/SignUp'
import Search from '../component/Search'

import { NavLink } from 'react-router-dom'

const Headers = ({setSearch}) => {

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const closeSignIn = () => {
    setIsSignInOpen(false);
  };

  const openSignUp = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  return (
    <>
      <div className='container border '>
        <header class="py-1.5 text-black-100 bg-white shadow-sm">
          <div class="container flex items-start mx-auto md:flex-row">
          <a href="/" class="header__logo flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
              <img className="img" src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png" alt="" />
            </a>
            <nav class="flex py-1.5 items-center justify-center md:ml-auto">
              <nav class="menu font-semibold">
                <ul>
                  <li><NavLink to="/"> <a className='mr-5  hover:text-black-900 text-lg  peer' href="#hero">Главная</a></NavLink></li>
                  <li><NavLink to="/about"><a className='mr-5  hover:text-black-900 text-lg  peer' href="#">О нас</a></NavLink></li>
                  <li><NavLink to="/services"><a className='mr-5  hover:text-black-900 text-lg  peer' href="#">Услуги</a></NavLink></li>
                  <li><NavLink to="/contact"><a className='mr-5 hover:text-black-900 text-lg  peer' href="#" >Контакты</a></NavLink></li>
                </ul>
              </nav>
            </nav>
            <div class="flex items-center h-full pl-6 ml-6 border-l border-black-100  peer font-semibold">
              <div>
                <button id="buttonmodal"  onClick={openSignIn} class="focus:outline-none p-2 text-black rounded-lg " type="button">Войти</button>
              </div>
              <a href="#_"
                class="px-4 py-2 p-0.5 text-xs font-semibold text-white peer uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease md:h-10">
                Добавить объявление
              </a>
            </div>
          </div>
        </header>
      </div>

      <div className='container'>
        <div className='header__wrapper'>
          <header className="bg-white h-10 hidden md:flex">
            <nav className="header-links contents font-semibold text-base lg:text-lg">
              <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
                <li className="xl:p-6">
                  <div class='relative menu'>
                    <button class=" p-2  text-black-900 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200 text-sm  ">Легковые</button>
                    <div class=' w-56 absolute top-5 z-10
		after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/100
	  after:-z-20 after:blur-[2px] after:rounded-lg
    peer-focus:top-10 peer-focus:opacity-100 peer-focus:visible 
    transition-all duration-300 invisible  opacity-0 
    '>
                      <ul class=' flex flex-col gap-1'>
                        <li class='cursor-pointer bg-sky-300 p-2 rounded-md hover:opacity-80 text-white text-sm'>Новые авто</li>
                        <li class='cursor-pointer bg-blue-300 p-2 rounded-md hover:opacity-80 text-white text-sm'>Все легковае</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="xl:p-6">
                  <div class='relative menu'>
                    <button class="p-2 font-bold text-black-100 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200 text-sm ">Комерческие</button>
                    <div class=' w-56 absolute top-1 z-10
		after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/100
		after:w-full after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
    peer-focus:top-10 peer-focus:opacity-100 peer-focus:visible 
    transition-all duration-300 invisible  opacity-0 
    '>
                      <ul class='flex flex-col gap-1'>
                        <li class='cursor-pointer bg-sky-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Автобусы</li>
                        <li class='cursor-pointer bg-blue-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Грузовики
                        </li>
                        <li class='cursor-pointer bg-cyan-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Легкие коммерческие
                        </li>
                        <li class='cursor-pointer bg-red-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Прицепы</li>
                        <li class='cursor-pointer bg-yellow-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Тягочи
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="xl:p-6">
                  <div class='relative menu'>
                    <button class="p-2 font-bold text-black-100 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200  text-sm">Мото</button>
                    <div class=' w-56 absolute top-5 z-10
		after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/100
		after:w-full after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
    peer-focus:top-10 peer-focus:opacity-100 peer-focus:visible 
    transition-all duration-300 invisible  opacity-0 
    '>
                      <ul class='flex flex-col gap-1'>
                        <li class='cursor-pointer bg-sky-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Мотоциклы</li>
                        <li class='cursor-pointer bg-blue-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Багги
                        </li>
                        <li class='cursor-pointer bg-cyan-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Мотовездоходы
                        </li>
                        <li class='cursor-pointer bg-red-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Скутеры</li>
                        <li class='cursor-pointer bg-yellow-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Снегоходы
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="xl:p-6">
                  <div class='relative menu'>
                    <button class="p-2 font-bold text-black-100 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200 text-sm ">Запчасти</button>
                    <div class=' w-56 absolute top-5 z-10
		after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/100
		after:w-full after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
    peer-focus:top-10 peer-focus:opacity-100 peer-focus:visible 
    transition-all duration-300 invisible  opacity-0 
    '>
                      <ul class='flex flex-col gap-1'>
                        <li class='cursor-pointer bg-sky-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Запчасти и расходники</li>
                        <li class='cursor-pointer bg-blue-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Шины
                        </li>
                        <li class='cursor-pointer bg-cyan-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Диски
                        </li>
                        <li class='cursor-pointer bg-red-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Аксессуары и мультимедиа</li>
                        <li class='cursor-pointer bg-yellow-300 p-3 rounded-md hover:opacity-80 text-white text-sm'>Масло и автохимия
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
               <Search setSearch={setSearch}/>
            </nav>
          </header>
        </div>
      </div>


      <SignIn isOpen={isSignInOpen} onClose={closeSignIn} openSignUp={openSignUp} />
      <SignUp isOpen={isSignUpOpen} onClose={closeSignUp} />
    </>
  )
}

export default Headers