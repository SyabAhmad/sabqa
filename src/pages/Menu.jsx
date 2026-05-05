import { Link } from "react-router-dom";
import { menuCategories } from "../data/menuData";

const categoryImages = {
  shawarma: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=600&fit=crop",
  burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
  clubs: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop",
  rolls: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=600&fit=crop",
  grills: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop",
  iced_beverages: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop",
  mojitos: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=600&fit=crop",
  juices: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&h=600&fit=crop",
  blended: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop",
};

export default function Menu() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A2E] mb-2">Our Menu</h1>
          <p className="text-gray-500">Fresh ingredients, authentic taste</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {menuCategories.map((cat) => (
              <span
                key={cat.id}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-gray-100 text-gray-600"
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name.split("|")[0].trim()}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* All Categories */}
        {menuCategories.map((category) => (
          <div key={category.id} className="mb-12">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A2E]">{category.name.split("|")[0].trim()}</h2>
                <p className="text-gray-500">{category.items.length} items</p>
              </div>
            </div>

            {/* Items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#E85A4F] hover:shadow-lg transition-all"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-[#1A1A2E] mb-1">{item.name}</h4>
                    <p className="text-gray-400 text-xs mb-2 line-clamp-1">{item.description}</p>
                    <span className="text-lg font-bold text-[#E85A4F]">{item.price} SAR</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#E85A4F] py-12 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Order Now</h2>
          <p className="text-white/80 mb-6">Contact us on WhatsApp to place your order</p>
          <a
            href={`https://wa.me/966567622152?text=Hi! I'd like to order`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#E85A4F] rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}