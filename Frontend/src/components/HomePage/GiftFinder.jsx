import React, { useState } from "react";

const GiftFinderSection = () => {
  const [form, setForm] = useState({
    occasion: "",
    relation: "",
    budget: "",
    age: "",
    type: "",
    message: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { occasion, relation, budget } = form;
    if (occasion && relation && budget) {
      setResult(`🎁 Recommended gift: A personalized ${occasion} box for your ${relation} under ₹${budget}`);
    } else {
      setResult("Please fill all required fields.");
    }
  };

  const cardData = [
    {
      title: "Birthday Special",
      img: "https://plus.unsplash.com/premium_photo-1663839412026-51a44cfadfb8?fm=jpg&q=60&w=3000",
    },
    {
      title: "Love & Romance",
      img: "https://ascension.co.in/wp-content/uploads/2025/01/VL01_VL011_VL021_CVL08_CP77_Card3_2KK_1-1.jpg",
    },
    {
      title: "Festive Picks",
      img: "https://images.livemint.com/img/2023/12/18/original/iStock-1218816574_1702905519412.jpg",
    },
    {
      title: "Corporate Gifts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY0vEHN4Tv7pFYOD6ffT2aBQBkzYEVFveXQ&s",
    },
  ];

  return (
    <div className="flex justify-between px-8 py-10 bg-gray-50 min-h-screen">
      {/* Cards Section - 2/4 */}
      <div className="w-2/4 grid grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{card.title}</h3>
              <p className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition">Explore now →</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form Section - 1/4 */}
      <div className="w-1/4 bg-white p-6 shadow-2xl rounded-2xl border border-green-100">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">🎁 Find the Perfect Gift</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {[
            { label: "🎉 Occasion", name: "occasion", options: ["Birthday", "Anniversary", "Valentine's Day", "Diwali"] },
            { label: "👤 Relation", name: "relation", options: ["Mother", "Friend", "Partner", "Boss"] },
            { label: "💰 Budget (₹)", name: "budget", options: ["500", "1000", "2000"] },
            { label: "🎂 Age Group", name: "age", options: ["Kids", "Teens", "Adults", "Seniors"] },
            { label: "🎁 Gift Type", name: "type", options: ["Handmade", "Personalized", "Decor", "Tech"] },
          ].map(({ label, name, options }) => (
            <div key={name}>
              <label className="block mb-1 font-medium text-gray-700">{label}</label>
              <select
                name={name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <option value="">-- Select --</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          {/* Personal Message */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 gap-3">📝 Personal Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              rows="2"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
              placeholder="Write a note for the receiver..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-lg font-semibold tracking-wide hover:scale-[1.02] transition-all"
          >
            🎯 Find Gift
          </button>
        </form>

        {/* Result Display */}
        {result && (
          <div className="mt-6 text-center text-md text-gray-800 font-medium border-t pt-4">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftFinderSection;
