import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#fc7f09]"></div>
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
