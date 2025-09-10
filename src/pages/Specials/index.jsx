import Header from "../../components/Header";
import SpecialDishes from "../MainPage/components/specialdishes";
import { ArrowLeft, Star, Clock, ChefHat } from "lucide-react";
import { NavLink } from "react-router-dom";

// Import your existing images
import card1 from "../../assets/Images/card1.jpeg";
import card2 from "../../assets/Images/card2.jpeg";
import card3 from "../../assets/Images/card3.jpeg";

// Extended specials data
const specialsData = [
  {
    img: card1,
    alt: "Chicken Salad",
    description:
      "Shredded or diced chicken tossed with crisp lettuce, juicy tomatoes, cucumbers, and onions, dressed in a creamy mayo or tangy vinaigrette for a refreshing, protein-packed dish bursting with flavor and crunch.",
    price: "$12.99",
    rating: 4.8,
    cookTime: "15-20 min",
    isNew: true,
    discount: null,
  },
  {
    img: card2,
    alt: "Chicken Pasta",
    description:
      "Tender chicken pieces sautéed with garlic and herbs, then tossed with al dente pasta in a rich, creamy sauce or zesty tomato base, blended with veggies like bell peppers and spinach for a satisfying, flavorful meal.",
    price: "$15.99",
    rating: 4.9,
    cookTime: "20-25 min",
    isNew: false,
    discount: "20% OFF",
  },
  {
    img: card3,
    alt: "Lasagna",
    description:
      "Layers of pasta sheets stacked with seasoned ground meat, rich tomato sauce, creamy béchamel, and melted cheese, baked to golden perfection for a hearty, comforting Italian classic full of bold, savory flavor.",
    price: "$18.99",
    rating: 4.7,
    cookTime: "25-30 min",
    isNew: false,
    discount: null,
  },
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
    alt: "Gourmet Burger",
    description:
      "Premium beef patty with aged cheddar, caramelized onions, crispy bacon, and our signature sauce on a brioche bun, served with truffle fries.",
    price: "$19.99",
    rating: 4.9,
    cookTime: "18-22 min",
    isNew: true,
    discount: null,
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    alt: "Grilled Salmon",
    description:
      "Atlantic salmon fillet grilled to perfection, served with lemon herb butter, roasted vegetables, and wild rice pilaf.",
    price: "$24.99",
    rating: 4.8,
    cookTime: "20-25 min",
    isNew: false,
    discount: "15% OFF",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    alt: "Margherita Pizza",
    description:
      "Wood-fired pizza with San Marzano tomatoes, fresh mozzarella di bufala, basil leaves, and extra virgin olive oil on our signature sourdough crust.",
    price: "$16.99",
    rating: 4.6,
    cookTime: "15-18 min",
    isNew: false,
    discount: null,
  },
  {
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    alt: "Chocolate Lava Cake",
    description:
      "Decadent chocolate cake with a molten center, served warm with vanilla bean ice cream and fresh berries.",
    price: "$9.99",
    rating: 4.9,
    cookTime: "8-12 min",
    isNew: true,
    discount: null,
  },
  {
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    alt: "Seafood Paella",
    description:
      "Traditional Spanish paella with saffron rice, fresh shrimp, mussels, clams, and calamari, cooked in our authentic paella pan.",
    price: "$28.99",
    rating: 4.8,
    cookTime: "30-35 min",
    isNew: false,
    discount: "25% OFF",
  },
  {
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    alt: "Truffle Risotto",
    description:
      "Creamy Arborio rice cooked with white wine, parmesan cheese, and finished with black truffle shavings and fresh herbs.",
    price: "$22.99",
    rating: 4.7,
    cookTime: "25-30 min",
    isNew: true,
    discount: null,
  },
];

export const Specials = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#fc7f09] to-[#e56f00] text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Button */}
              <div className="flex justify-start mb-8">
                <NavLink
                  to="/main"
                  className="inline-flex items-center text-white hover:text-orange-200 transition-colors duration-200"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Menu
                </NavLink>
              </div>

              <div className="flex items-center justify-center mb-6">
                <ChefHat className="w-12 h-12 mr-4" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  Today's Specials
                </h1>
              </div>

              <p className="text-xl sm:text-2xl lg:text-3xl mb-8 opacity-90 leading-relaxed">
                Handcrafted dishes made with the finest ingredients,
                <br className="hidden sm:block" />
                prepared by our expert chefs just for you
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
                <div className="flex items-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-300" />
                  <span>Chef's Recommendations</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-yellow-300" />
                  <span>Limited Time Offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specials Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {specialsData.map((special, index) => (
              <div key={index} className="relative">
                {/* New Badge */}
                {special.isNew && (
                  <div className="absolute -top-3 -left-3 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    NEW!
                  </div>
                )}

                {/* Discount Badge */}
                {special.discount && (
                  <div className="absolute -top-3 -right-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {special.discount}
                  </div>
                )}

                <SpecialDishes
                  img={special.img}
                  alt={special.alt}
                  description={special.description}
                  price={special.price}
                  rating={special.rating}
                  cookTime={special.cookTime}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Can't Decide?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our chef surprise you with a specially curated tasting menu
              featuring the best of our specials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-[#fc7f09] to-[#e56f00] hover:from-[#e56f00] hover:to-[#d65f00] text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Chef's Choice Menu
              </button>
              <NavLink
                to="/main"
                className="bg-white text-[#fc7f09] border-2 border-[#fc7f09] hover:bg-[#fc7f09] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Browse Full Menu
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
