import React from 'react';
import { useCart } from '../Cards/CartContext';
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footor';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = async () => {
    try {
      // calculate total amount (in paise)
      const totalAmount = Math.round(
        cartItems.reduce((total, item) => total + item.price, 0) * 1.18 * 100
      );

      // 1. Create order from backend with total amount
      const res = await fetch("http://localhost:8000/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }), // send amount
      });

      const order = await res.json();

      // 2. Open Razorpay checkout
      const options = {
        key: "rzp_test_REtdhsrLtQMD5l",
        amount: order.amount,
        currency: order.currency,
        name: "UPHAAR",
        description: "Test Transaction",
        order_id: order.id,
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        theme: { color: "#4CAF50" },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment failed", error);
    }
  };


  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-600 text-center p-8">
          <h2 className="text-3xl font-bold mb-4">🛒 Your Cart is Empty</h2>
          <p className="mb-6">Looks like you haven't added anything to your cart yet.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition"
          >
            🛍️ Go to Shopping
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4 flex items-center gap-2">
            🛒 Your Cart
          </h2>

          <div className="space-y-6 mb-8">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-xl border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">Category: {item.category}</p>
                  </div>
                </div>
                <div className="text-pink-600 font-bold text-xl mt-4 md:mt-0">₹{item.price}</div>
              </div>
            ))}
          </div>

          {/* Bill Summary */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🧾 Billing Details</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  ₹
                  {cartItems.reduce((total, item) => total + item.price, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%)</span>
                <span>
                  ₹
                  {Math.round(
                    cartItems.reduce((total, item) => total + item.price, 0) * 0.18
                  )}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total Amount</span>
                <span>
                  ₹
                  {Math.round(
                    cartItems.reduce((total, item) => total + item.price, 0) * 1.18
                  )}
                </span>
              </div>
            </div>

            {/* Buy Now Button */}
            <div className="mt-6 text-right">
              <button onClick={handleBuyNow} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow font-semibold text-sm transition-transform hover:scale-105">
                🛍️ Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
