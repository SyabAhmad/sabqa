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

const itemImages = {
  // Shawarma
  "Original": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
  "Saroukh": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
  "Arabi": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
  "Sahen (Plate)": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
  // Burgers
  "Smash Burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  "Tikka Classic": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  "Zinger Mighty": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  "Ruler Classic": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  // Clubs
  "Grilled Cheese Club": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
  "Shawarma Club": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
  "Zinger Club": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  "Zesty Tikka Club": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  "Cheesy Beef Club": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
  // Rolls
  "Eggs & Chips Paratha": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
  "Beef Keema Paratha": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
  "Tikka Kathi Roll": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
  "Zafran Kathi Roll": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
  "Mighty Zinger Wrap": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  "Adana Kebap Wrap": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
  // Grills
  "Smoky Tikka": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
  "Pahadi Tikka": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
  "Jujeh Kebap": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
  "Adana Kebap": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
  "Grilled Chooza": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  "Sabqa Signature": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
  // Fries
  "Just Fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
  "Madras Style Fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
  "Chili Tikka Fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
  "Animal Style Fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
  // Iced Drinks
  "Iced Americano": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
  "Iced Karak": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop",
  "Iced Zafran": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
  "Mango Iced Tea": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
  "Orange Iced Tea": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
  "Peach Iced Tea": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
  // Mojitos
  "Triple Berry": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop",
  "Tropical Passion": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop",
  "Mango Minty": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop",
  "Wild Hibiscus": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop",
  // Juices
  "Mint Lemon": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
  "Pomegranate": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
  "Strawberry": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
  "Orange": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
  // Blended
  "Turtle Mocha": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
  "Cookies & Cream": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
  "Salted Caramel": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
  "Ward Berry": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
  "Nutty Avocado": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
};

