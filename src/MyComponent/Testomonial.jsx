
   
// import React, { useState, useRef, useEffect } from 'react';

// export default function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const carouselRef = useRef(null);

//   const testimonials = [
//     {
//       name: "Samir Poudel",
//       image:'/images/testshape.png',
//        image2:'/images/1.jpg',
//       text: "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding."
//     },
//     {
//       name: "Samir Poudel",
//       image:'/images/testshape.png',
//        image2:'/images/1.jpg',
//       text: "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding."
//     },
//     {
//       name: "Samir Poudel",
//       image:'/images/testshape.png',
//        image2:'/images/1.jpg',
//       text: "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding."
//     },

//   ];

//   const visibleItems = 2; // Show 2 items at a time
//   const totalItems = testimonials.length;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex >= totalItems - visibleItems ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? totalItems - visibleItems : prevIndex - 1
//     );
//   };

//   // Handle drag end to detect swipe
//   const handleDragEnd = () => {
//     setIsDragging(false);
//     if (carouselRef.current) {
//       carouselRef.current.style.cursor = 'grab';
//     }
//   };

//   // Reset to first slide when reaching the end (for infinite loop)
//   useEffect(() => {
//     if (currentIndex > totalItems - visibleItems) {
//       setCurrentIndex(0);
//     }
//   }, [currentIndex, totalItems, visibleItems]);

//   // Auto-advance slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className='bg-[#e8edf6]'>

//     <div className="mx-auto p-6 select-none  max-w-4xl">
//       {/* Carousel Container */}
//       <div 
//         ref={carouselRef}
//         className="flex overflow-hidden cursor-grab space-x-6 py-4 "
//         onMouseDown={(e) => {
//           setIsDragging(true);
//           setStartX(e.pageX - carouselRef.current.offsetLeft);
//           setScrollLeft(carouselRef.current.scrollLeft);
//           carouselRef.current.style.cursor = 'grabbing';
//         }}
//         onMouseLeave={handleDragEnd}
//         onMouseUp={handleDragEnd}
//         onMouseMove={(e) => {
//           if (!isDragging) return;
//           e.preventDefault();
//           const x = e.pageX - carouselRef.current.offsetLeft;
//           const walk = (x - startX) * 2;
//           carouselRef.current.scrollLeft = scrollLeft - walk;
//         }}
//         style={{ 
//           scrollBehavior: 'smooth',
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none'
//         }}
//       >
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 transition-all duration-500 ease-in-out transform"
//             style={{ 
//               width: `calc((100% - 1.5rem) / ${visibleItems})`,
//               transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
//               opacity: index >= currentIndex && index < currentIndex + visibleItems ? 1 : 0.7
//             }}
//           >
            
//             <div className="text-center mb-4">
//               <h1 className="text-2xl font-bold text-black">{testimonial.name}</h1>
//             </div>
            
//             <div className='flex '>
//                             <img src={testimonial.image2} alt="" className='w-28 rounded-full z-10 '/>
//             <img src={testimonial.image} alt="" className='w-10 h-20'/></div>
//             <div className="flex justify-center items-center w-full h-72 bg-white p-6 rounded-lg mx-auto shadow-lg">
//               <p className="text-gray-600 leading-relaxed text-center">
//                 {testimonial.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>


   
//     </div>
//     </div>
//   );
// }
    

import React, { useState, useRef, useEffect } from 'react';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: "Samir Poudel",
      image:'/images/testshape.png',
      image2:'/images/1.jpg',
      text: "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding."
    },
    {
      name: "Samir Poudel",
      image:'/images/testshape.png',
      image2:'/images/1.jpg',
      text: "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding."
    },
    {
      name: "Samir Poudel",
      image:'/images/testshape.png',
      image2:'/images/1.jpg',
      text: "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding."
    },
  ];

  const visibleItems = 2;
  const totalItems = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= totalItems - visibleItems ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - visibleItems : prevIndex - 1
    );
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  useEffect(() => {
    if (currentIndex > totalItems - visibleItems) {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalItems, visibleItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='bg-[#e8edf6]'>
      <div className="mx-auto p-6 select-none max-w-4xl">
        <div 
          ref={carouselRef}
          className="flex overflow-hidden cursor-grab space-x-6 py-4"
          onMouseDown={(e) => {
            setIsDragging(true);
            setStartX(e.pageX - carouselRef.current.offsetLeft);
            setScrollLeft(carouselRef.current.scrollLeft);
            carouselRef.current.style.cursor = 'grabbing';
          }}
          onMouseLeave={handleDragEnd}
          onMouseUp={handleDragEnd}
          onMouseMove={(e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            carouselRef.current.scrollLeft = scrollLeft - walk;
          }}
          style={{ 
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 transition-all duration-500 ease-in-out transform"
              style={{ 
                width: `calc((100% - 1.5rem) / ${visibleItems})`,
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                opacity: index >= currentIndex && index < currentIndex + visibleItems ? 1 : 0.7
              }}
            >
              {/* Main Container with connected images */}
              <div className="relative">
                
                {/* Name above the container */}
                <div className="text-center mb-2">
                  <h1 className="text-2xl font-bold text-black">{testimonial.name}</h1>
                </div>
                
                {/* Images positioned to connect with the container */}
                <div className='flex justify-center relative z-10 -mb-8'>
                  <img src={testimonial.image2} alt="" className='w-24 h-24 rounded-full border-4 border-white shadow-lg'/>
                
                </div>

                {/* Text Container */}
                <div className="bg-white p-8 rounded-2xl shadow-lg pt-16">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
