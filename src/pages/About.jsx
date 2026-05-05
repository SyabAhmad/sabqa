import { businessInfo } from "../data/menuData";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F4] via-white to-[#FFF9F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A2E] mb-6">
            About <span className="text-[#E85A4F]">Sabqa</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing the authentic taste of shawarma, burgers, and Middle Eastern cuisine to the heart of Riyadh since 2020.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl font-bold text-[#1A1A2E] mt-2 mb-6">From a Small Stall to a Local Favorite</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Sabqa started with a simple vision: to serve authentic, delicious shawarma and fast food that everyone can enjoy, at prices that won't break the bank.
                </p>
                <p>
                  What began as a small takeaway stall in Al Malaz has grown into a beloved local spot, serving hundreds of happy customers every week.
                </p>
                <p>
                  Our secret? Fresh ingredients, secret spices, and a commitment to quality that keeps our customers coming back for more.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square bg-gradient-to-br from-[#E85A4F]/20 to-[#0D9488]/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🥙✨</div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E]">Tasty Since 2020</h3>
                  <p className="text-gray-500">5+ years of serving Riyadh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#FFF5F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#E85A4F] font-bold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl font-bold text-[#1A1A2E] mt-2">What Drives Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🍽️", title: "Quality First", desc: "We never compromise on ingredients. Fresh, quality meats and veggies in every order." },
              { icon: "💰", title: "Budget-Friendly", desc: "Great taste doesn't have to be expensive. Enjoy premium food at 1-20 SAR prices." },
              { icon: "❤️", title: "Customer Love", desc: "Your satisfaction is our priority. 84+ reviews and counting prove our commitment." },
              { icon: "⚡", title: "Speed & Service", desc: "Quick preparation, friendly service. Get your food fast, exactly how you want it." },
              { icon: "🌿", title: "Fresh Ingredients", desc: "Daily fresh produce, homemade sauces. No preservatives, just real food." },
              { icon: "🔄", title: "Consistency", desc: "Same great taste every time. That's the Sabqa promise." },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#E85A4F] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Our Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years in Business", icon: "📅" },
              { number: "84+", label: "Google Reviews", icon: "⭐" },
              { number: "50+", label: "Menu Items", icon: "🍔" },
              { number: "4.8", label: "Average Rating", icon: "🏆" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white/5 rounded-2xl">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-5xl font-bold text-[#E85A4F]">{stat.number}</div>
                <div className="text-gray-400 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl font-bold text-[#1A1A2E] mt-2">A Menu for Every Craving</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🥙", title: "Shawarma", desc: "Original, Saroukh, Arabi & more" },
              { icon: "🍔", title: "Burgers", desc: "Smash, Tikka, Zinger & Ruler" },
              { icon: "🥪", title: "Clubs", desc: "Grilled Cheese, Shawarma, Zinger" },
              { icon: "🌯", title: "Rolls & Wraps", desc: "Paratha, Kathi, Tikka rolls" },
              { icon: "🔥", title: "Grills", desc: "Tikka, Kebap, Chooza & Signature" },
              { icon: "🍟", title: "Fries", desc: "Madras, Chili Tikka, Animal style" },
              { icon: "🧊", title: "Iced Drinks", desc: "Americano, Karak, Zafran & teas" },
              { icon: "🍹", title: "Mojitos", desc: "Berry, Tropical, Mango & more" },
              { icon: "🧃", title: "Fresh Juices", desc: "Mint Lemon, Pomegranate, Orange" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-[#FFF5F4] rounded-xl hover:shadow-md transition-shadow">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E]">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#0D9488]/10 to-[#E85A4F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-[#E85A4F] font-bold text-sm uppercase tracking-wider">Why Sabqa</span>
              <h2 className="text-4xl font-bold text-[#1A1A2E] mt-2 mb-6">Why Locals Love Us</h2>
              <ul className="space-y-4">
                {[
                  "Fresh ingredients, daily preparation",
                  "Budget-friendly prices (1-20 SAR)",
                  "Quick service - perfect for busy schedules",
                  "Consistent quality across all items",
                  "Friendly staff always ready to help",
                  "Clean & comfortable dine-in space",
                  "Easy WhatsApp ordering available",
                  "Open late - perfect for night cravings",
                ].map((reason, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-[#E85A4F] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-3xl font-bold text-[#E85A4F]">4.8</div>
                <p className="text-gray-600">Google Rating</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-4xl mb-2">📍</div>
                <div className="text-3xl font-bold text-[#0D9488]">Al Malaz</div>
                <p className="text-gray-600">Location</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-4xl mb-2">🕐</div>
                <div className="text-3xl font-bold text-[#E85A4F]">14h</div>
                <p className="text-gray-600">Daily Open</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-4xl mb-2">💬</div>
                <div className="text-3xl font-bold text-[#25D366]">WA</div>
                <p className="text-gray-600">Order Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E85A4F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Come Taste the Difference!</h2>
          <p className="text-white/80 text-lg mb-8">
            Visit us in Al Malaz or order via WhatsApp. We'd love to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/966567622152?text=Hi! I want to order from Sabqa`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#E85A4F] rounded-xl font-bold text-lg hover:bg-[#FFF5F4] transition-colors"
            >
              Order on WhatsApp
            </a>
            <a
              href="/location"
              className="px-8 py-4 bg-[#1A1A2E] text-white rounded-xl font-bold text-lg hover:bg-[#2D2D4A] transition-colors"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}