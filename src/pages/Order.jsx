import { useState } from "react";
import { menuCategories } from "../data/menuData";

export default function Order() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("shawarma");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item, category) => {
    const existing = cart.find((c) => c.name === item.name);
    if (existing) {
      setCart(cart.map((c) => c.name === item.name ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { ...item, category, quantity: 1 }]);
    }
  };

  const removeFromCart = (name) => {
    setCart(cart.filter((c) => c.name !== name));
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
    let message = "🛒 *New Order from Sabqa Website*\n\n";
    cart.forEach((item) => {
      message += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} SAR\n`;
    });
    message += `\n*Total: ${total} SAR*\n\n`;
    message += "Please confirm my order. Thank you!";
    return encodeURIComponent(message);
  };

  const categoryColors = {
    shawarma: { accent: "bg-amber-500", text: "text-amber-600" },
    burgers: { accent: "bg-orange-500", text: "text-orange-600" },
    clubs: { accent: "bg-yellow-500", text: "text-yellow-600" },
    rolls: { accent: "bg-red-500", text: "text-red-600" },
    grills: { accent: "bg-stone-500", text: "text-stone-600" },
    fries: { accent: "bg-yellow-500", text: "text-yellow-700" },
    iced_beverages: { accent: "bg-cyan-500", text: "text-cyan-600" },
    mojitos: { accent: "bg-green-500", text: "text-green-600" },
    juices: { accent: "bg-emerald-500", text: "text-emerald-600" },
    blended: { accent: "bg-rose-500", text: "text-rose-600" },
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero */}
      <section className="py-12 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Place Your <span className="text-[#E85A4F]">Order</span>
          </h1>
          <p className="text-gray-400">Add items to your cart and order via WhatsApp</p>
        </div>
      </section>

      {/* Cart Button (Mobile) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl font-bold ${
            cart.length > 0 ? "bg-[#E85A4F]" : "bg-gray-400"
          } text-white`}
        >
          <span className="text-xl">🛒</span>
          <span>Cart ({cart.length})</span>
          {cart.length > 0 && (
            <span className="bg-white text-[#E85A4F] px-2 py-0.5 rounded-full text-sm">
              {total} SAR
            </span>
          )}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Menu */}
          <div className="flex-1">
            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#E85A4F] text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.name.split("|")[0].trim()}</span>
                </button>
              ))}
            </div>

            {/* Items */}
            <div className="grid sm:grid-cols-2 gap-4">
              {menuCategories
                .find((c) => c.id === activeCategory)
                ?.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-[#1A1A2E] text-lg">{item.name}</h4>
                      <span className="text-xl font-bold text-[#E85A4F]">{item.price} SAR</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                    <button
                      onClick={() => addToCart(item, activeCategory)}
                      className="w-full py-2.5 bg-[#E85A4F] text-white rounded-xl font-medium hover:bg-[#d44a3f] transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Cart Sidebar (Desktop) */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-28">
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                🛒 Your Order
                {cart.length > 0 && (
                  <span className="bg-[#E85A4F] text-white text-xs px-2 py-1 rounded-full">
                    {cart.length}
                  </span>
                )}
              </h3>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🛒</div>
                  <p className="text-gray-500">Your cart is empty</p>
                  <p className="text-gray-400 text-sm">Add items from the menu</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-3 bg-[#FFF5F4] rounded-xl">
                      <div className="flex-1">
                        <h5 className="font-medium text-[#1A1A2E]">{item.name}</h5>
                        <p className="text-sm text-gray-500">{item.price} SAR each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.name, -1)}
                          className="w-8 h-8 bg-white rounded-lg font-bold text-[#E85A4F] hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="font-bold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, 1)}
                          className="w-8 h-8 bg-white rounded-lg font-bold text-[#E85A4F] hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {cart.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Total:</span>
                    <span className="text-2xl font-bold text-[#E85A4F]">{total} SAR</span>
                  </div>
                  <a
                    href={`https://wa.me/966567622152?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20BD5A] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order via WhatsApp
                  </a>
                  <button
                    onClick={() => setCart([])}
                    className="w-full mt-2 py-2 text-gray-500 hover:text-[#E85A4F] text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cart Modal */}
      {showCart && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#1A1A2E]">Your Order</h3>
                <button onClick={() => setShowCart(false)} className="text-gray-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.name} className="flex items-center justify-between p-4 bg-[#FFF5F4] rounded-xl">
                        <div className="flex-1">
                          <h5 className="font-medium text-[#1A1A2E]">{item.name}</h5>
                          <p className="text-sm text-gray-500">{item.price} SAR</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.name, -1)}
                            className="w-8 h-8 bg-white rounded-lg font-bold text-[#E85A4F]"
                          >
                            -
                          </button>
                          <span className="font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, 1)}
                            className="w-8 h-8 bg-white rounded-lg font-bold text-[#E85A4F]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Total:</span>
                    <span className="text-2xl font-bold text-[#E85A4F]">{total} SAR</span>
                  </div>

                  <a
                    href={`https://wa.me/966567622152?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-xl font-bold mb-2"
                  >
                    Order via WhatsApp
                  </a>
                  <button
                    onClick={() => setCart([])}
                    className="w-full py-3 text-gray-500 hover:text-[#E85A4F]"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}