import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
    userType: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/signup', formData);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed!');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100">
      <div className="flex w-full h-[550px] max-w-5xl shadow-xl rounded-3xl overflow-hidden bg-white">

        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1140&auto=format&fit=crop"
            alt="Gift Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-extrabold text-pink-600 mb-2 text-center">Create Your Account</h2>
          <p className="text-gray-600 text-sm mb-8 text-center">Sign up and unwrap exclusive gifting features 🎁</p>

          {/* Full Name */}
          <label htmlFor="fullname" className="text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="e.g. Ritu Kumar"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            required
          />

          {/* Username */}
          <label htmlFor="username" className="text-sm font-semibold text-gray-700 mb-1">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="e.g. ritu123"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            required
          />

          {/* Password */}
          <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            required
          />

          {/* User Type */}
          <label htmlFor="userType" className="text-sm font-semibold text-gray-700 mb-1">User Type</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-6"
            required
          >
            <option value="">Select user type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition duration-300">
            🎁 Sign Up
          </button>

          <p className="pt-4 text-sm text-center">
            Already have an account?{" "}
            <span className="font-semibold text-blue-700 cursor-pointer" onClick={() => navigate('/login')}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
