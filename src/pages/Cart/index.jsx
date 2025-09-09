import Header from "../../components/Header";

export const Cart = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-center text-4xl font-bold mt-10">Your Cart</h1>
          <p className="text-center text-xl mt-5 text-gray-600">
            Your cart is currently empty.
          </p>
          <div className="text-center mt-8">
            <a
              href="/main"
              className="inline-block bg-[#fc7f09] text-white px-6 py-3 rounded-lg hover:bg-[#e56f00] transition-colors duration-200"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
