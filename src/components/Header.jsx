import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownComponent from "./dropdowncomponent";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white h-16 md:h-25 flex items-center justify-between sticky top-0 z-50 w-full shadow-md px-2 sm:px-5 py-2 mx-auto backdrop-blur-md">
      {/* Logo */}
      <NavLink to={props.path}>
        <h1 className="font-[800] text-3xl sm:text-2xl md:text-3xl lg:text-[40px] text-[#fc7f09] pl-2 sm:pl-4 md:pl-[10px] lg:pl-[90px] hover:scale-105 md:hover:scale-115 ease duration-500">
          Food<span className="text-[#18181b]">Man</span>
        </h1>
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between gap-2 h-30 px-[30px] pr-[80px]">
        <NavLink
          to={props.path}
          className="px-5 font-[700] text-[20px] mt-5 hover:scale-115 hover:text-[#fc7f09] hover:border-b-2 hover:border-[#fc7f09] ease-in duration-200"
        >
          Home
        </NavLink>
        <NavLink
          to={props.path}
          className="px-5 font-[700] text-[20px] mt-5 hover:scale-115 hover:text-[#fc7f09] hover:border-b-2 hover:border-[#fc7f09] ease-in duration-200"
        >
          Special
        </NavLink>
        <NavLink
          to={props.path}
          className="px-5 font-[700] text-[20px] mt-5 hover:scale-115 hover:text-[#fc7f09] hover:border-b-2 hover:border-[#fc7f09] ease-in duration-200"
        >
          Menu
        </NavLink>
        <NavLink
          to={props.path}
          className="px-5 font-[700] text-[20px] mt-5 hover:scale-115 hover:text-[#fc7f09] hover:border-b-2 hover:border-[#fc7f09] ease-in duration-200"
        >
          Clients
        </NavLink>
        <NavLink
          to={props.path}
          className="px-5 font-[700] text-[20px] mt-5 hover:scale-115 hover:text-[#fc7f09] hover:border-b-2 hover:border-[#fc7f09] ease-in duration-200"
        >
          Contact
        </NavLink>
      </nav>

      {/* Desktop Dropdown */}
      <div className="hidden lg:flex items-center justify-between gap-2 pr-[110px]">
        <DropdownComponent path={props.path} />
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          onClick={handleMenuToggle}
          className="inline-flex items-center justify-center p-2 rounded-md text-[#2E2B41] hover:text-white hover:bg-[#fc7f09] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#fc7f09] transition duration-200 border border-gray-300"
          type="button"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger icon */}
          {!isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown - Simple conditional rendering for debugging */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#fc7f09] shadow-lg z-50 border-t-2 border-[#2E2B41]">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <NavLink
              to={props.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#18181b] hover:bg-[#2E2B41] hover:text-[#fc7f09] block px-4 py-3 rounded-md text-base font-medium transition duration-200 border border-white/20 "
            >
              🏠 Home
            </NavLink>

            <NavLink
              to={props.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#18181b] hover:bg-[#2E2B41] hover:text-[#fc7f09] block px-4 py-3 rounded-md text-base font-medium transition duration-200 border border-white/20"
            >
              ⭐ Special
            </NavLink>

            <NavLink
              to={props.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#18181b] hover:bg-[#2E2B41] hover:text-[#fc7f09] block px-4 py-3 rounded-md text-base font-medium transition duration-200 border border-white/20"
            >
              📋 Menu
            </NavLink>

            <NavLink
              to={props.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#18181b] hover:bg-[#2E2B41] hover:text-[#fc7f09] block px-4 py-3 rounded-md text-base font-medium transition duration-200 border border-white/20"
            >
              👥 Clients
            </NavLink>

            <NavLink
              to={props.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#18181b] hover:bg-[#2E2B41] hover:text-[#fc7f09] block px-4 py-3 rounded-md text-base font-medium transition duration-200 border border-white/20"
            >
              📞 Contact
            </NavLink>

            {setIsMenuOpen ? null : (
              <div className="px-4 py-2 border-t border-white/20 mt-2">
                <DropdownComponent path={props.path} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
