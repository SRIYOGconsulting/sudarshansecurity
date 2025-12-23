import React, { useEffect, useState } from "react";
import { sliderImages } from "../Data";
import { useNavigate } from "react-router-dom";

export default function MainImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // or 'smooth' for smooth scrolling
    });
  }, [])

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-20">
      {/* Slider Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${sliderImages[currentIndex]})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
            Welcome to Sudarshan Security
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg drop-shadow-md max-w-2xl">
            We provide the utmost security services to safeguard what matters most to you.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/about")}
            className="mt-6 group px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold bg-red-800 rounded-full text-sm sm:text-base md:text-lg hover:bg-red-900 relative overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              BROWSE MORE ➤
            </span>
            <span className="absolute inset-0 bg-green-800 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
