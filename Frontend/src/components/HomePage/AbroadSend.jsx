import React from 'react';

const countries = [
    { name: "USA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdFadG-gIvlZdL8V5UdH4lMBSGPE0LyG3Yw&s" },
    { name: "Canada", img: "https://media.istockphoto.com/id/1178852373/photo/canadian-flag-flying-over-old-quebec-city.jpg?s=612x612&w=0&k=20&c=0dsOXraklB5DCLYeYVpmDxfgquLlVSalCcHacs0LgTY=" },
    { name: "UAE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRQuxiV5mpOunFHZRGgcnNhalt-6i6hQzKw&s" },
    { name: "Singapore", img: "https://static.toiimg.com/photo/msid-107700466,width-96,height-65.cms" },
    { name: "Australia", img: "https://thumbs.dreamstime.com/b/sydney-opera-house-australia-14210813.jpg" },
    { name: "Germany", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvrD8_s-u5ohTkC_sZG0ofaLEwVsVTw2yGw&s" },
    { name: "UK", img: "https://media.istockphoto.com/id/1430153563/photo/big-ben-with-bridge-over-thames-and-flag-of-england-against-blue-sky-in-london-england-uk.jpg?s=612x612&w=0&k=20&c=ytP9xfJV7h8Mc4oBADkLj6whBTZOrWA9Krc-7VRR6Dw=" },
    { name: "Worldwide", img: "https://cdn.prod.website-files.com/64700b7f349828a5b8dc81ab/64f1099a63f4a7f142facd79_UPS-International-shipping-Services-compared.png" },
];

export default function AbroadSend() {
    return (
        <div className="bg-[#ffff] px-6 py-10 text-center mb-5">
            <h2 className="text-3xl font-bold mb-8">Send Gifts Abroad</h2>

            {/* Country Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
                {countries.map((country, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={country.img}
                            alt={country.name}
                            className="w-32 h-40 object-cover rounded-md shadow transition-transform duration-300 hover:scale-110"
                        />
                        <p className="mt-2 font-medium">{country.name}</p>
                    </div>
                ))}
            </div>


            {/* Text Section */}
            <div className="mt-10 text-left max-w-full mx-auto p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                    Celebrate Occasions with India #1 Online Gift Store
                </h3>
                <p className="text-gray-600 mt-1">
                    Thoughtfully curated 139,821 Gift Ideas. Get 2-hour Delivery & Free Shipping in India
                </p>

                <h4 className="mt-6 text-lg font-semibold text-gray-800">
                    UPHAAR: No. 1 Online Gift Shop
                </h4>
                <p className="text-gray-600 mt-2 leading-relaxed">
                    UPHAAR is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all special days like Birthdays, Anniversaries, Valentine’s Day, and festivals like Rakshabandhan (Rakhi), Diwali, Christmas, etc.
                    Our online gift shop offers a wide range of gifts including <span className="text-blue-500 underline cursor-pointer">flower bouquets</span> and yummy cakes, which we deliver to all major cities in under 2 hours. We can also provide personalised gifts, potted plants, chocolates, gift hampers, digital gifts, and festive treats to make the occasion even more joyous.
                </p>
                <p className="text-gray-600 mt-2">
                    Our distribution network and strong physical and online presence make us the best choice to send gifts to 19,000+ PIN codes across India. Our remarkable distribution network and over 400 retail stores ensure your gifts reach on time and in excellent condition!
                </p>
                <p className="text-blue-600 font-medium mt-4 cursor-pointer hover:underline">Read More...</p>
            </div>
        </div>
    );
}
