import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100">
        <div className="flex w-full max-w-5xl shadow-xl rounded-3xl overflow-hidden bg-white">
          <div className="w-1/2 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1140&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gift Visual"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
            <h2 className="text-3xl font-extrabold text-pink-600 mb-2 text-center">Welcome Back!</h2>
            <p className="text-gray-600 text-sm mb-8 text-center">Login to unwrap your dashboard 🎁</p>

            <label htmlFor="username" className="text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="e.g. yourname123"
              className="border border-gray-300 rounded-lg px-4 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />

            <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />

            <button className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition duration-300">
              🎁 Login
            </button>
            <p className='pt-2'>Don't have an account? <span className='font-semibold text-blue-700 cursor-pointer' onClick={()=>navigate('/signup')}>Sign up</span></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login