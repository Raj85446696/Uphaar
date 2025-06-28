import React from "react";
import cardsData from "../../cards.json";

const Cards = ({ category }) => {
  // Filter cards based on passed category prop
  const filteredProducts = cardsData.filter(
    (item) =>
      item.category.toLowerCase().includes(category?.toLowerCase())
  );


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
        {filteredProducts.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-md hover:shadow-lg transition duration-300"
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
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Cards;
