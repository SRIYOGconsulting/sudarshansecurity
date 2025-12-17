
import React, { useRef, useEffect } from "react";

export default function Testimonial() {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

   const testimonials = [
    {
      name: "Rakesh Mehta",
      image: "/images/1.jpg",
      text:'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.'

    },
    {
      name: "Samir Poudel",
      image: "/images/1.jpg",
             text: "our sudarshan employee on-site always provide an excelent service  and ae exteremely customer focused . There management is exteremely able to respond  our needs and always offer supports . we have been their customer for several years now"
       
      

    },
    {
      name: "Sumnima Rai",
      image: "/images/1.jpg",
text: "our sudarshan employee on-site always provide an excelent service  and ae exteremely customer focused . There management is exteremely able to respond  our needs and always offer supports . we have been their customer for several years now"    },

  ];

  // Duplicate 3 times for smooth infinite loop
  const items = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Start from the middle set
    const middleScroll = carousel.scrollWidth / 3;
    carousel.scrollLeft = middleScroll;

    const handleScroll = () => {
      const maxScroll = carousel.scrollWidth;
      const oneSetWidth = maxScroll / 3;

      // If dragged too far right
      if (carousel.scrollLeft >= oneSetWidth * 2) {
        carousel.scrollLeft -= oneSetWidth;
      }

      // If dragged too far left
      if (carousel.scrollLeft <= oneSetWidth * 0.5) {
        carousel.scrollLeft += oneSetWidth;
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse drag
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const walk = (e.pageX - startX.current) * 1.4;
    carouselRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = "grab";
  };

  // Touch drag
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    startScrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const walk = (e.touches[0].pageX - startX.current) * 1.4;
    carouselRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const onTouchEnd = stopDrag;

  return (
    <div className="bg-[#e8edf6] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto text-center px-4 py-4">
          <h1 className="text-green-800 italic font-bold text-2xl">Feedback</h1>
          <h2 className="text-4xl font-bold italic text-black">
            What they're talking about
          </h2>
        </div>

        <div
          ref={carouselRef}
           className="flex  gap-x-4 overflow-x-scroll sm:overflow-x-hidden cursor-grab select-none scrollbar-hide"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 px-2 sm:px-3 flex justify-center transform transition-transform duration-300 hover:-translate-y-3   "
            >
              <div className="relative text-center max-w-md w-full py-6">
                <div className="flex justify-center -mb-10 relative z-10 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-red-50 shadow-lg"
                  />
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg pt-14 min-h-[380px] border-2 border-red-50 hover:shadow-2xl">
                  <h1 className="text-lg sm:text-xl font-bold mb-3 text-black p-6 mt-3">
                    {item.name}
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3">
                    {item.text}
                  </p>
                  <div className="p-3 mt-3">
                                        <h2 className="text-md font-semibold text-gray-800  flex justify-start">Company Name</h2>
  <p className="text-sm text-gray-500 flex justify-start">Position</p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

