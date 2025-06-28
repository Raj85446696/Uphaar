import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const Footor = () => {
  return (
    <footer className="bg-gray-50 text-sm text-gray-700 border-t font-inter">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {[
          {
            title: "Policy Info",
            items: ["Terms & Conditions", "Privacy Policy", "Terms of Use", "Disclaimer"],
          },
          {
            title: "About Company",
            items: ["About Us", "Team", "Careers", "Testimonials", "News Room", "Blog"],
          },
          {
            title: "UPHAAR Business",
            items: ["Decoration", "Services", "Corporate Service", "Affiliate Program", "Retail Stores", "Franchise"],
          },
          {
            title: "Need Help ?",
            items: ["Contact Us", "FAQs"],
          },
          {
            title: "International Presence",
            items: ["Dubai", "Qatar", "Saudi Arabia", "Singapore"],
          },
        ].map(({ title, items }, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-3 text-gray-900">{title}</h3>
            <ul className="space-y-2 text-gray-600">
              {items.map((item, i) => (
                <li key={i} className="hover:text-green-600 transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscription Box */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Subscribe Now</h3>
          <p className="text-xs mb-4 text-gray-600">Get updates on promotions and offers coupons.</p>
          <form className="sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full sm:w-auto flex-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom Info */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-600 space-y-3">
        <p>
          <strong>Uphaar Private Limited</strong> | CIN: U52300HR2021AERC112222 | Regd. Office: Plot No. 10P, Sector-10, Gurugram, Haryana - 122003
        </p>
        <p>
          Telephone: +91-11-26802680 | Email: <a href="mailto:help@uphaar.com" className="text-blue-500 hover:underline">help@uphaar.com</a> | Grievance Officer: Mr. Ritu Raj Kumar | Contact: +91 9212422000 / 9755-248-248
        </p>
        <p>
          <a href="#" className="text-blue-600 hover:underline">Corporate Social Responsibility (CSR) Policy</a>
        </p>
        <p className="text-gray-500">© 1994-2025 fnp.com. All rights reserved.</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 pb-6">
        {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
          <Icon
            key={index}
            className="text-gray-600 hover:text-green-600 transition text-lg cursor-pointer hover:scale-110"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footor;
