import { Link } from "react-router-dom";
import { businessInfo, featuredItems, services } from "../data/menuData";

const foodImages = {
  shawarma: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=400&fit=crop",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop",
  drinks: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop",
  grill: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=400&fit=crop",
  hero: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop",
};

const reviewImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#FFF5F4] via-white to-[#FFF9F8] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#E85A4F]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#E85A4F]/10 text-[#E85A4F] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#E85A4F] rounded-full animate-pulse"></span>
                Open Daily: 12PM - 2AM
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A2E] mb-4 leading-tight">
                Tasty Bites
                <span className="block text-[#E85A4F]">Made Fresh</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Your go-to spot for authentic shawarma, juicy burgers, crispy wraps, and refreshing drinks in the heart of Riyadh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/menu"
                  className="px-8 py-4 bg-[#E85A4F] text-white rounded-xl font-bold text-lg hover:bg-[#d44a3f] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  View Menu
                </Link>
                <a
                  href={`https://wa.me/966567622152?text=Hi! I want to order from Sabqa`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#20BD5A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-6 mt-10">
                <div className="flex -space-x-3">
                  {reviewImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Customer"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="ml-1 font-bold text-[#1A1A2E]">{businessInfo.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500">{businessInfo.reviews}+ reviews</p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E85A4F]/20 to-[#0D9488]/20 rounded-3xl rotate-6"></div>
                <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src={foodImages.hero}
                    alt="Delicious shawarma and burgers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white font-bold text-xl">Original Shawarma</p>
                    <p className="text-white/80">7 SAR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-[#1A1A2E] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-[#E85A4F]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Dine-in</h4>
                <p className="text-gray-400 text-sm">Cozy space</p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-[#0D9488]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Takeaway</h4>
                <p className="text-gray-400 text-sm">Quick pickup</p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">WhatsApp</h4>
                <p className="text-gray-400 text-sm">Order easily</p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-[#FBBF24]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">4.8 Rating</h4>
                <p className="text-gray-400 text-sm">84+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#E85A4F] font-bold text-sm uppercase tracking-wider">Most Popular</span>
            <h2 className="text-4xl font-bold text-[#1A1A2E] mt-2">Customer Favorites</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              These items keep our customers coming back for more
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Original Shawarma", price: 7, category: "shawarma", img: foodImages.shawarma },
              { name: "Smash Burger", price: 18, category: "burgers", img: foodImages.burger },
              { name: "Sabqa Signature", price: 25, category: "grills", img: foodImages.grill },
              { name: "Iced Karak", price: 9, category: "iced", img: foodImages.drinks },
              { name: "Zinger Club", price: 16, category: "clubs", img: foodImages.burger },
              { name: "Animal Style Fries", price: 18, category: "fries", img: foodImages.fries },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-4 rounded-2xl bg-gradient-to-br from-[#FFF5F4] to-white border border-gray-100 hover:border-[#E85A4F] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-[#1A1A2E] text-sm mb-1">{item.name}</h4>
                <p className="text-[#E85A4F] font-bold">{item.price} SAR</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A2E] text-white rounded-xl font-medium hover:bg-[#2D2D4A] transition-colors"
            >
              View Full Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#FFF5F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FBBF24]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#E85A4F]">4.8</div>
              <div className="text-gray-600 mt-1 font-medium">Google Rating</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E85A4F]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#E85A4F]">84+</div>
              <div className="text-gray-600 mt-1 font-medium">Happy Customers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#E85A4F]">50+</div>
              <div className="text-gray-600 mt-1 font-medium">Menu Items</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1A1A2E]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#1A1A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#E85A4F]">14h</div>
              <div className="text-gray-600 mt-1 font-medium">Daily Open</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider">How to Order</span>
            <h2 className="text-4xl font-bold text-[#1A1A2E] mt-2">Choose Your Way</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-2xl overflow-hidden bg-white border-2 border-gray-100 hover:border-[#0D9488] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop" 
                  alt="Dine-in" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#E85A4F]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Dine-in</h3>
                <p className="text-gray-600">Enjoy your meal in our cozy, air-conditioned space</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden bg-white border-2 border-gray-100 hover:border-[#0D9488] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop" 
                  alt="Takeaway" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Takeaway</h3>
                <p className="text-gray-600">Quick pickup for busy lifestyles</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden bg-white border-2 border-gray-100 hover:border-[#0D9488] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop" 
                  alt="WhatsApp Order" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">WhatsApp Order</h3>
                <p className="text-gray-600">Order directly via WhatsApp - fast & easy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#E85A4F] to-[#f97375]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Taste the Best?</h2>
          <p className="text-white/80 text-lg mb-8">
            Order now via WhatsApp and get your favorite delivered or pick up!
          </p>
          <a
            href={`https://wa.me/966567622152?text=Hi! I want to order from Sabqa`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#E85A4F] rounded-xl font-bold text-lg hover:bg-[#FFF5F4] transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order Now on WhatsApp
          </a>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#E85A4F] font-bold text-sm uppercase tracking-wider">Find Us</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">Visit Us in Al Malaz</h2>
              <p className="text-gray-400 text-lg mb-8">
                Located in the heart of Al Malaz, Riyadh. Easy to find, easy to love.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-[#E85A4F]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Al Imam Ali Ibn Abi Taleb St, Al Malaz</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-[#E85A4F]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Open Daily: 12:00 PM - 2:00 AM</span>
                </div>
              </div>
              <Link
                to="/location"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#E85A4F] text-white rounded-xl font-medium hover:bg-[#d44a3f] transition-colors"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-[#2D2D4A] rounded-2xl h-80 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}