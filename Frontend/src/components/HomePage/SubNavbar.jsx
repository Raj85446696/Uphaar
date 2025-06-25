// src/components/SubNavbar.jsx
const categories = [
  "Birthday", "Occasions", "Anniversary", "Marriage","Cakes", "Corporate","Flowers", "Personalised", 
  "Plants", "Chocolates", "Luxe", "Combos", "Lifestyle", "International", "On Trend"
]

export default function SubNavbar() {
  return (
    <div className="flex space-x-6 overflow-x-auto px-6 py-3 bg-white border-b">
      {categories.map((cat, idx) => (
        <div key={idx} className="relative group cursor-pointer">
          <span className="text-sm font-medium text-gray-800 hover:text-green-600">{cat}</span>
        </div>
      ))}
    </div>
  )
}
