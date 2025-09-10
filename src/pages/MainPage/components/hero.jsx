import basepicture from "../../../assets/Images/backgroundpic.png";
// Update hero.jsx
const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20  text-center lg:text-left gap-8 lg:gap-12 xl:gap-16">
      <div className="max-w-lg lg:max-w-xl xl:max-w-3xl flex flex-col items-center lg:items-start order-2 lg:order-1">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight text-center lg:text-left">
          Meet, Eat & Enjoy The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            True Taste
          </span>
          .
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-10 leading-relaxed font-medium text-center lg:text-left max-w-2xl">
          Discover the true essence of culinary delight as you meet, eat and
          savor the authentic flavors that define our passion for food.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-orange-300/50">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Order Now
            </span>
          </button>
          <button className="bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
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
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              View Menu
            </span>
          </button>
        </div>
      </div>
      <div className="order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl">
        <img
          src={basepicture}
          alt="Delicious Food"
          className="rounded-full w-full h-auto object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Hero;
