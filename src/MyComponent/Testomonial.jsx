
import React, { useState, useRef, useEffect } from 'react';

export default function Testimonial() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonials = [
    {
      name: "Rakesh Mehta",
      image2:'/images/1.jpg',
      text: 'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.'
    },
    {
      name: "Samir Poudel",
      image2:'/images/1.jpg',
       text: "I'm new to the Sudarshan Security team. As Property Managers, we are frequently concerned with making the right recommendations to our Boards. The staff assigned to my guardhouse has turned me into a hero in the eyes of the Board. Their customer service is outstanding."

    },
    {
      name: "Sumnima Rai",
      image2:'/images/1.jpg',
       text: "our sudarshan employee on-site always provide an excelent service  and ae exteremely customer focused . There management is exteremely able to respond  our needs and always offer supports . we have been their customer for several years now"
    },
  ];

  // Duplicate items for seamless loop
  const loopedTestimonials = [...testimonials, ...testimonials];

  const totalItems = testimonials.length;

  // Responsive visible items
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleItems]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems);
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // drag speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) carouselRef.current.style.cursor = 'grab';
  };

  // Touch support
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-[#e8edf6] py-12">
      <div className="max-w-6xl mx-auto px-4">
            <div className='mx-auto text-center px-4 py-4'>           <h1 className='text-green-800 italic font-bold  text-2xl'>Feedback</h1>
                <h2 className='text-4xl font-bold italic text-black '>What they're talking about sss</h2></div>
        <div
          ref={carouselRef}
          className="flex overflow-hidden cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollBehavior: 'smooth' }}
        >
          {loopedTestimonials.map((testimonial, index) => (
         
              <div
    key={index}
    className="flex-shrink-0 px-2 sm:px-3 flex justify-center"
    style={{ width: `${100 / visibleItems}%`, minWidth: '250px', maxWidth: '400px' }}
  >
              <div className="relative text-center max-w-3xl">
 
                <h1 className="text-lg sm:text-xl font-bold mb-3 text-black">{testimonial.name}</h1>
                <div className="flex justify-center -mb-10 relative z-10">
                  <img
                    src={testimonial.image2}
                    alt=""
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg pt-14">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
