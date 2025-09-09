import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user } = useAuth();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navItems = [
    { name: "Home", path: "/main" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md h-16 flex items-center justify-between sticky top-0 z-50 w-full shadow-sm border-b border-gray-100 px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <NavLink
        to={user ? "/main" : "/"}
        className="flex-shrink-0 group"
        onClick={closeMenus}
      >
        <h1 className="font-bold text-2xl sm:text-3xl text-[#fc7f09] group-hover:scale-105 transition-transform duration-300 ease-out">
          Food<span className="text-gray-900">Man</span>
        </h1>
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 relative group ${
                isActive
                  ? "text-[#fc7f09] bg-orange-50"
                  : "text-gray-700 hover:text-[#fc7f09] hover:bg-gray-50"
              }`
            }
          >
            {item.name}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#fc7f09] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
          </NavLink>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center space-x-3">
        {user ? (
          <>
            {/* Cart Button */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `p-2 rounded-lg transition-colors duration-200 relative ${
                  isActive
                    ? "text-[#fc7f09] bg-orange-50"
                    : "text-gray-600 hover:text-[#fc7f09] hover:bg-gray-50"
                }`
              }
            >
              <ShoppingCart size={20} />
              {/* Cart badge - you can add item count here */}
              <span className="absolute -top-1 -right-1 bg-[#fc7f09] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </NavLink>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isProfileOpen}
                aria-haspopup="true"
              >
                <div className="w-8 h-8 bg-[#fc7f09] rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 max-w-24 truncate">
                  {user?.displayName || user?.email || "User"}
                </span>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  <div className="py-1">
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#fc7f09]"
                      onClick={closeMenus}
                    >
                      Profile Settings
                    </NavLink>
                    <NavLink
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#fc7f09]"
                      onClick={closeMenus}
                    >
                      Order History
                    </NavLink>
                    <hr className="my-1" />
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMenus();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center space-x-2">
            <NavLink
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#fc7f09] transition-colors duration-200"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/"
              className="px-4 py-2 bg-[#fc7f09] text-white text-sm font-medium rounded-lg hover:bg-[#e56f00] transition-colors duration-200"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={handleMenuToggle}
        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#fc7f09] hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-40"
            onClick={closeMenus}
          />

          {/* Menu Panel */}
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="px-4 py-4 space-y-2">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#fc7f09] bg-orange-50"
                        : "text-gray-700 hover:text-[#fc7f09] hover:bg-gray-50"
                    }`
                  }
                  onClick={closeMenus}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Mobile Actions */}
              {user ? (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <NavLink
                    to="/cart"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#fc7f09] hover:bg-gray-50"
                    onClick={closeMenus}
                  >
                    <ShoppingCart size={20} />
                    <span>Cart</span>
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#fc7f09] hover:bg-gray-50"
                    onClick={closeMenus}
                  >
                    <User size={20} />
                    <span>Profile</span>
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMenus();
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <NavLink
                    to="/login"
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#fc7f09] hover:bg-gray-50"
                    onClick={closeMenus}
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-3 bg-[#fc7f09] text-white rounded-lg hover:bg-[#e56f00] text-center"
                    onClick={closeMenus}
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
