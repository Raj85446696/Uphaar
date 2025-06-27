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
    {
      title: "Party Gifts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY0vEHN4Tv7pFYOD6ffT2aBQBkzYEVFveXQ&s",
    },
    {
      title: "Girls Gifts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY0vEHN4Tv7pFYOD6ffT2aBQBkzYEVFveXQ&s",
    },
    {
      title: "Birthday Special",
      img: "https://plus.unsplash.com/premium_photo-1663839412026-51a44cfadfb8?fm=jpg&q=60&w=3000",
    },
    {
      title: "Birthday Special",
      img: "https://plus.unsplash.com/premium_photo-1663839412026-51a44cfadfb8?fm=jpg&q=60&w=3000",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 py-6 bg-gray-50 min-h-screen gap-6">
      
      {/* Cards Section */}
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition duration-300 overflow-hidden h-60"
            >
              <img src={card.img} alt={card.title} className="w-full h-28 object-cover" />
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{card.title}</h3>
                <p className="text-xs text-gray-500 hover:text-blue-600 cursor-pointer transition">
                  Explore now →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full h-[500px] lg:w-[270px] max-w-sm bg-white p-4 shadow-md rounded-xl border border-gray-200 mx-auto">
        <h2 className="text-base font-semibold text-center text-green-600 mb-3">
          Find the Perfect Gift
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2 text-xs">
          {[
            { label: "Occasion", name: "occasion", options: ["Birthday", "Anniversary", "Valentine's Day", "Diwali"] },
            { label: "Relation", name: "relation", options: ["Mother", "Friend", "Partner", "Boss"] },
            { label: "Budget (₹)", name: "budget", options: ["500", "1000", "2000"] },
            { label: "Age Group", name: "age", options: ["Kids", "Teens", "Adults", "Seniors"] },
            { label: "Gift Type", name: "type", options: ["Handmade", "Personalized", "Decor", "Tech"] },
          ].map(({ label, name, options }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <select
                name={name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-green-400 transition"
              >
                <option value="">-- Select --</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              rows="2"
              placeholder="Write a note..."
              className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-1 focus:ring-green-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-1.5 rounded font-medium transition text-sm"
          >
            🎯 Suggest Gift
          </button>
        </form>

        {result && (
          <div className="mt-3 text-center text-gray-700 font-medium border-t pt-2 text-xs">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftFinderSection;
