// src/components/Navbar.jsx
import { FaShoppingCart, FaUserAlt, FaSearch, FaGift } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsFillCalendarHeartFill } from 'react-icons/bs'

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <FaGift className="text-green-700 text-2xl" />
        <h1 className="text-xl font-bold text-green-700">Uphaar</h1>
        <div className="flex items-center text-sm text-red-500">
          <MdLocationOn className="text-lg" />
          <span>Location missing</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-1/3">
        <FaSearch className="text-gray-600 mr-2" />
        <input
          type="text"
          placeholder="Search Gifts, Cakes, Flowers..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-6 text-gray-700">
        <button className="hover:text-green-600">Same Day</button>
        <span>₹ INR</span>
        <button className="hover:text-green-600">Corporate</button>
        <FaShoppingCart className="cursor-pointer text-xl" />
        <FaUserAlt className="cursor-pointer text-xl" />
        <span className="cursor-pointer">More</span>
      </div>
    </nav>
  )
}
