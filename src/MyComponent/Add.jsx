import React from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="relative inline-block">
        {/* Image */}
        <img
          src="/images/default.jpg"
          alt="default_page"
          className="max-w-full h-auto rounded-lg"
        />

        {/* ❌ Cross Button */}
        <button
          onClick={() => navigate("/home")}
          className="
            absolute top-2 right-2
            w-8 h-8 sm:w-10 sm:h-10
            flex items-center justify-center
            rounded-full
            bg-black text-white text-sm sm:text-xl font-bold
            hover:bg-red-600
            transition-all duration-300
          "
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