export const menuCategories = [
  {
    id: "shawarma",
    name: "Shawarma | شاورما",
    icon: "🥙",
    items: [
      { name: "Original", price: 7, description: "Classic shawarma roll", image: itemImages["Original"] },
      { name: "Saroukh", price: 14, description: "Spicy twisted shawarma", image: itemImages["Saroukh"] },
      { name: "Arabi", price: 18, description: "Arabic style with extra veggies", image: itemImages["Arabi"] },
      { name: "Sahen (Plate)", price: 24, description: "Full plate with rice", image: itemImages["Sahen (Plate)"] },
    ],
  },
  {
    id: "burgers",
    name: "Burgers | برجر",
    icon: "🍔",
    items: [
      { name: "Smash Burger", price: 18, description: "Crispy patty with cheese", image: itemImages["Smash Burger"] },
      { name: "Tikka Classic", price: 15, description: "Chicken tikka flavored", image: itemImages["Tikka Classic"] },
      { name: "Zinger Mighty", price: 15, description: "Spicy fried chicken", image: itemImages["Zinger Mighty"] },
      { name: "Ruler Classic", price: 16, description: "Double patty delight", image: itemImages["Ruler Classic"] },
    ],
  },
  {
    id: "clubs",
    name: "Clubs | كلب",
    icon: "🥪",
    items: [
      { name: "Grilled Cheese Club", price: 13, description: "Loaded with melted cheese", image: itemImages["Grilled Cheese Club"] },
      { name: "Shawarma Club", price: 16, description: "Shawarma in club format", image: itemImages["Shawarma Club"] },
      { name: "Zinger Club", price: 16, description: "Spicy chicken club", image: itemImages["Zinger Club"] },
      { name: "Zesty Tikka Club", price: 16, description: "Tikka with zesty sauce", image: itemImages["Zesty Tikka Club"] },
      { name: "Cheesy Beef Club", price: 18, description: "Beef with extra cheese", image: itemImages["Cheesy Beef Club"] },
    ],
  },
  {
    id: "rolls",
    name: "Rolls & Wraps | رولز",
    icon: "🌯",
    items: [
      { name: "Eggs & Chips Paratha", price: 8, description: "Desi style breakfast wrap", image: itemImages["Eggs & Chips Paratha"] },
      { name: "Beef Keema Paratha", price: 12, description: "Spicy minced beef", image: itemImages["Beef Keema Paratha"] },
      { name: "Tikka Kathi Roll", price: 12, description: "Chicken tikka kathi", image: itemImages["Tikka Kathi Roll"] },
      { name: "Zafran Kathi Roll", price: 13, description: "Saffron flavored", image: itemImages["Zafran Kathi Roll"] },
      { name: "Mighty Zinger Wrap", price: 13, description: "Spicy zinger wrap", image: itemImages["Mighty Zinger Wrap"] },
      { name: "Adana Kebap Wrap", price: 16, description: "Turkish style kebap", image: itemImages["Adana Kebap Wrap"] },
    ],
  },
  {
    id: "grills",
    name: "Grills | مشويات",
    icon: "🔥",
    items: [
      { name: "Smoky Tikka", price: 21, description: "Smoky chicken tikka", image: itemImages["Smoky Tikka"] },
      { name: "Pahadi Tikka", price: 21, description: "Green chili tikka", image: itemImages["Pahadi Tikka"] },
      { name: "Jujeh Kebap", price: 23, description: "Juicy chicken kebap", image: itemImages["Jujeh Kebap"] },
      { name: "Adana Kebap", price: 32, description: "Spicy minced lamb", image: itemImages["Adana Kebap"] },
      { name: "Grilled Chooza", price: 24, description: "Desi style chicken", image: itemImages["Grilled Chooza"] },
      { name: "Sabqa Signature", price: 25, description: "House special", image: itemImages["Sabqa Signature"] },
    ],
  },
  {
    id: "fries",
    name: "Fries | بطاطس",
    icon: "🍟",
    items: [
      { name: "Just Fries", price: 6, description: "Classic crispy fries", image: itemImages["Just Fries"] },
      { name: "Madras Style Fries", price: 12, description: "Indian masala style", image: itemImages["Madras Style Fries"] },
      { name: "Chili Tikka Fries", price: 16, description: "Tikka chili loaded", image: itemImages["Chili Tikka Fries"] },
      { name: "Animal Style Fries", price: 18, description: "Cheese & secret sauce", image: itemImages["Animal Style Fries"] },
    ],
  },
  {
    id: "iced_beverages",
    name: "Iced Beverages | مشروبات مثلجة",
    icon: "🧊",
    items: [
      { name: "Iced Americano", price: 8, description: "Classic iced coffee", image: itemImages["Iced Americano"] },
      { name: "Iced Karak", price: 9, description: "Strong spiced chai", image: itemImages["Iced Karak"] },
      { name: "Iced Zafran", price: 10, description: "Saffron milk coffee", image: itemImages["Iced Zafran"] },
      { name: "Mango Iced Tea", price: 14, description: "Sweet mango tea", image: itemImages["Mango Iced Tea"] },
      { name: "Orange Iced Tea", price: 14, description: "Citrus refresh", image: itemImages["Orange Iced Tea"] },
      { name: "Peach Iced Tea", price: 14, description: "Peach flavored tea", image: itemImages["Peach Iced Tea"] },
    ],
  },
  {
    id: "mojitos",
    name: "Mojitos |موخيتو",
    icon: "🍹",
    items: [
      { name: "Triple Berry", price: 16, description: "Mixed berries", image: itemImages["Triple Berry"] },
      { name: "Tropical Passion", price: 16, description: "Passion fruit", image: itemImages["Tropical Passion"] },
      { name: "Mango Minty", price: 16, description: "Mango & mint", image: itemImages["Mango Minty"] },
      { name: "Wild Hibiscus", price: 16, description: "Floral hibiscus", image: itemImages["Wild Hibiscus"] },
    ],
  },
  {
    id: "juices",
    name: "Fresh Juices | عصائر طازجة",
    icon: "🧃",
    items: [
      { name: "Mint Lemon", price: 9, description: "Refreshing mint lemon", image: itemImages["Mint Lemon"] },
      { name: "Pomegranate", price: 11, description: "Fresh pomegranate", image: itemImages["Pomegranate"] },
      { name: "Strawberry", price: 11, description: "Sweet strawberry", image: itemImages["Strawberry"] },
      { name: "Orange", price: 12, description: "Freshly squeezed", image: itemImages["Orange"] },
    ],
  },
  {
    id: "blended",
    name: "Blended Drinks | مشروبات مخفوقة",
    icon: "🥤",
    items: [
      { name: "Turtle Mocha", price: 16, description: "Chocolate caramel", image: itemImages["Turtle Mocha"] },
      { name: "Cookies & Cream", price: 16, description: "Cookie blended", image: itemImages["Cookies & Cream"] },
      { name: "Salted Caramel", price: 16, description: "Sweet salty", image: itemImages["Salted Caramel"] },
      { name: "Ward Berry", price: 16, description: "Mixed berries", image: itemImages["Ward Berry"] },
      { name: "Nutty Avocado", price: 16, description: "Creamy avocado", image: itemImages["Nutty Avocado"] },
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