import React from "react";
import basepicture from "../../../assets/Images/backgroundpic.png";
// Update hero.jsx
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-white p-4 m-4 mt-2 pt-1 text-center lg:text-left gap-6 lg:gap-8">
      <div className="max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center lg:items-start order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight text-center lg:text-left">
          Meet, Eat & Enjoy The{" "}
          <span className="text-orange-500">True Taste</span>.
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed font-medium text-center lg:text-left max-w-lg">
          Discover the true essence of culinary delight as you meet eat and
          savor the authentic flavors that define our passion for food.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 hover:text-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-300">
          Order Now
        </button>
      </div>
      <div className="order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <img
          src={basepicture}
          alt="Delicious Food"
          className="rounded-full w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
