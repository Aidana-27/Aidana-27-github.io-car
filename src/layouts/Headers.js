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
        <header class="header__first py-1.5 text-black-100 bg-white shadow-sm">
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
                class="px-4 py-2 p-0.5 text-xs font-semibold text-white peer uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease ">
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



      <div class="headers__tree fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between bg-blue-600 w-11/12 rounded-3xl text-center">
      <a
        aria-current="page"
        class="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
        href="#"
      >
        <svg
          class="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        <span class="sr-only">Home</span>
      </a>
      <a
        class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
        href="#"
      >
        <svg
          class="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <span class="sr-only">Upload</span>
      <button class="relative inline-flex flex-col items-center text-xs font-medium text-white py-3 px-6 flex-grow">
        <div class="absolute bottom-5 p-3 rounded-full border-4 border-white bg-blue-600">
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span class="sr-only">Chat</span>
      </button>
      <a
        class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
        href="#"
      >
        <svg
          class="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Search</span>
      </a>
      <a
        class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
        href="#" onClick={openSignIn}
      >
        <svg
          class="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Profile</span>
      </a>
    </div>


      <SignIn isOpen={isSignInOpen} onClose={closeSignIn} openSignUp={openSignUp} />
      <SignUp isOpen={isSignUpOpen} onClose={closeSignUp} />
    </>
  )
}

export default Headers