import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 border-4 border-[#fc7f09] border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            Loading...
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Please wait while we prepare your experience
          </p>
        </div>
      </div>
    );
  }

  if (user) {
    // If user is already logged in, redirect to main page
    return <Navigate to="/main" replace />;
  }

  return children;
};

export default PublicRoute;
