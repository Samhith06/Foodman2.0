import React from "react";
import { Heart, Star, ShoppingCart, Clock } from "lucide-react";

const menuData = {
  Breakfast: {
    "All Items": [
      {
        id: 1,
        name: "Classic Pancakes",
        description:
          "Fluffy buttermilk pancakes served with maple syrup and fresh berries",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1587731556938-44d19f1a7ef8",
        rating: 4.7,
        cookTime: "10-15 min",
        category: "Main Courses",
      },
      {
        id: 2,
        name: "Avocado Toast",
        description:
          "Fresh avocado on artisan bread with poached egg and cherry tomatoes",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        rating: 4.8,
        cookTime: "8-12 min",
        category: "Main Courses",
      },
      {
        id: 3,
        name: "Fresh Orange Juice",
        description:
          "Freshly squeezed orange juice, vitamin-rich and energizing",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1571687949920-19d3f67c89b6",
        rating: 4.6,
        cookTime: "2-3 min",
        category: "Drinks",
      },
    ],
  },

  Lunch: {
    "All Items": [
      {
        id: 4,
        name: "Chicken Caesar Salad",
        description:
          "Grilled chicken breast with crisp romaine lettuce, parmesan, and caesar dressing",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1569058242250-0b72c1f9db25",
        rating: 4.7,
        cookTime: "12-15 min",
        category: "Main Courses",
      },
      {
        id: 5,
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
        rating: 4.8,
        cookTime: "15-20 min",
        category: "Main Courses",
      },
      {
        id: 6,
        name: "Buffalo Wings",
        description: "Crispy chicken wings tossed in spicy buffalo sauce",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1606755962773-0e31f6f529d6",
        rating: 4.5,
        cookTime: "15-18 min",
        category: "Appetizers",
      },
      {
        id: 7,
        name: "Chocolate Brownie",
        description: "Rich chocolate brownie with vanilla ice cream",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1606312614072-52f3c632d8f7",
        rating: 4.9,
        cookTime: "5-8 min",
        category: "Desserts",
      },
      {
        id: 8,
        name: "Iced Coffee",
        description: "Cold brew coffee served over ice with cream",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        rating: 4.4,
        cookTime: "2-3 min",
        category: "Drinks",
      },
    ],
    Appetizers: [
      {
        id: 6,
        name: "Buffalo Wings",
        description: "Crispy chicken wings tossed in spicy buffalo sauce",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1606755962773-0e31f6f529d6",
        rating: 4.5,
        cookTime: "15-18 min",
        category: "Appetizers",
      },
      {
        id: 9,
        name: "Bruschetta",
        description: "Grilled bread with fresh tomato, garlic, and basil",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1604908812853-d57d2a08f11f",
        rating: 4.6,
        cookTime: "8-10 min",
        category: "Appetizers",
      },
    ],
    "Main Courses": [
      {
        id: 4,
        name: "Chicken Caesar Salad",
        description:
          "Grilled chicken breast with crisp romaine lettuce, parmesan, and caesar dressing",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1569058242250-0b72c1f9db25",
        rating: 4.7,
        cookTime: "12-15 min",
        category: "Main Courses",
      },
      {
        id: 5,
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
        rating: 4.8,
        cookTime: "15-20 min",
        category: "Main Courses",
      },
      {
        id: 10,
        name: "Pasta Alfredo",
        description: "Creamy fettuccine alfredo with parmesan",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1601924579134-cc53f3f7e90a",
        rating: 4.7,
        cookTime: "12-15 min",
        category: "Main Courses",
      },
    ],
    Desserts: [
      {
        id: 7,
        name: "Chocolate Brownie",
        description: "Rich chocolate brownie with vanilla ice cream",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1606312614072-52f3c632d8f7",
        rating: 4.9,
        cookTime: "5-8 min",
        category: "Desserts",
      },
      {
        id: 11,
        name: "Cheesecake",
        description: "New York-style cheesecake with strawberry topping",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
        rating: 4.8,
        cookTime: "6-8 min",
        category: "Desserts",
      },
    ],
    Drinks: [
      {
        id: 8,
        name: "Iced Coffee",
        description: "Cold brew coffee served over ice with cream",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        rating: 4.4,
        cookTime: "2-3 min",
        category: "Drinks",
      },
      {
        id: 12,
        name: "Lemonade",
        description: "Refreshing homemade lemonade",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931",
        rating: 4.5,
        cookTime: "2-3 min",
        category: "Drinks",
      },
    ],
  },

  Snacks: {
    "All Items": [
      {
        id: 17,
        name: "French Fries",
        description: "Golden crispy fries with sea salt",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1550456491-5885c7a6c9b9",
        rating: 4.3,
        cookTime: "8-10 min",
        category: "Appetizers",
      },
      {
        id: 18,
        name: "Onion Rings",
        description: "Beer-battered onion rings with ranch dip",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1617196036735-6f07d5c45c66",
        rating: 4.4,
        cookTime: "10-12 min",
        category: "Appetizers",
      },
      {
        id: 19,
        name: "Fruit Cup",
        description: "Fresh seasonal fruits with honey drizzle",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        rating: 4.5,
        cookTime: "2-3 min",
        category: "Desserts",
      },
    ],
  },

  Dinner: {
    "All Items": [
      {
        id: 20,
        name: "Grilled Salmon",
        description: "Atlantic salmon with lemon butter sauce and vegetables",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        rating: 4.8,
        cookTime: "20-25 min",
        category: "Main Courses",
      },
      {
        id: 21,
        name: "Ribeye Steak",
        description: "Premium ribeye steak with garlic mashed potatoes",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1604908177522-b6c0b2f0b87f",
        rating: 4.9,
        cookTime: "25-30 min",
        category: "Main Courses",
      },
      {
        id: 22,
        name: "Lobster Bisque",
        description: "Creamy lobster soup with sherry and herbs",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1588186915726-c9d3ac53b8e0",
        rating: 4.7,
        cookTime: "8-10 min",
        category: "Appetizers",
      },
      {
        id: 23,
        name: "Crème Brûlée",
        description: "Classic French dessert with caramelized sugar top",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1632902429230-d648c6d61ad0",
        rating: 4.8,
        cookTime: "5-7 min",
        category: "Desserts",
      },
    ],
    Appetizers: [
      {
        id: 22,
        name: "Lobster Bisque",
        description: "Creamy lobster soup with sherry and herbs",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1588186915726-c9d3ac53b8e0",
        rating: 4.7,
        cookTime: "8-10 min",
        category: "Appetizers",
      },
      {
        id: 24,
        name: "Stuffed Mushrooms",
        description:
          "Button mushrooms stuffed with herb breadcrumbs and cheese",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1603133872878-684f12166704",
        rating: 4.5,
        cookTime: "12-15 min",
        category: "Appetizers",
      },
    ],
    "Main Courses": [
      {
        id: 20,
        name: "Grilled Salmon",
        description: "Atlantic salmon with lemon butter sauce and vegetables",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        rating: 4.8,
        cookTime: "20-25 min",
        category: "Main Courses",
      },
      {
        id: 21,
        name: "Ribeye Steak",
        description: "Premium ribeye steak with garlic mashed potatoes",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1604908177522-b6c0b2f0b87f",
        rating: 4.9,
        cookTime: "25-30 min",
        category: "Main Courses",
      },
      {
        id: 25,
        name: "Lasagna",
        description: "Layers of pasta with meat sauce, ricotta, and mozzarella",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1603133872784-00f4e7b58e94",
        rating: 4.7,
        cookTime: "20-25 min",
        category: "Main Courses",
      },
    ],
    Desserts: [
      {
        id: 23,
        name: "Crème Brûlée",
        description: "Classic French dessert with caramelized sugar top",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1632902429230-d648c6d61ad0",
        rating: 4.8,
        cookTime: "5-7 min",
        category: "Desserts",
      },
      {
        id: 26,
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with molten center and vanilla ice cream",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1605478951766-63dd90f1a93b",
        rating: 4.9,
        cookTime: "8-10 min",
        category: "Desserts",
      },
    ],
    Drinks: [
      {
        id: 27,
        name: "Red Wine",
        description: "House red wine - perfect with dinner",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1547514701-42782101795c",
        rating: 4.3,
        cookTime: "1-2 min",
        category: "Drinks",
      },
      {
        id: 28,
        name: "Sparkling Water",
        description: "Premium sparkling water with lime",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1622484212541-d56c5a491091",
        rating: 4.2,
        cookTime: "1 min",
        category: "Drinks",
      },
    ],
  },
};

function RenderMenuItems() {}

function Menubottom({ selectedTiming, selectedCategory }) {
  const timingData = menuData[selectedTiming];
  const categoryData = timingData[selectedCategory];

  return (
    <div className="grid grid-cols-3 gap-4 mx-10 mb-15 px-5 justify-center items-cneter">
      {categoryData.map((data) => (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 max-w-sm mx-auto">
          {/* Image Container */}
          <div className="relative overflow-hidden">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 inline mr-1" />
              {data.cookTime}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                {data.name}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{data.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed line-clamp-3 text-left">
              {data.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">
                ${data.price}
              </span>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <ShoppingCart className="w-4 h-4 inline mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menubottom;
