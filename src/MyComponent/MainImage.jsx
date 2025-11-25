import React from 'react'
import { sliderImages } from "../Data";
import TextType from './Welcome/TextType'
export default function MainImage() {
  return (
    <div className='bg-[#e8edf6]'>
         <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${sliderImages[0]}) ` 
      }}
    >




    </section>
          {/* Content */}
      <div className="relative z-10  flex flex-col items-center justify-center h-full text-center px-4 bg-white py-2">
 <h1 className=' font-extrabold text-2xl md-text-4xl leding-tight'>      
     <TextType 
  text={[" Welcome to Sudarshan Security Service", " Let’s give them a", " elite service!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className='text-type text-black'
  cursorClassName='text-type__cursor'
/>
</h1> 
      
      </div>
      {/* Button */}
      <div className='flex justify-end'>
        <button className=" group mt-1 px-10 py-4  text-white font-semibold bg-red-800 rounded-full text-sm md:text-base hover:bg-red-800  relative overflow-hidden transition-all duration-500 ">
       <span className='relative z-10 group-hover:text-black'>BROWSE MORE➤</span>
       <span className='absolute inset-0 bg-green-800 -translate-y-full group-hover:translate-y-0 transition-transform duration-500'></span>
        </button>
      
        </div>
    </div>
  )
}
