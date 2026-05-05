import { Link } from "react-router-dom";
import { businessInfo } from "../data/menuData";

const aboutImages = {
  hero: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=600&fit=crop",
  story: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&h=600&fit=crop",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=400&fit=crop",
  interior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  team: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
};

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#FFF5F4] via-white to-[#FFF9F8] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#E85A4F]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#E85A4F]/10 text-[#E85A4F] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#E85A4F] rounded-full animate-pulse"></span>
              Since 2020
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A2E] mb-6">
              About <span className="text-[#E85A4F]">Sabqa</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing the authentic taste of shawarma, burgers, and Middle Eastern cuisine to the heart of Riyadh. Your neighborhood favorite since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E85A4F] to-[#0D9488] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutImages.story} 
                  alt="Our story" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl font-bold text-[#1A1A2E] mt-2 mb-6">From a Small Stall to Local Favorite</h2>
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
              <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#E85A4F]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#1A1A2E]">5+ Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#0D9488]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#1A1A2E]">Al Malaz</span>
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
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#E85A4F] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-[#E85A4F]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">Quality First</h3>
              <p className="text-gray-600">We never compromise on ingredients. Fresh, quality meats and veggies in every order.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#0D9488] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">Budget-Friendly</h3>
              <p className="text-gray-600">Great taste doesn't have to be expensive. Enjoy premium food at 1-20 SAR prices.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#E85A4F] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-[#E85A4F]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">Customer Love</h3>
              <p className="text-gray-600">Your satisfaction is our priority. 84+ reviews and counting prove our commitment.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#0D9488] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">Speed & Service</h3>
              <p className="text-gray-600">Quick preparation, friendly service. Get your food fast, exactly how you want it.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#E85A4F] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-[#E85A4F]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600">Daily fresh produce, homemade sauces. No preservatives, just real food.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#0D9488] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">Consistency</h3>
              <p className="text-gray-600">Same great taste every time. That's the Sabqa promise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Our Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#FBBF24]/10 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#E85A4F]">5+</div>
              <div className="text-gray-400 mt-1 font-medium">Years in Business</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#E85A4F]/10 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#E85A4F]">84+</div>
              <div className="text-gray-400 mt-1 font-medium">Google Reviews</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#0D9488]/10 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#E85A4F]">50+</div>
              <div className="text-gray-400 mt-1 font-medium">Menu Items</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#FBBF24]/10 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#E85A4F]">4.8</div>
              <div className="text-gray-400 mt-1 font-medium">Average Rating</div>
            </div>
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
              { title: "Shawarma", desc: "Original, Saroukh, Arabi & more", img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=250&fit=crop" },
              { title: "Burgers", desc: "Smash, Tikka, Zinger & Ruler", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop" },
              { title: "Clubs", desc: "Grilled Cheese, Shawarma, Zinger", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=250&fit=crop" },
              { title: "Rolls & Wraps", desc: "Paratha, Kathi, Tikka rolls", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=250&fit=crop" },
              { title: "Grills", desc: "Tikka, Kebap, Chooza & Signature", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=250&fit=crop" },
              { title: "Fries", desc: "Madras, Chili Tikka, Animal style", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=250&fit=crop" },
              { title: "Iced Drinks", desc: "Americano, Karak, Zafran & teas", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=250&fit=crop" },
              { title: "Mojitos", desc: "Berry, Tropical, Mango & more", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=250&fit=crop" },
              { title: "Fresh Juices", desc: "Mint Lemon, Pomegranate, Orange", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=250&fit=crop" },
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden bg-[#FFF5F4] hover:shadow-lg transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#1A1A2E] text-lg">{item.title}</h4>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                    <div className="w-6 h-6 bg-[#E85A4F] rounded-full flex items-center justify-center flex-shrink-0">
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
              <div className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#FBBF24]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#E85A4F]">4.8</div>
                <p className="text-gray-600 text-sm">Google Rating</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#0D9488]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#0D9488]">Al Malaz</div>
                <p className="text-gray-600 text-sm">Location</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#E85A4F]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#E85A4F]">14h</div>
                <p className="text-gray-600 text-sm">Daily Open</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#25D366]">WhatsApp</div>
                <p className="text-gray-600 text-sm">Order Online</p>
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
            <Link
              to="/location"
              className="px-8 py-4 bg-[#1A1A2E] text-white rounded-xl font-bold text-lg hover:bg-[#2D2D4A] transition-colors"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}