import React from "react";

function Menu({ food, alt, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
        h-36 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80
        relative flex flex-col min-w-0
        text-gray-900 break-words
        bg-white bg-clip-border border border-transparent
        rounded-lg sm:rounded-xl lg:rounded-2xl
        shadow-md sm:shadow-sd shadow-[#e77408]
        hover:shadow-2xl transition-all duration-300
        overflow-hidden transform hover:-translate-y-1 sm:hover:-translate-y-2
        mx-auto
        bg-cover bg-center bg-no-repeat cursor-pointer

      "
      style={{ backgroundImage: `url(${food})` }}
    >
      <div className="flex flex-row items-center justify-center text-center h-full p-2 sm:p-4">
        <h5
          className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
            font-semibold text-white drop-shadow-md
            text-center leading-tight
          "
        >
          {alt}
        </h5>
      </div>
    </div>
  );
}

export default Menu;
