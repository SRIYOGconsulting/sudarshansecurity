import React from 'react'
import mainImg from '../assets/1.png'
export default function MainImage() {
  return (
    <div>
         <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${mainImg}) ` 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        {/* Small Golden Title */}
        <p className="text-yellow-300 text-lg md:text-xl font-medium mb-3">
          Welcome to Sudarshan Security Service
        </p>

        {/* Big White Heading */}
        <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight">
          Let’s give them a <br /> elite service
        </h1>

        {/* Button */}
        <button className="mt-8 px-10 py-4 bg-red-700 text-white font-semibold rounded-full text-sm md:text-base hover:bg-red-800 transition">
          BROWSE MORE
        </button>
      </div>

      {/* WhatsApp Floating Icon (Optional) */}
      <a
        href="#"
        className="absolute bottom-6 right-6 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </section>
    </div>
  )
}
