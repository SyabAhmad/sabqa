import { businessInfo } from "../data/menuData";

export default function Location() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Al+Imam+Ali+Ibn+Abi+Taleb+St,+Al+Malaz,+Riyadh";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Find <span className="text-[#E85A4F]">Us</span>
          </h1>
          <p className="text-gray-400 text-xl">Visit us in Al Malaz, Riyadh</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF5F4] rounded-3xl p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-8xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Al Malaz, Riyadh</h3>
                <p className="text-gray-600">Al Imam Ali Ibn Abi Taleb St</p>
                <p className="text-gray-500">Riyadh 12832, Saudi Arabia</p>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-2xl p-4 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5!2d46.7089!3d24.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ2JzIwLjYiTiA0NsKwNDInMzAuNiJX!5e0!3m2!1sen!2ssa!4v1630000000000"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sabqa Location"
                className="rounded-2xl"
              />
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#E85A4F] text-white rounded-xl font-medium hover:bg-[#d44a3f] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="py-20 bg-[#FFF5F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#E85A4F]/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#E85A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E]">Opening Hours</h3>
                  <p className="text-gray-500">Every day of the week</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#FFF5F4] rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕐</span>
                    <span className="font-medium text-[#1A1A2E]">Monday - Sunday</span>
                  </div>
                  <span className="font-bold text-[#E85A4F]">12:00 PM - 2:00 AM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 text-green-700">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-medium">We're currently open!</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E]">Contact Us</h3>
                  <p className="text-gray-500">Reach out anytime</p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+966567622152"
                  className="flex items-center gap-4 p-4 bg-[#FFF5F4] rounded-xl hover:bg-[#FFE8E5] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#E85A4F] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-.56-.95-1.03-1.55-1.43-.18-.12-.4-.18-.63-.18s-.45-.06-.63-.18c-.6-.4-1.99-1-2.67-.36-.35.32-.15.89.32 1.56 1.29 1.86 2.89 3.45 4.9 4.57 2.59 1.45 5.28 2.34 7.86 2.64.4.05 1.02.07 1.54.07.48 0 1.03-.08 1.51-.22.72-.21 1.37-.77 1.71-1.26.16-.23.2-.51.11-.77-.13-.39-.56-.68-.99-.76z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E]">+966 56 762 2152</p>
                    <p className="text-sm text-gray-500">Call us</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/966567622152?text=Hi! I want to order from Sabqa`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#FFF5F4] rounded-xl hover:bg-[#FFE8E5] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E]">WhatsApp Order</p>
                    <p className="text-sm text-gray-500">Order from anywhere</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D9488] font-bold text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-4xl font-bold text-[#1A1A2E] mt-2">How We Serve</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🍽️", title: "Dine-in", desc: "Enjoy your meal in our cozy, air-conditioned space. Perfect for family gatherings and friend meetups." },
              { icon: "🛍️", title: "Takeaway", desc: "Quick pickup service - grab your order and go. Ideal for busy people on the move." },
              { icon: "💬", title: "WhatsApp Order", desc: "Order ahead via WhatsApp and skip the wait. We'll prepare your food ready for pickup." },
            ].map((service, i) => (
              <div key={i} className="text-center p-8 bg-[#FFF5F4] rounded-3xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parking Info */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🚗</div>
          <h2 className="text-3xl font-bold text-white mb-4">Easy Parking Available</h2>
          <p className="text-gray-400 text-lg">
            Street parking available right outside. Easy access from Al Imam Ali Ibn Abi Taleb Street in Al Malaz.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#E85A4F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">See You Soon!</h2>
          <p className="text-white/80 text-lg mb-8">
            Whether you're craving shawarma, burgers, or a refreshing drink - we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/966567622152?text=Hi! I want to order from Sabqa`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#E85A4F] rounded-xl font-bold text-lg hover:bg-[#FFF5F4] transition-colors"
            >
              Order Now
            </a>
            <a
              href="tel:+966567622152"
              className="px-8 py-4 bg-[#1A1A2E] text-white rounded-xl font-bold text-lg hover:bg-[#2D2D4A] transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}