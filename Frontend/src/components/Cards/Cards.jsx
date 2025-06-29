import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cardsData from "../../cards.json";

const Cards = ({ category }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isProductRoute = location.pathname.startsWith("/product");

  const filteredProducts = cardsData.filter((item) =>
    item.category.toLowerCase().includes(category?.toLowerCase())
  );

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  const handleCardClick = (id) => {
    navigate(`/products/${category}/${id}`);
  };

  return (
    <div className="bg-[#fdfdf7] p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {category === "Birthday" && "🎂 "}
        {category === "Anniversary" && "💍 "}
        {category === "Congratulations" && "👏 "}
        {category === "Love N Romance" && "❤️ "}
        {category === "Thank You" && "🙏 "}
        {category} Gifts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => handleCardClick(item.id)} // Pass ID
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-cover rounded-t"
            />
            <div className="p-3">
              <p className="text-sm font-medium line-clamp-2">{item.title}</p>
              <p className="text-xs text-gray-500 italic">{item.category}</p>
              <div className="mt-2">
                {item.originalPrice && (
                  <span className="text-gray-500 line-through mr-2">
                    ₹{item.originalPrice}
                  </span>
                )}
                <span className="text-black font-bold">₹{item.price}</span>
                {item.originalPrice > item.price && (
                  <p className="text-xs text-green-600 font-semibold mt-1">
                    {Math.round(
                      ((item.originalPrice - item.price) / item.originalPrice) * 100
                    )}
                    % OFF
                  </p>
                )}
              </div>

              {isProductRoute && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-105 transition-transform duration-300 text-white py-2 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl"
                >
                  🛒 Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
