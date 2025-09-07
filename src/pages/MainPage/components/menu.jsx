import React from "react";

function Menu({ food, alt, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
         w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px]
        h-24 sm:h-32 md:h-40 lg:h-48
        relative flex flex-col
        text-gray-900 break-words
        bg-white bg-clip-border border border-transparent
        rounded-lg sm:rounded-xl
        shadow-md hover:shadow-xl hover:shadow-[#e77408]/30
        transition-all duration-300
        overflow-hidden transform hover:scale-105
        mx-auto cursor-pointer
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: `url(${food})` }}
    >
      <div className="flex items-center justify-center text-center h-full p-2 sm:p-3 md:p-4 bg-opacity-40">
        <h5
          className="
            text-xl sm:text-base md:text-xl lg:text-2xl font-semibold text-white drop-shadow-lg text-center leading-tight
          "
        >
          {alt}
        </h5>
      </div>
    </div>
  );
}

export default Menu;
