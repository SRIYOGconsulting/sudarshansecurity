import React, { useEffect } from 'react'
import Stact from './Stack/Stact' 
import Testimonial from './Testomonial';

export default function AboutMe() {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // or 'smooth' for smooth scrolling
    });
  }, [])

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
    <div className="w-full overflow-hidden pt-20 min-h-screen">

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <Stact
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{
                width: window.innerWidth < 768 ? 300 : 500,
                height: window.innerWidth < 768 ? 250 : 400,
              }}
              cardsData={images}
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-center lg:text-left">

            <div>
              <p className="italic text-green-700 text-base sm:text-lg">
                About Sudarshan Security
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mt-2">
                Get to know about Security services
              </h1>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Sudarshan Security Services as an experienced service provider,
              takes pride in offering our clients an effective solution and
              world class service throughout the country.
            </p>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {services.map((service, index) => (
                <div key={index}>
                  <p className="text-green-800 font-medium text-sm sm:text-base">
                    {service}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <Testimonial />
        </div>

      </div>
    </div>
  )
}
