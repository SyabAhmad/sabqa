import { useState } from "react";
import { Link } from "react-router-dom";
import { menuCategories } from "../data/menuData";

export default function Order() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("shawarma");

  const addToCart = (item) => {
    const existing = cart.find((c) => c.name === item.name);
    if (existing) {
      setCart(cart.map((c) => c.name === item.name ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (name, delta) => {
    setCart(cart.map((c) => {
      if (c.name === name) {
        const newQty = c.quantity + delta;
        return newQty > 0 ? { ...c, quantity: newQty } : c;
      }
      return c;
    }).filter((c) => c.quantity > 0));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return "";
    let message = "🛒 *Order from Sabqa*\n\n";
    cart.forEach((item) => {
      message += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} SAR\n`;
    });
    message += `\n*Total: ${total} SAR*`;
    return encodeURIComponent(message);
  };

  const activeItems = menuCategories.find((c) => c.id === activeCategory)?.items || [];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#1A1A2E]">Order Now</h1>
              <p className="text-gray-500 text-sm">Build your perfect meal</p>
            </div>
            {cart.length > 0 && (
              <div className="text-right">
                <p className="text-2xl font-bold text-[#E85A4F]">{total} SAR</p>
                <p className="text-sm text-gray-500">{cart.length} items</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            {/* Category Pills - Same as Menu */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#E85A4F] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span>{cat.name.split("|")[0].trim()}</span>
                </button>
              ))}
            </div>

            {/* Category Title */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{menuCategories.find((c) => c.id === activeCategory)?.icon}</span>
              <h2 className="text-xl font-bold text-[#1A1A2E]">
                {menuCategories.find((c) => c.id === activeCategory)?.name.split("|")[0].trim()}
              </h2>
            </div>

            {/* Items Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {activeItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-[#1A1A2E]">{item.name}</h4>
                      <span className="text-lg font-bold text-[#E85A4F]">{item.price} SAR</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full py-2 bg-[#1A1A2E] text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors"
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* All Categories Link */}
            <div className="mt-8 text-center">
              <Link to="/menu" className="text-[#E85A4F] font-medium hover:underline">
                View Full Menu →
              </Link>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">Your Order</h3>

              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛒</span>
                  </div>
                  <p className="text-gray-500 mb-2">No items yet</p>
                  <p className="text-gray-400 text-sm">Add items from the menu</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                    {cart.map((item) => (
                      <div key={item.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-[#1A1A2E] text-sm">{item.name}</h5>
                          <p className="text-gray-500 text-xs">{item.price} SAR</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.name, -1)}
                            className="w-6 h-6 bg-white rounded-full font-bold text-[#1A1A2E] hover:bg-gray-200 text-sm"
                          >
                            −
                          </button>
                          <span className="font-medium text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, 1)}
                            className="w-6 h-6 bg-white rounded-full font-bold text-[#1A1A2E] hover:bg-gray-200 text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total</span>
                      <span className="text-2xl font-bold text-[#E85A4F]">{total} SAR</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/966567622152?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#1DB954] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send Order
                  </a>
                  <button
                    onClick={() => setCart([])}
                    className="w-full mt-2 py-2 text-gray-500 hover:text-[#E85A4F] text-sm"
                  >
                    Clear All
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}