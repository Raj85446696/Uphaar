import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../../cards.json';

const ProductDetailCard = () => {
  const { id ,category} = useParams();
  const product = cardsData.find(item => item.id.toString() === id && item.category.toLowerCase() === category.toLowerCase());

  if (!product) {
    return <div className="text-center mt-10 text-red-600">Product not found</div>;
  }

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-3xl p-6">
        {/* Left */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-20 h-24 rounded-xl border-2 border-pink-200 shadow overflow-hidden hover:scale-105 transition-transform">
                <img src={product.image} alt="thumb" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center">
            <img src={product.image} alt={product.title} className="rounded-3xl shadow-lg w-full max-h-[500px]" />
          </div>
        </div>

        {/* Right */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <div className="flex items-center text-xl font-semibold text-pink-600 space-x-3">
            <span>₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-gray-500 line-through text-base">₹{product.originalPrice}</span>
                <span className="text-green-600 text-base font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-green-700">⭐ 5 | 256 Reviews</p>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gift Receiver’s Location</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400" placeholder="Enter location" />
          </div>

          {/* Time Slot */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Delivery Date & Time Slot</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400" placeholder="Tomorrow 10AM-12PM" />
          </div>

          {/* Offers */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Offers Available</h3>
            <div className="bg-pink-50 border-l-4 border-pink-400 p-3 rounded-lg text-sm">
              💰 Assured Cashback up to ₹100 via Paytm UPI
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-lg text-sm">
              📱 10% off up to ₹200 via Airtel Payments Bank (min. ₹999)
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-lg text-sm">
              💸 Get up to ₹500 via Wallet or ₹250 via UPI (MobiKwik)
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
            <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 px-4 rounded-xl text-sm font-semibold shadow-lg hover:scale-105 transition-transform">
              🛒 Add to Cart
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-xl shadow font-semibold hover:scale-105 transition-transform">
              🛍️ Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
