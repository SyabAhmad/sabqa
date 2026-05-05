import { useState } from "react";
import { Link } from "react-router-dom";
import { menuCategories } from "../data/menuData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("shawarma");

  const categoryColors = {
    shawarma: { bg: "bg-amber-50", border: "border-amber-300", accent: "text-amber-600" },
    burgers: { bg: "bg-orange-50", border: "border-orange-300", accent: "text-orange-600" },
    clubs: { bg: "bg-yellow-50", border: "border-yellow-300", accent: "text-yellow-600" },
    rolls: { bg: "bg-red-50", border: "border-red-300", accent: "text-red-600" },
    grills: { bg: "bg-stone-50", border: "border-stone-300", accent: "text-stone-600" },
    fries: { bg: "bg-yellow-100", border: "border-yellow-400", accent: "text-yellow-700" },
    iced_beverages: { bg: "bg-cyan-50", border: "border-cyan-300", accent: "text-cyan-600" },
    mojitos: { bg: "bg-green-50", border: "border-green-300", accent: "text-green-600" },
    juices: { bg: "bg-emerald-50", border: "border-emerald-300", accent: "text-emerald-600" },
    blended: { bg: "bg-rose-50", border: "border-rose-300", accent: "text-rose-600" },
  };

  const getColors = (catId) => categoryColors[catId] || categoryColors.shawarma;

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-[#E85A4F]">Menu</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore our delicious selection of shawarma, burgers, wraps, grills, and refreshing drinks
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#E85A4F] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span className="hidden sm:inline">{cat.name.split("|")[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {menuCategories.map((category) => {
          const colors = getColors(category.id);
          return (
            <section
              key={category.id}
              id={category.id}
              className={`mb-16 p-8 rounded-3xl ${colors.bg} border-2 ${colors.border}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl">{category.icon}</span>
                <div>
                  <h2 className={`text-3xl font-bold ${colors.accent}`}>{category.name.split("|")[0].trim()}</h2>
                  <p className="text-gray-500">{category.items.length} items available</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-[#1A1A2E] text-lg">{item.name}</h4>
                      <span className={`text-xl font-bold ${colors.accent}`}>{item.price} SAR</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <Link
                      to="/order"
                      className={`block text-center py-2.5 rounded-xl font-medium text-sm ${colors.accent} bg-white border-2 ${colors.border} group-hover:bg-[#E85A4F] group-hover:text-white group-hover:border-[#E85A4F] transition-all`}
                    >
                      Add to Order
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-16 bg-[#E85A4F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-white/80 text-lg mb-8">
            Click below to start building your order via WhatsApp
          </p>
          <a
            href={`https://wa.me/966567622152?text=Hi! I'd like to order from the menu:`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#E85A4F] rounded-xl font-bold text-lg hover:bg-[#FFF5F4] transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}