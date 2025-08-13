import { useEffect, useState } from 'react';
import { FaShoppingCart, FaUserAlt, FaSearch, FaGift, FaBars } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const routerLocation = useLocation();

  const isCartPage = routerLocation.pathname === '/cart';

  useEffect(() => {
    fetch('https://ipwho.is/')
      .then((res) => res.json())
      .then((data) => {
        setUserLocation(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className="w-full bg-white shadow px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <FaGift className="text-green-700 text-2xl" />
          <h1 className="text-xl font-bold text-green-700">Uphaar</h1>
          <div className="hidden sm:flex items-center text-sm text-red-500">
            <MdLocationOn className="text-lg" />
            <span>{userLocation?.city || "Detecting..."}</span>
          </div>
        </div>

        {/* Hide everything else if on /cart */}
        {!isCartPage && (
          <>
            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <FaBars
                className="text-xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
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
              <FaShoppingCart
                className="cursor-pointer text-xl"
                onClick={() => navigate('/cart')}
              />

              {/* Icon Button */}
              <div
                className="relative inline-block text-left"
                tabIndex={0} 
                onBlur={() => setOpen(false)} 
              >
                {/* Icon */}
                <FaUserAlt
                  className="cursor-pointer text-xl"
                  onClick={() => setOpen(!open)}
                />

                {/* Dropdown */}
                {open && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Account settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Support
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        License
                      </a>
                      <button
                        onClick={() => alert("Signed out")}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>


            </div>
          </>
        )}
      </div>

      {/* Mobile Dropdown */}
      {!isCartPage && isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-3 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <MdLocationOn className="text-red-500" />
            <span>{userLocation?.city || "Detecting..."}</span>
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
              <FaShoppingCart
                className="text-lg cursor-pointer"
                onClick={() => navigate('/cart')}
              />
              <FaUserAlt className="text-lg" />
              <span className="cursor-pointer">More</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
