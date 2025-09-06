import React from "react";
import { useState, useRef } from "react";
import Header from "../../components/Header";
import Hero from "./components/hero";
import SpecialDishes from "./components/specialdishes";
import Menu from "./components/menu";
import card1 from "../../assets/Images/card1.jpeg";
import card2 from "../../assets/Images/card2.jpeg";
import card3 from "../../assets/Images/card3.jpeg";
import food from "../../assets/Images/Food.jpeg";
import drink from "../../assets/Images/Drink.jpeg";
import dessert from "../../assets/Images/Dessert.jpeg";
import snack from "../../assets/Images/Snacks.jpeg";
import all from "../../assets/Images/All_items.jpeg";
import Slider from "react-slick";

export const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [selectedTiming, setSelectedTiming] = useState("Breakfast");
  const menuRef = useRef(null);
  const timingButtons = [
    { id: "breakfast", label: "Breakfast", icon: "🌅" },
    { id: "lunch", label: "Lunch", icon: "☀️" },
    { id: "snacks", label: "Snacks", icon: "🍿" },
    { id: "dinner", label: "Dinner", icon: "🌙" },
  ];
  console.log("Selected Category:", selectedCategory);
  console.log("Selected Timing:", selectedTiming);

  return (
    <div>
      <Header path="/main" />
      <Hero />
      <div className="flex items-center justify-center flex-col mt-12">
        <h2 className="px-2 text-4xl tracking-tighter lg:text-3xl xl:text-5xl  text-gray-900 font-[700] mb-2 leading-tight text-center">
          Today's Special Dishes
        </h2>
        <p className="px-2 text-lg tracking-tight lg:w-lg lg:text-xl text-gray-500 leading-relaxed font-[500] text-center">
          Each dish promises an unforgettable dining experience, blending
          innovation with tradition to delight your senses.
        </p>
      </div>
      <section className="bg-white p-4 m-4 mt-2 pt-2 2xl:p-8 2xl:m-8 text-center hover:shadow-lg rounded-2xl shadow-gray-300 shadow-md">
        <div className="flex overflow-x-auto gap-6 2xl:gap-10 mt-6 scrollbar-hide">
          <div className="flex-shrink-0 w-[80%] sm:w-[50%] md:w-[33%] lg:w-1/4 min-w-[250px] 2xl:w-1/8">
            <SpecialDishes
              img={card1}
              alt="Chicken Salad"
              description="Shredded or diced chicken tossed with crisp lettuce, juicy tomatoes, cucumbers, and onions, dressed in a creamy mayo or tangy vinaigrette for a refreshing, protein-packed dish bursting with flavor and crunch."
              price="$12.99"
            />
          </div>

          <div className="flex-shrink-0 w-[80%] sm:w-[50%] md:w-[33%] lg:w-1/4 min-w-[250px] 2xl:w-1/8">
            <SpecialDishes
              img={card2}
              alt="Chicken Pasta"
              description="Tender chicken pieces sautéed with garlic and herbs, then tossed with al dente pasta in a rich, creamy sauce or zesty tomato base, blended with veggies like bell peppers and spinach for a satisfying, flavorful meal."
              price="$15.99"
            />
          </div>

          <div className="flex-shrink-0 w-[80%] sm:w-[50%] md:w-[33%] lg:w-1/4 min-w-[250px] 2xl:w-1/8">
            <SpecialDishes
              img={card3}
              alt="Lasagna"
              description="Layers of pasta sheets stacked with seasoned ground meat, rich tomato sauce, creamy béchamel, and melted cheese, baked to golden perfection for a hearty, comforting Italian classic full of bold, savory flavor."
              price="$18.99"
            />
          </div>
          <div className="flex-shrink-0 w-[80%] sm:w-[50%] md:w-[33%] lg:w-1/4 min-w-[250px] 2xl:w-1/8">
            <SpecialDishes
              img={card1}
              alt="Chicken Salad"
              description="Shredded or diced chicken tossed with crisp lettuce, juicy tomatoes, cucumbers, and onions, dressed in a creamy mayo or tangy vinaigrette for a refreshing, protein-packed dish bursting with flavor and crunch."
              price="$12.99"
            />
          </div>

          <div className="flex-shrink-0 w-[80%] sm:w-[50%] md:w-[33%] lg:w-1/4 min-w-[250px] 2xl:w-1/8">
            <SpecialDishes
              img={card2}
              alt="Chicken Pasta"
              description="Tender chicken pieces sautéed with garlic and herbs, then tossed with al dente pasta in a rich, creamy sauce or zesty tomato base, blended with veggies like bell peppers and spinach for a satisfying, flavorful meal."
              price="$15.99"
            />
          </div>
          <div className="flex-shrink-0 w-[80%] sm:w-[50%] md:w-[33%] lg:w-1/4 min-w-[250px] 2xl:w-1/8">
            <SpecialDishes
              img={card3}
              alt="Lasagna"
              description="Layers of pasta sheets stacked with seasoned ground meat, rich tomato sauce, creamy béchamel, and melted cheese, baked to golden perfection for a hearty, comforting Italian classic full of bold, savory flavor."
              price="$18.99"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center flex-col mt-12">
          <h2 className="px-2 text-4xl tracking-tighter lg:text-3xl xl:text-5xl  text-gray-900 font-[700] mb-2 leading-tight text-center">
            Our Menu
          </h2>
          <p className="px-2 text-lg tracking-tight lg:w-lg lg:text-xl text-gray-500 leading-relaxed font-[500] text-center">
            Explore our diverse menu, featuring a wide range of dishes to suit
            every taste and occasion.
          </p>
        </div>
        {/* Enhanced Timing Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 mt-8 mb-8 px-4">
          {timingButtons.map((timing) => (
            <button
              key={timing.id}
              onClick={() => {
                setSelectedTiming(timing.label);

                if (timing.label === "Lunch" || timing.label === "Dinner") {
                  setTimeout(() => {
                    menuRef.current?.scrollIntoView({ behavior: "smooth" });
                  }, 0);
                }
              }}
              className={`
                flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 
                rounded-full font-semibold text-sm sm:text-base lg:text-lg
                transition-all duration-300 transform hover:scale-105
                border-2 shadow-md hover:shadow-lg
                ${
                  selectedTiming === timing.label
                    ? "bg-gradient-to-r from-[#fc7f09] to-[#e67408] text-white border-[#fc7f09] shadow-orange-300"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#fc7f09] hover:text-[#fc7f09] hover:bg-orange-50"
                }
              `}
            >
              <span className="text-base sm:text-lg lg:text-xl">
                {timing.icon}
              </span>
              <span className="hidden sm:inline">{timing.label}</span>
              <span className="sm:hidden">{timing.label.substring(0, 1)}</span>
            </button>
          ))}
        </div>

        {/* Selected Timing Display */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-orange-100 rounded-full">
            <span className="text-[#fc7f09] font-semibold text-lg">
              Now Showing: {selectedTiming} Menu
            </span>
          </div>
        </div>
        {/* Menu Category Cards */}

        {selectedTiming === "Dinner" || selectedTiming === "Lunch" ? (
          <>
            <div
              className="flex items-center justify-center gap-5 p-4 m-4 mt-2 pt-2"
              ref={menuRef}
            >
              <Menu
                food={all}
                alt="All Items"
                onClick={() => setSelectedCategory("All Items")}
              />
              <Menu
                food={snack}
                alt="Appetizers"
                onClick={() => setSelectedCategory("Appetizers")}
              />
              <Menu
                food={food}
                alt="Main Courses"
                onClick={() => setSelectedCategory("Main Courses")}
              />
              <Menu
                food={dessert}
                alt="Desserts"
                onClick={() => setSelectedCategory("Desserts")}
              />
              <Menu
                food={drink}
                alt="Drinks"
                onClick={() => setSelectedCategory("Drinks")}
              />
            </div>
            <div className="text-center mt-6 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <span className="text-gray-700 font-medium">
                  Selected: {selectedCategory}
                </span>
              </div>
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
};
