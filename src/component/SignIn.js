import React from 'react'

const SignIn = ({ isOpen, onClose, openSignUp }) => {
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
          <h1 className="my-1 text-3xl font-semibold text-gray-700 dark:text-gray-200">Войти</h1>
          <p className="text-gray-500 dark:text-gray-400">Войдите, чтобы получить доступ к вашей учетной записи</p>
        </div>
        <div className="px-6 py-8 rounded text-black">
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
        </div>
        <button
          type="submit"
          className="block bg-gray-700 border border-grey-light w-full p-3 rounded mb-4"
        >Войти</button>

        <p className="text-sm text-center text-gray-400">Еще нет акаунта? <a href="#!" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800" onClick={openSignUp}>Зарегистрироваться</a>.</p>
      </div>
    </div>
  );
};

export default SignIn