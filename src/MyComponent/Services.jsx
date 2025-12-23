import React, { useEffect } from 'react'

export default function Services() {
      useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // or 'smooth' for smooth scrolling
      });
    }, [])
  
  const servicesData = [
    {
      id: 1,
      Name: 'Training Service',
      paragraph: 'Every year around 750 individuals are trained by Sudarshan securities for other organisations. Apart from our regular guard training, we also conduct risk management training for corporate.',
      icon: '🎓',
      image:'/Services/training.png'
    },
    {
      id: 2,
      Name: 'Office Supporting Staffs',
      paragraph: 'We also provide well-trained and skilled business and office support staff members who can perform a variety of duties and are fully prepared to handle multiple tasks at the same time.',
      icon: '💼',
       image:'/Services/multiple.png'
    },
    {
      id: 3,
      Name: 'Industrial Security',
      paragraph: "We offer high-quality, individualized security services for business and industrial settings. We are aware of how important employee, client, and visitor safety is to your business's success.",
      icon: '🏭',
        image:'/Services/industrial.png'

    },
    {
      id: 4,
      Name: "Unarmed Combat",
      paragraph: "Unarmed is an art of self defense technique without using weapons.Punching Striking, Kicking and blocking are fundamentals of unarmed combat.it helps to defend agains the larger adversory by using proper technique.",
      icon: '🥋',
      image:'/Services/combat.png'
    },
    {
      id: 5,
      Name: "Commercial Security",
      paragraph: "For hotels and business buildings, we offer high-quality, individualized commercial property security services. We are aware of how important employee, client, and visitor safety is to your business's success.",
      icon: '🏢',
        image:'/Services/1.png'
    },
    {
      id: 6,
      Name: "Manguarding",
      paragraph: "For office buildings and hotels, we offer high-quality, specialized commercial property protection services. We understand how crucial employee, client, and visitor safety is to the accomplishment of your business.",
      icon: '🛡️',
        image:'/Services/3.png'
    }
  ];

  return (
    <div className=' pt-20 min-h-screen px-4 sm:px-6 lg:px-8 bg-white mt-10'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Our <span className='text-red-600'>Services</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Professional security solutions tailored to protect your business, assets, and people
          </p>
          <div className='w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full'></div>
        </div>

        {/* Services List - Side by side layout */}
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Image Section - Show full image without cropping */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-full max-w-md">
                  <img 
                    src={service.image} 
                    alt={service.Name}
                    className="w-full h-auto object-contain max-h-80"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      // Show fallback
                      const fallback = e.target.nextSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                 
                  <div 
                    className="hidden w-full h-64 bg-red-100 rounded-xl items-center justify-center text-6xl"
                    style={{ display: 'none' }}
                  >
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl text-white">{service.icon}</span>
                  </div>
                  <h2 className='text-3xl font-bold text-gray-800'>
                    {service.Name}
                  </h2>
                </div>
                
                <p className='text-gray-600 text-lg leading-relaxed'>
                  {service.paragraph}
                </p>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}