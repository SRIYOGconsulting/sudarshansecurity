import React from 'react'
import Stact from './Stack/Stact' 
import Testimonial from './Testomonial';


export default function AboutMe() {
  const images = [
    { id: 1, img: "/images/about.png" },
    { id: 2, img: "/images/discover.jpg" },
  ];

  const services = [
    "Security Guard",
    "V.I.P Scout Service", 
    "Personal Bodyguard",
    "Unarmed Security Service",
    "Event Management Services"
  ];

  return (
    <div>
    <div className='p-12'>
     

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
        
        {/* Left Column - Image Stack */}
        <div className="flex justify-center lg:justify-start">
          <Stact
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 500, height: 400 }}
            cardsData={images} 
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-6 p-12">
          <div>
            <p className='italic text-green-700 text-lg'>
              About Sudarshan Security
            </p>
            <h1 className='text-4xl font-bold text-green-900 mt-2'>
              Get to know about Security services
            </h1>
          </div>

          <p className='text-gray-700 text-lg leading-relaxed'>
            Sudarshan Security Services as an experienced service provider,
            takes pride in offering our clients an effective solution and world
            class service throughout the country.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {services.map((service, index) => (
              <div 
                key={index}
                
              >
                <p className="text-green-800 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Testimonial/>
   
    </div>
    
       </div>
  )
}