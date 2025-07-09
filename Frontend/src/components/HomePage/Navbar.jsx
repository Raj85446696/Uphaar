import { useState } from 'react';
import { FaShoppingCart, FaUserAlt, FaSearch, FaGift, FaBars } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isCartPage = location.pathname === '/cart';

  return (
    <nav className="w-full bg-white shadow px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <FaGift className="text-green-700 text-2xl" />
          <h1 className="text-xl font-bold text-green-700">Uphaar</h1>
          <div className="hidden sm:flex items-center text-sm text-red-500">
            <MdLocationOn className="text-lg" />
            <span>Location missing</span>
          </div>
        </div>

        {/* Hide everything else if on /cart */}
        {!isCartPage && (
          <>
            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <FaBars className="text-xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>

            {/* Search Bar (hidden on small screens) */}
            <div className="hidden lg:flex items-center bg-gray-100 px-3 py-2 rounded-md w-1/3">
              <FaSearch className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Search Gifts, Cakes, Flowers..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            {/* Action Icons */}
            <div className="hidden sm:flex items-center space-x-5 text-gray-700 text-sm">
              <span className="hidden md:inline">₹ INR</span>
              <FaShoppingCart className="cursor-pointer text-xl" onClick={() => navigate('/cart')} />
              <FaUserAlt className="cursor-pointer text-xl" />
              <span className="cursor-pointer hidden md:inline">More</span>
            </div>
          </>
        )}
      </div>

      {/* Mobile Dropdown (optional) */}
      {!isCartPage && isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-3 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <MdLocationOn className="text-red-500" />
            <span>Location missing</span>
          </div>
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
            <FaSearch className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search Gifts, Cakes, Flowers..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <div className="flex justify-between items-center pt-2 px-4">
            <span>₹ INR</span>
            <div className="flex items-center gap-4">
              <FaShoppingCart className="text-lg cursor-pointer" onClick={() => navigate('/cart')} />
              <FaUserAlt className="text-lg" />
              <span className="cursor-pointer">More</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
