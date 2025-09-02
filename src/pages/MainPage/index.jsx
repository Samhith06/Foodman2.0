import React from "react";
import { useState } from "react";
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

export const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  console.log(selectedCategory);
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
        <div className="flex items-center justify-center gap-5 p-4 m-4 mt-2 pt-2">
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
      </section>
    </div>
  );
};
