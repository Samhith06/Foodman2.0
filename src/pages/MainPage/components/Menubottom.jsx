import React from "react";
import { Heart, Star, ShoppingCart, Clock } from "lucide-react";
import { useCart } from "../../../contexts/CartContext";

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
        price: 199,
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
        price: 199,
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
        price: 249,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        rating: 4.8,
        cookTime: "20-25 min",
        category: "Main Courses",
      },
      {
        id: 21,
        name: "Ribeye Steak",
        description: "Premium ribeye steak with garlic mashed potatoes",
        price: 329,
        image: "https://images.unsplash.com/photo-1604908177522-b6c0b2f0b87f",
        rating: 4.9,
        cookTime: "25-30 min",
        category: "Main Courses",
      },
      {
        id: 25,
        name: "Lasagna",
        description: "Layers of pasta with meat sauce, ricotta, and mozzarella",
        price: 189,
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
        price: 109,
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
        price: 299,
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
        rating: 430,
        cookTime: "1-2 min",
        category: "Drinks",
      },
      {
        id: 28,
        name: "Sparkling Water",
        description: "Premium sparkling water with lime",
        price: 299,
        image: "https://images.unsplash.com/photo-1622484212541-d56c5a491091",
        rating: 4.2,
        cookTime: "1 min",
        category: "Drinks",
      },
    ],
  },
};

const MenuItemCard = ({ data }) => {
  const { addItem, getItemQuantity } = useCart();

  const itemId = `menu-${data.id}`;
  const quantity = getItemQuantity(itemId);

  const handleAddToCart = () => {
    const item = {
      id: itemId,
      name: data.name,
      price: `$${data.price}`,
      image: data.image,
      description: data.description,
      type: "menu",
    };
    addItem(item);
  };

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 sm:hover:-translate-y-2 w-full max-w-sm mx-auto">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black bg-opacity-60 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
          {data.cookTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors leading-tight">
            {data.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-600 flex-shrink-0 ml-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{data.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-3 text-left">
          {data.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-2">
          <span className="text-xl sm:text-2xl font-bold text-gray-900 order-2 sm:order-1 text-center sm:text-left">
            ₹{data.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg order-1 sm:order-2 text-sm sm:text-base w-full sm:w-auto relative"
          >
            <ShoppingCart className="w-4 h-4 inline mr-2" />
            {quantity > 0 ? `Added (${quantity})` : "Add to Cart"}
            {quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                ✓
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

function Menubottom({ selectedTiming, selectedCategory }) {
  const timingData = menuData[selectedTiming];
  const categoryData = timingData?.[selectedCategory] || [];
  if (!categoryData || categoryData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-64 px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            No items available
          </h3>
          <p className="text-gray-600">
            Sorry, we don't have any {selectedCategory.toLowerCase()} for{" "}
            {selectedTiming.toLowerCase()} right now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
        {categoryData.map((data) => (
          <MenuItemCard key={data.id} data={data} />
        ))}
      </div>
      {categoryData.length <= 3 && (
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-500 text-sm sm:text-base">
            More delicious {selectedCategory.toLowerCase()} coming soon!
          </p>
        </div>
      )}
    </div>
  );
}

export default Menubottom;
