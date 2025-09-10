import Header from "../../components/Header";
import { useCart } from "../../contexts/CartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const formatPrice = (price) => {
    return typeof price === "string" ? price : `$${price.toFixed(2)}`;
  };

  if (items.length === 0) {
    return (
      <div>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
            {/* Empty Cart State */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16">
                {/* Cart Icon */}
                <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6 lg:mb-8">
                  <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Your Cart is Empty
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed">
                  Looks like you haven't added any delicious items to your cart
                  yet.
                  <br className="hidden sm:block" />
                  Explore our menu and discover amazing dishes!
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <NavLink
                    to="/main"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#fc7f09] to-[#e56f00] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-[#e56f00] hover:to-[#d65f00] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Start Shopping
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Cart Header */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Your Cart
                  </h1>
                  <p className="text-gray-600">
                    {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"}{" "}
                    in your cart
                  </p>
                </div>
                <button
                  onClick={clearCart}
                  className="mt-4 sm:mt-0 flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </button>
              </div>

              {/* Cart Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                  >
                    {/* Item Image */}
                    <div className="w-full sm:w-20 h-48 sm:h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <ShoppingBag className="w-8 h-8 text-gray-500" />
                        </div>
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                      <p className="text-lg font-bold text-[#fc7f09]">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full bg-[#fc7f09] hover:bg-[#e56f00] text-white flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-2 p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>$3.99</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>
                    $
                    {(getTotalPrice() + 3.99 + getTotalPrice() * 0.1).toFixed(
                      2
                    )}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-gradient-to-r from-[#fc7f09] to-[#e56f00] hover:from-[#e56f00] hover:to-[#d65f00] text-white py-4 rounded-xl font-semibold text-lg transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl">
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <NavLink
                to="/main"
                className="block text-center mt-4 text-[#fc7f09] hover:text-[#e56f00] font-medium transition-colors"
              >
                Continue Shopping
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
