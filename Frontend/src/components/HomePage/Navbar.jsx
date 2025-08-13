import { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaUserAlt,
  FaSearch,
  FaGift,
  FaBars,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  // Fetch user location once
  useEffect(() => {
    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((data) => setUserLocation(data))
      .catch((err) => console.error(err));
  }, []);

  // Check login status whenever location changes or storage updates
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  // Optional: Listen to localStorage changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

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

        {/* Hide rest if on cart page */}
        {!isCartPage && (
          <>
            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <FaBars
                className="text-xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-gray-100 px-3 py-2 rounded-md w-1/3">
              <FaSearch className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Search Gifts, Cakes, Flowers..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center space-x-5 text-gray-700 text-sm">
              <span className="hidden md:inline">₹ INR</span>
              <FaShoppingCart
                className="cursor-pointer text-xl"
                onClick={() => navigate("/cart")}
              />
              {isLoggedIn ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-sm text-red-500"
                >
                  <FaUserAlt className="text-xl" />
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center gap-2 text-sm text-blue-500"
                >
                  <FaUserAlt className="text-xl" />
                  Login
                </button>
              )}
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
                onClick={() => navigate("/cart")}
              />
              {isLoggedIn ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1 text-red-500"
                >
                  <FaUserAlt className="text-lg" />
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center gap-1 text-blue-500"
                >
                  <FaUserAlt className="text-lg" />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
