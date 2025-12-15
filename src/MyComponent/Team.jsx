import React, { useEffect } from 'react'

export default function Team() {
      useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // or 'smooth' for smooth scrolling
      });
    }, [])
  
  const details = [
    {
      id: 1,
      name: "Dambar Bahadur Tamang",
      post: "Managing Director",
      img: '/teams/1.png'
    },
    {
      id: 2,
      name: "Keshab Adhikari",
      post: "General Manager",
      img: '/teams/2.png'
    },
    {
      id: 3,
      name: "Ramesh Ghising",
      post: "Operation Director",
      img: '/teams/4.png'
    },
  ]

  return (
    <div className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Our <span className='text-red-600'>Leadership Team</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Meet the experienced professionals leading Sudarshan Security towards excellence
          </p>
          <div className='w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full'></div>
        </div>

        {/* Team Grid - No Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {details.map((member) => (
            <div key={member.id} className="text-center group">
              
              {/* Image */}
              <div className="mb-6">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-green-100 group-hover:border-red-800 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                />
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className='text-2xl font-bold text-black group-hover:text-red-900 transition-colors duration-300'>
                  {member.name}
                </h3>
                <p className='text-lg text-red-800 font-semibold'>
                  {member.post}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}