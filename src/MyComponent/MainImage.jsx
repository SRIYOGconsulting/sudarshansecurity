import React from 'react'
import { sliderImages } from "../Data";
import TextType from './Welcome/TextType'
export default function MainImage() {
  return (
    <div>
         <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${sliderImages[0]}) ` 
      }}
    >

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
 <h1 className='text-white font-extrabold text-2xl md-text-4xl leding-tight'>      
     <TextType 
  text={[" Welcome to Sudarshan Security Service", " Let’s give them a", " elite service!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className='text-type'
  cursorClassName='text-type__cursor'
/>
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
