import React from "react";
import { Heart, Star, ShoppingCart, Clock } from "lucide-react";
function SpecialDishes({
  img,
  alt,
  description,
  price,
  rating = 4.8,
  cookTime = "15-20 min",
}) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 max-w-sm mx-auto">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full">
          <Clock className="w-4 h-4 inline mr-1" />
          {cookTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
            {alt}
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{rating}</span>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed line-clamp-3 text-left">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            <ShoppingCart className="w-4 h-4 inline mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialDishes;
