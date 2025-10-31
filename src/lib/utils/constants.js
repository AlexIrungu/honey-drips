// Menu Data
export const menuData = {
  breakfast: {
    title: "Breakfast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2680",
    categories: [
      {
        name: "Hot Beverages",
        items: [
          { name: "African Tea", price: 50 },
          { name: "Special Tea", price: 100 },
          { name: "Milk", price: 80 },
          { name: "Lemon Tea", price: 70 },
          { name: "Lemon Coffee", price: 80 },
          { name: "Lemon Tea With Honey", price: 100 },
          { name: "Honey", price: 30 },
          { name: "Extra Coffee Sachet", price: 20 },
          { name: "Dawa Moto (Concussion)", price: 130 },
          { name: "Uji Power Without Honey", price: 120 },
          { name: "Uji Power With Honey", price: 150 },
          { name: "Tea Masala", price: 80 },
          { name: "Hot Water", price: 20 },
          { name: "Lemon Coffee With Honey", price: 120 },
        ],
      },
      {
        name: "Snacks",
        items: [
          { name: "Ndazi", price: 30 },
          { name: "Chapati White/Brown", price: 50 },
          { name: "Beef Sausage", price: 60 },
          { name: "Beef Samosa", price: 50 },
          { name: "Smokie", price: 50 },
          { name: "Pancakes (2pcs)", price: 120 },
          { name: "Chapati Mayai", price: 150 },
          { name: "Bacon", price: 230 },
        ],
      },
      {
        name: "Egg Dishes",
        items: [
          { name: "Spanish Omelette", price: 150 },
          { name: "Plain Omelette", price: 100 },
          { name: "2 Boiled Eggs", price: 100 },
          { name: "Fried Eggs (Sunnyside Up)", price: 100 },
          { name: "Scrambled Eggs", price: 100 },
        ],
      },
      {
        name: "Tamanduni Snacks",
        items: [
          { name: "Nduma", price: 80 },
          { name: "Deep Fried Nduma", price: 100 },
          { name: "Cassava", price: 80 },
          { name: "Plantain", price: 150 },
        ],
      },
      {
        name: "Special Breakfast",
        items: [
          { 
            name: "Best", 
            price: 400,
            description: "Bacon, sausage, 1 egg, andazi"
          },
          { 
            name: "Mini Breakfast", 
            price: 450,
            description: "African tea/white/black chocolate/milo/coffee with sausage, 1 egg and bacon, Andazi"
          },
          { 
            name: "Full Breakfast", 
            price: 800,
            description: "African tea/white/black chocolate/milo/coffee with sausage, 2 eggs, baked beans and glass of juice/fruits/Andazi"
          },
        ],
      },
    ],
  },
  fishMeat: {
    title: "Fish & Meat",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2676",
    categories: [
      {
        name: "Main Dishes",
        items: [
          { name: "Tilapia (Whole)", price: 600 },
          { name: "Tilapia (Half)", price: 350 },
          { name: "Fried Chicken", price: 400 },
          { name: "Grilled Chicken", price: 450 },
          { name: "Beef Stew", price: 300 },
          { name: "Goat Stew", price: 350 },
          { name: "Chicken Stew", price: 350 },
        ],
      },
    ],
  },
  plainDishes: {
    title: "Plain Dishes",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680",
    categories: [
      {
        name: "Carbohydrates",
        items: [
          { name: "Ugali", price: 50 },
          { name: "Rice (Plain)", price: 150 },
          { name: "Pilau", price: 200 },
          { name: "Chips", price: 150 },
          { name: "Chapati", price: 50 },
        ],
      },
      {
        name: "Vegetables & Salads",
        items: [
          { name: "Managu, Terere, Spinach", price: 150 },
          { name: "Cabbage Plain", price: 100 },
          { name: "Peas Plain", price: 200 },
          { name: "Lyonnaise Potatoes", price: 200 },
          { name: "Tropical Fruit Salad", price: 100 },
          { name: "Kachumbari", price: 100 },
          { name: "Garden Salad", price: 150 },
        ],
      },
    ],
  },
  specials: {
    title: "Specials & Drinks",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2669",
    categories: [
      {
        name: "House Specials",
        items: [
          { 
            name: "Honey Drips Platter", 
            price: 1200,
            description: "Chips, rice, beef, pilau, chicken, chapo, vegetables, juice, and salad"
          },
          { 
            name: "Family Feast", 
            price: 2500,
            description: "Perfect for 4 people. Includes mixed grill, ugali, rice, vegetables, and drinks"
          },
        ],
      },
      {
        name: "Fresh Juices",
        items: [
          { name: "Orange Juice", price: 100 },
          { name: "Passion Juice", price: 100 },
          { name: "Mango Juice", price: 100 },
          { name: "Mixed Fruit Juice", price: 120 },
          { name: "Fresh Yoghurt", price: 150 },
        ],
      },
      {
        name: "Soft Drinks",
        items: [
          { name: "Soda (300ml)", price: 50 },
          { name: "Soda (500ml)", price: 80 },
          { name: "Water (500ml)", price: 50 },
          { name: "Water (1L)", price: 80 },
        ],
      },
    ],
  },
};

// Room Data
export const roomData = [
  {
    id: "single",
    name: "Single Bed",
    price: 2000,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2670",
    features: [
      "One bed with fresh beddings",
      "Beautiful Thika town view",
      "Room service up to 8PM",
      "Treated mosquito net",
      "Private bathroom",
      "Bedside cabinet",
      "Smart TV",
      "Closet",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2670",
      "https://images.unsplash.com/photo-1631049035182-249067d7618e?q=80&w=2670",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574",
    ],
  },
  {
    id: "twin",
    name: "Twin Bed",
    price: 2500,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670",
    features: [
      "Two beds with fresh beddings",
      "Beautiful Thika town view",
      "Room service up to 8PM",
      "Treated mosquito net",
      "Private bathroom",
      "Bedside cabinet",
      "Smart TV",
      "Closet",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574",
    ],
  },
];

// Contact Information
export const contactInfo = {
  address: {
    street: "Mama Ngina Street St.",
    location: "Opposite Maathai",
    city: "Thika",
  },
  emails: [
    "honeydrips@sparq.co.ke",
    "honeydripsthika@gmail.com",
  ],
  phone: "+254 715 757 458",
  hours: {
    weekdays: "Monday - Saturday: 8am - 6pm",
    weekend: "Sunday: 10am - 4pm",
  },
};