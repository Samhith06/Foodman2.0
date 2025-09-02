import React, { useState } from "react";

export default function ProfileMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Profile Icon */}
      <div onClick={() => setOpen(!open)}
        className="w-15 h-15 rounded-full bg-[#fc7f09] bg-700 flex items-center justify-center cursor-pointer hover:bg-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-37 bg-white border border-gray-200 rounded-xl shadow-lg z-10 text-[600] text-[20px]">
          <a
            href={props.path}
            className="block px-4 py-2 text-gray-700 hover:bg-[#fc7f09] hover:text-[#18181b]"
          >
            Cart
          </a>
          <a
            href={props.path}
            className="block px-4 py-2 text-gray-700 hover:bg-[#fc7f09] hover:text-[#18181b]"
          >
            Profile
          </a>
          <a
            href={props.path}
            className="block px-4 py-2 text-gray-700 hover:bg-[#fc7f09] hover:text-[#18181b]"
          >
            Login
          </a>
          <a
            href={props.path}
            className="block px-4 py-2 text-gray-700 hover:bg-[#fc7f09] hover:text-[#18181b]"
          >
            Signup
          </a>
        </div>
      )}
    </div>
  );
}
