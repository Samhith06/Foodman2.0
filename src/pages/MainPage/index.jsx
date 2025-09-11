import React from "react";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import Hero from "./components/hero";
import SpecialDishes from "./components/specialdishes";
import Menu from "./components/menu";
import Menubottom from "./components/Menubottom";
import card1 from "../../assets/Images/card1.jpeg";
import card2 from "../../assets/Images/card2.jpeg";
import card3 from "../../assets/Images/card3.jpeg";
import food from "../../assets/Images/Food.jpeg";
import drink from "../../assets/Images/Drink.jpeg";
import dessert from "../../assets/Images/Dessert.jpeg";
import snack from "../../assets/Images/Snacks.jpeg";
import all from "../../assets/Images/All_items.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [selectedTiming, setSelectedTiming] = useState("Breakfast");
  const menuRef = useRef(null);
  const menuSectionRef = useRef(null);

  // Function to scroll to menu section
  const scrollToMenu = () => {
    if (menuSectionRef.current) {
      menuSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Expose scroll function globally for header access
  React.useEffect(() => {
    window.scrollToMenu = scrollToMenu;

    // Check if URL has #menu hash and scroll to menu
    if (window.location.hash === "#menu") {
      setTimeout(() => {
        scrollToMenu();
      }, 100); // Small delay to ensure page is loaded
    }

    return () => {
      delete window.scrollToMenu;
    };
  }, []);
  const timingButtons = [
    { id: "breakfast", label: "Breakfast", icon: "🌅" },
    { id: "lunch", label: "Lunch", icon: "☀️" },
    { id: "snacks", label: "Snacks", icon: "🍿" },
    { id: "dinner", label: "Dinner", icon: "🌙" },
  ];
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex items-center justify-center flex-col mt-12 lg:mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 font-bold mb-4 lg:mb-6 leading-tight text-center max-w-4xl">
          Today's Special Dishes
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed font-medium text-center max-w-3xl">
          Each dish promises an unforgettable dining experience, blending
          innovation with tradition to delight your senses.
        </p>
      </div>
      <section className="bg-white p-4 m-4 mt-2 pb-10 mb:pb-4 2xl:p-8 2xl:m-8 text-center hover:shadow-lg rounded-2xl shadow-gray-300 shadow-md w-full max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className="px-2">
            <SpecialDishes
              img={card1}
              alt="Chicken Salad"
              description="Shredded or diced chicken tossed with crisp lettuce, juicy tomatoes, cucumbers, and onions, dressed in a creamy mayo or tangy vinaigrette for a refreshing, protein-packed dish bursting with flavor and crunch."
              price="$12.99"
              className="mx-2"
            />
          </div>
          <div className="px-2">
            <SpecialDishes
              img={card2}
              alt="Chicken Pasta"
              description="Tender chicken pieces sautéed with garlic and herbs, then tossed with al dente pasta in a rich, creamy sauce or zesty tomato base, blended with veggies like bell peppers and spinach for a satisfying, flavorful meal."
              price="$15.99"
              className="mx-2"
            />
          </div>
          <div className="px-2">
            <SpecialDishes
              img={card3}
              alt="Lasagna"
              description="Layers of pasta sheets stacked with seasoned ground meat, rich tomato sauce, creamy béchamel, and melted cheese, baked to golden perfection for a hearty, comforting Italian classic full of bold, savory flavor."
              price="$18.99"
            />
          </div>
          <div className="px-2">
            <SpecialDishes
              img={card1}
              alt="Chicken Salad"
              description="Shredded or diced chicken tossed with crisp lettuce, juicy tomatoes, cucumbers, and onions, dressed in a creamy mayo or tangy vinaigrette for a refreshing, protein-packed dish bursting with flavor and crunch."
              price="$12.99"
            />
          </div>
          <div className="px-2">
            <SpecialDishes
              img={card2}
              alt="Chicken Pasta"
              description="Tender chicken pieces sautéed with garlic and herbs, then tossed with al dente pasta in a rich, creamy sauce or zesty tomato base, blended with veggies like bell peppers and spinach for a satisfying, flavorful meal."
              price="$15.99"
            />
          </div>
          <div className="px-2">
            <SpecialDishes
              img={card3}
              alt="Lasagna"
              description="Layers of pasta sheets stacked with seasoned ground meat, rich tomato sauce, creamy béchamel, and melted cheese, baked to golden perfection for a hearty, comforting Italian classic full of bold, savory flavor."
              price="$18.99"
            />
          </div>
        </Slider>

        {/* View All Specials Button */}
        <div className="text-center mt-8 lg:mt-12">
          <NavLink
            to="/specials"
            className="inline-block bg-gradient-to-r from-[#fc7f09] to-[#e56f00] hover:from-[#e56f00] hover:to-[#d65f00] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              View All Specials
            </span>
          </NavLink>
        </div>
      </section>
      <section ref={menuSectionRef} id="menu-section">
        <div className="flex items-center justify-center flex-col mt-16 lg:mt-20 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 font-bold mb-4 lg:mb-6 leading-tight text-center max-w-4xl">
            Our Menu
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed font-medium text-center max-w-3xl">
            Explore our diverse menu, featuring a wide range of dishes to suit
            every taste and occasion.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-8 mb-8 px-4 max-w-4xl mx-auto">
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
                transition-all duration-300 transform hover:scale-105 active:scale-95
                border-2 shadow-md hover:shadow-lg
                min-w-[120px] sm:min-w-[140px] justify-center
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
              <span className="whitespace-nowrap">{timing.label}</span>
            </button>
          ))}
        </div>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-orange-100 rounded-full">
            <span className="text-[#fc7f09] font-semibold text-lg">
              Now Showing: {selectedTiming} Menu
            </span>
          </div>
        </div>

        {selectedTiming === "Dinner" || selectedTiming === "Lunch" ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 p-4 m-4 mt-2 pt-2 max-w-7xl mx-auto">
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
      <Menubottom
        selectedCategory={selectedCategory}
        selectedTiming={selectedTiming}
      />
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} My Restaurant. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
