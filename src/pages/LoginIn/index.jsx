import React, { useState } from "react";
import Header from "../../components/Header";
import Mail from "../../assets/icons/mail.svg";
import Lock from "../../assets/icons/lock.svg";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../config/firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/main";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      console.log("Logged in:", userCredential.user);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = {
        uid: user.uid,
        username: user.displayName || username || "",
        email: user.email || "",
        PhoneNumber: typeof PhoneNumber !== "undefined" ? PhoneNumber : "",
        createdAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "users", user.uid), userData, { merge: true });
      navigate(from, { replace: true });
    } catch (err) {
      let errorMessage = "An error occurred during Google sign-in";
      if (err.code === "auth/popup-closed-by-user")
        errorMessage = "Popup closed by user";
      if (err.code === "auth/cancelled-popup-request")
        errorMessage = "Popup request cancelled";
      setError(errorMessage);
      console.error("Error signing in with Google:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="px-4 py-8 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Text */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Welcome Back to <span className="text-[#fc7f09]">FoodMan</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Sign in to continue your delicious journey with us.
          </p>
        </div>
        {/* Form Section */}
        <div className="max-w-md mx-auto lg:max-w-lg">
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
            <form onSubmit={handleLogin} className="space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-gray-900 mb-2">
                Sign In
              </h2>
              <p className="text-center text-gray-600 text-sm sm:text-base mb-6">
                Enter your credentials to access your account
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm text-center">
                  {error}
                </div>
              )}

              {/* Email Field */}
              <div className="flex items-stretch border border-[#fc7f09] rounded-l-[10px] rounded-r-md hover:border-2 duration-100 ease-in">
                <label className="flex items-center px-3 py-2 bg-[#fc7f09] rounded-l-[10px]">
                  <img
                    src={Mail}
                    alt="email"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Email"
                  required
                  className="block w-full px-3 py-2 text-sm sm:text-base font-normal leading-6 text-[#2E2B41] rounded-r-md border-2 border-[#F3F0FF] border-l-0 bg-[#F3F0FF] focus:outline-none focus:ring-2 focus:ring-[#fc7f09] focus:border-transparent"
                />
              </div>

              {/* Password Field */}
              <div className="flex items-stretch border border-[#fc7f09] rounded-l-[10px] rounded-r-md hover:border-2 duration-100 ease-in">
                <label className="flex items-center px-3 py-2 bg-[#fc7f09] rounded-l-[10px]">
                  <img
                    src={Lock}
                    alt="password"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="block w-full px-3 py-2 text-sm sm:text-base font-normal leading-6 text-[#2E2B41] rounded-r-md border-2 border-[#F3F0FF] border-l-0 bg-[#F3F0FF] focus:outline-none focus:ring-2 focus:ring-[#fc7f09] focus:border-transparent"
                />
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <button
                  type="submit"
                  className="
                    w-full 
                    bg-gradient-to-r from-[#fc7f09] to-[#e56f00]
                    text-white 
                    font-semibold py-3 px-6 
                    text-sm sm:text-base lg:text-lg
                    rounded-xl
                    hover:from-[#e56f00] hover:to-[#d65f00]
                    transform hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-200 ease-in-out
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                    focus:outline-none focus:ring-4 focus:ring-[#fc7f09]/30
                    shadow-lg hover:shadow-xl
                  "
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Signing In...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="
                    w-full 
                    flex justify-center items-center 
                    bg-white text-gray-700
                    font-semibold py-3 px-6 
                    text-sm sm:text-base lg:text-lg
                    rounded-xl border-2 border-gray-300
                    hover:border-gray-400 hover:bg-gray-50
                    transform hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-200 ease-in-out
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                    focus:outline-none focus:ring-4 focus:ring-gray-300/30
                    shadow-md hover:shadow-lg
                  "
                  disabled={loading}
                >
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.33 1.09-3.71 1.09-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  {loading ? "Signing In..." : "Continue with Google"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-sm sm:text-base lg:text-lg mt-6 px-4">
        Don’t have an account?{" "}
        <a href="/" className="text-[#fc7f09] hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};
{
  /* Additional responsive improvements for sign up link */
}
<style jsx>{`
  .signup-link {
    @apply text-center mt-8 px-4;
  }
  .signup-link p {
    @apply text-sm sm:text-base text-gray-600;
  }
  .signup-link a {
    @apply text-[#fc7f09] hover:text-[#e56f00] font-semibold hover:underline transition-colors duration-200;
  }
`}</style>;
