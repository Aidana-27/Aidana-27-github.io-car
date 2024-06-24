import React from 'react'

const SignUp = ({ isOpen, onClose }) => {
    return (
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-500 bg-opacity-50 transform ${isOpen ? 'scale-100' : 'scale-0'
          } transition-transform duration-300 z-50`}
      >
        <div className="bg-gray-600 w-4/12 p-12">
          <button type="button" className="focus:outline-none" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="text-center">
            <h1 className="mb-8 text-3xl text-white text-center">Зарегистрироваться</h1>
          </div>
          <div className="px-6 py-8 rounded text-black">
            <input
              type="text"
              className="block bg-transparent border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Полное имя" />
  
            <input
              type="text"
              className="block bg-transparent border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email" />
  
            <input
              type="password"
              className="block bg-transparent border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Пароль" />
  
            <input
              type="password"
              className="block bg-transparent border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Подтвердите пароль" />
  
            <button
              type="submit"
              className="block bg-gray-700 border border-grey-light w-full p-3 rounded mb-4"
            >Создать аккаунт</button>
  
            <div className="text-center text-sm text-grey-dark mt-4">
              Регистрируясь, вы соглашаетесь с
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Условиями использования
              </a> и
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Политикой конфиденциальности
              </a>.
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SignUp