import React, { useState } from 'react';
import Header from '../../components/Header';
import Mail from '../../assets/icons/mail.svg';
import Lock from '../../assets/icons/lock.svg';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../config/firebase-config';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      console.log('Logged in:', userCredential.user);
      navigate('/main');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = {
        uid: user.uid,
        username: user.displayName || username || '',
        email: user.email || '',
        PhoneNumber: typeof PhoneNumber !== 'undefined' ? PhoneNumber : '',
        createdAt: new Date().toISOString(),
      };
      await setDoc(doc(db, 'users', user.uid), userData, { merge: true });
      navigate('/main');
    } catch (err) {
      let errorMessage = 'An error occurred during Google sign-in';
      if (err.code === 'auth/popup-closed-by-user') errorMessage = 'Popup closed by user';
      if (err.code === 'auth/cancelled-popup-request') errorMessage = 'Popup request cancelled';
      setError(errorMessage);
      console.error('Error signing in with Google:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header path="/login" />
   
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Welcome to the Login Page
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600">
              Please enter your credentials to log in.
            </p>
        </div>
        {/* Form Section */}
        <div className="max-w-md mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-900">
                Login
              </h2>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm text-center">
                  {error}
                </div>
              )}

              {/* Email Field */}
              <div className="flex items-stretch border border-[#fc7f09] rounded-l-[10px] rounded-r-md hover:border-2 duration-100 ease-in">
                <label className="flex items-center px-3 py-2 bg-[#fc7f09] rounded-l-[10px]">
                  <img src={Mail} alt="email" className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  <img src={Lock} alt="password" className="w-5 h-5 sm:w-6 sm:h-6" />
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
<div className="flex gap-2 sm:gap-3 mt-6">
  <button
    type="submit"
    className="
      w-full sm:w-1/2 
      bg-[#fc7f09] text-[#2E2B41] 
      font-semibold py-3 px-4 
      [@media(min-width:320px)]:text-[13px]
      text-sm sm:text-base
      rounded-md border border-[#fc7f09] 
      hover:border-2 hover:border-[#2E2B41] hover:bg-[#2E2B41] hover:text-[#fc7f09] 
      transition duration-200 ease-in-out
      disabled:opacity-50 disabled:cursor-not-allowed
      focus:outline-none focus:ring-2 focus:ring-[#fc7f09] focus:ring-offset-2
    "
    disabled={loading}
  >
    {loading ? 'Logging in...' : 'Log In'}
  </button>

  <button
    onClick={handleGoogleSignIn}
    type="button"
    className="
      w-full sm:w-1/2 
      flex justify-center items-center 
      bg-[#fc7f09] text-[#2E2B41] 
      font-semibold py-3 px-4 
      text-sm sm:text-base
      rounded-md border border-[#fc7f09] 
      hover:border-2 hover:border-[#2E2B41] hover:bg-[#2E2B41] hover:text-[#fc7f09] 
      transition duration-200 ease-in-out
      disabled:opacity-50 disabled:cursor-not-allowed
      focus:outline-none focus:ring-2 focus:ring-[#fc7f09] focus:ring-offset-2
    "
    disabled={loading}
  >
    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.33 1.09-3.71 1.09-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
    <span className="truncate sm:text-sm">
      {loading ? 'Logging in...' : 'Google Log In'}
    </span>
  </button>
</div>
            </form>
          </div>
        </div>
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-sm sm:text-base lg:text-lg mt-6 px-4">
        Don’t have an account?{' '}
        <a href="/" className="text-[#fc7f09] hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};
