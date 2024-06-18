import React from 'react'

const Login = () => {

  const openSignIn = () => {
    setIsOpen(true);
    setSignUp(false);
  };

  const openRegister = () => {
    setSignUp(true);
    setIsOpen(false);
  }

  const closeBoth = () => {
    setIsOpen(false);
    setSignUp(false);
  };

  return (
    <>
    {/* signIn */}
    {openSignIn && (
        <div className="signin min-h-screen flex items-center justify-center w-full dark:bg-transparent-950">
          <div className="bg-white dark:bg-gray-950 shadow-md rounded-lg px-8 py-6 max-w-md">
            <NavLink to="/">
              <i
                className="fa-solid fa-xmark"
                onClick={closeBoth}
                style={{ color: "#ffffff" }}
              ></i>
            </NavLink>
            <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
            <form action="#">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
                <NavLink to="/signup" onClick={openRegister} className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-48">Be registered</NavLink>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
            </form>
          </div>
        </div>
      )}



{/* SignUp */}
{openRegister && <div class="signup bg-grey-lighter min-h-screen flex flex-col">
                <div class="container mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-gray-950 px-6 py-8 rounded shadow-md text-white">
                        <NavLink to="/">
                            <i
                                className="fa-solid fa-xmark"
                                onClick={closeBoth}
                                style={{ color: "#ffffff" }}
                            ></i>
                        </NavLink>
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />
                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
                        <div class="text-center text-sm text-white mt-4">
                            By signing up, you agree to the
                            <a class="no-underline border-b border-grey-dark text-white" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-white" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <a class="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>}
    </>
  )
}

export default Login