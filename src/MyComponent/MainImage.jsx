import React, { useEffect, useState } from 'react'
import { sliderImages } from "../Data";
import { useNavigate } from 'react-router-dom';

export default function MainImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate('/about')
    
  }

  return (
    <div className='bg-[#e8edf6] py-8 md:py-16'>

      {/* Slider Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${sliderImages[currentIndex]})`
          }}
        />

        {/* Slider Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg">
            Welcome to Sudarshan Security
          </h1>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Button Section */}
      <div className='flex justify-center md:justify-end px-4 sm:px-6 py-6'>
        <button onClick={handleClick}className="group mt-1 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold bg-red-800 rounded-full text-sm sm:text-base md:text-lg hover:bg-red-900 relative overflow-hidden transition-all duration-500">
          <span className='relative z-10 group-hover:text-white transition-colors duration-300'>
            BROWSE MORE ➤
          </span>
          <span className='absolute inset-0 bg-green-800 -translate-y-full group-hover:translate-y-0 transition-transform duration-500'></span>
        </button>
      </div>
    </div>
  )
}
