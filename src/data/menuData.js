export const businessInfo = {
  name: "Sabqa | سبقة",
  tagline: "Your Go-To Spot for Tasty Bites",
  description: "Casual fast-food restaurant serving shawarma, burgers, wraps, grills & refreshing drinks in Riyadh",
  phone: "+966 56 762 2152",
  whatsapp: "+966 56 762 2152",
  address: "Al Imam Ali Ibn Abi Taleb St, Malaz, Riyadh 12832",
  rating: 4.8,
  reviews: 84,
  priceRange: "1-20 SAR",
  cuisine: "Shawarma, burgers, wraps, grilled items, snacks",
  type: "Casual fast-food restaurant / cafe",
  position: { lat: 24.7749, lng: 46.7089 },
};

export const menuCategories = [
  {
    id: "shawarma",
    name: "Shawarma | شاورما",
    icon: "🥙",
    items: [
      { name: "Original", price: 7, description: "Classic shawarma roll" },
      { name: "Saroukh", price: 14, description: "Spicy twisted shawarma" },
      { name: "Arabi", price: 18, description: "Arabic style with extra veggies" },
      { name: "Sahen (Plate)", price: 24, description: "Full plate with rice" },
    ],
  },
  {
    id: "burgers",
    name: "Burgers | برجر",
    icon: "🍔",
    items: [
      { name: "Smash Burger", price: 18, description: "Crispy patty with cheese" },
      { name: "Tikka Classic", price: 15, description: "Chicken tikka flavored" },
      { name: "Zinger Mighty", price: 15, description: "Spicy fried chicken" },
      { name: "Ruler Classic", price: 16, description: "Double patty delight" },
    ],
  },
  {
    id: "clubs",
    name: "Clubs | كلب",
    icon: "🥪",
    items: [
      { name: "Grilled Cheese Club", price: 13, description: "Loaded with melted cheese" },
      { name: "Shawarma Club", price: 16, description: "Shawarma in club format" },
      { name: "Zinger Club", price: 16, description: "Spicy chicken club" },
      { name: "Zesty Tikka Club", price: 16, description: "Tikka with zesty sauce" },
      { name: "Cheesy Beef Club", price: 18, description: "Beef with extra cheese" },
    ],
  },
  {
    id: "rolls",
    name: "Rolls & Wraps | رولز",
    icon: "🌯",
    items: [
      { name: "Eggs & Chips Paratha", price: 8, description: "Desi style breakfast wrap" },
      { name: "Beef Keema Paratha", price: 12, description: "Spicy minced beef" },
      { name: "Tikka Kathi Roll", price: 12, description: "Chicken tikka kathi" },
      { name: "Zafran Kathi Roll", price: 13, description: "Saffron flavored" },
      { name: "Mighty Zinger Wrap", price: 13, description: "Spicy zinger wrap" },
      { name: "Adana Kebap Wrap", price: 16, description: "Turkish style kebap" },
    ],
  },
  {
    id: "grills",
    name: "Grills | مشويات",
    icon: "🔥",
    items: [
      { name: "Smoky Tikka", price: 21, description: "Smoky chicken tikka" },
      { name: "Pahadi Tikka", price: 21, description: "Green chili tikka" },
      { name: "Jujeh Kebap", price: 23, description: "Juicy chicken kebap" },
      { name: "Adana Kebap", price: 32, description: "Spicy minced lamb" },
      { name: "Grilled Chooza", price: 24, description: "Desi style chicken" },
      { name: "Sabqa Signature", price: 25, description: "House special" },
    ],
  },
  {
    id: "fries",
    name: "Fries | بطاطس",
    icon: "🍟",
    items: [
      { name: "Just Fries", price: 6, description: "Classic crispy fries" },
      { name: "Madras Style Fries", price: 12, description: "Indian masala style" },
      { name: "Chili Tikka Fries", price: 16, description: "Tikka chili loaded" },
      { name: "Animal Style Fries", price: 18, description: "Cheese & secret sauce" },
    ],
  },
  {
    iced: "iced_beverages",
    name: "Iced Beverages | مشروبات مثلجة",
    icon: "🧊",
    items: [
      { name: "Iced Americano", price: 8, description: "Classic iced coffee" },
      { name: "Iced Karak", price: 9, description: "Strong spiced chai" },
      { name: "Iced Zafran", price: 10, description: "Saffron milk coffee" },
      { name: "Mango Iced Tea", price: 14, description: "Sweet mango tea" },
      { name: "Orange Iced Tea", price: 14, description: "Citrus refresh" },
      { name: "Peach Iced Tea", price: 14, description: "Peach flavored tea" },
    ],
  },
  {
    id: "mojitos",
    name: "Mojitos |موخيتو",
    icon: "🍹",
    items: [
      { name: "Triple Berry", price: 16, description: "Mixed berries" },
      { name: "Tropical Passion", price: 16, description: "Passion fruit" },
      { name: "Mango Minty", price: 16, description: "Mango & mint" },
      { name: "Wild Hibiscus", price: 16, description: "Floral hibiscus" },
    ],
  },
  {
    id: "juices",
    name: "Fresh Juices | عصائر طازجة",
    icon: "🧃",
    items: [
      { name: "Mint Lemon", price: 9, description: "Refreshing mint lemon" },
      { name: "Pomegranate", price: 11, description: "Fresh pomegranate" },
      { name: "Strawberry", price: 11, description: "Sweet strawberry" },
      { name: "Orange", price: 12, description: "Freshly squeezed" },
    ],
  },
  {
    id: "blended",
    name: "Blended Drinks | مشروبات مخفوقة",
    icon: "🥤",
    items: [
      { name: "Turtle Mocha", price: 16, description: "Chocolate caramel" },
      { name: "Cookies & Cream", price: 16, description: "Cookie blended" },
      { name: "Salted Caramel", price: 16, description: "Sweet salty" },
      { name: "Ward Berry", price: 16, description: "Mixed berries" },
      { name: "Nutty Avocado", price: 16, description: "Creamy avocado" },
    ],
  },
];

export const featuredItems = [
  { name: "Original Shawarma", price: 7, category: "shawarma", icon: "🥙" },
  { name: "Smash Burger", price: 18, category: "burgers", icon: "🍔" },
  { name: "Sabqa Signature", price: 25, category: "grills", icon: "🔥" },
  { name: "Iced Karak", price: 9, category: "iced", icon: "🧊" },
  { name: "Zinger Club", price: 16, category: "clubs", icon: "🥪" },
  { name: "Animal Style Fries", price: 18, category: "fries", icon: "🍟" },
];

export const services = [
  { name: "Dine-in", icon: "🍽️", description: "Enjoy your meal in our cozy space" },
  { name: "Takeaway", icon: "🛍️", description: "Quick pickup for busy lifestyles" },
  { name: "WhatsApp Order", icon: "💬", description: "Order directly via WhatsApp" },
];