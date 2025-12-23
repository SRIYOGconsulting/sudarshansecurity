
import { useRef, useEffect } from "react";


const testimonials = [
  {
    name: "Rakesh Mehta",
    image: "/images/1.jpg",
    text: 'The best way to describe this organization is "Excellent Service!" They have consistently provided us with excellent service for many years. Their commitment to customer service and professionalism has become their standard operating procedure.',
    testshape: '/images/testshape.png'

  },
  {
    name: "Samir Poudel",
    image: "/images/1.jpg",
    text: "our sudarshan employee on-site always provide an excelent service  and ae exteremely customer focused . There management is exteremely able to respond  our needs and always offer supports . we have been their customer for several years now"
    ,
    testshape: '/images/testshape.png'
  },
  {
    name: "Sumnima Rai",
    image: "/images/1.jpg",
    text: "our sudarshan employee on-site always provide an excelent service  and ae exteremely customer focused . There management is exteremely able to respond  our needs and always offer supports . we have been their customer for several years now", testshape: '/images/testshape.png'
  },

];

// Duplicate 3 times for smooth infinite loop
const items = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonial() {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      const cardWidth = carousel.firstChild.offsetWidth + 16; // 16 = gap-x-6 from Tailwind
      carousel.scrollLeft += cardWidth;


    }, 5000); // every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

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

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-green-800 italic font-bold text-2xl">
            Feedback
          </h1>
          <h2 className="text-4xl font-bold italic text-black mt-3">
            What they're talking about
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-x-6 overflow-x-scroll sm:overflow-x-hidden cursor-grab select-none scrollbar-hide scroll-smooth snap-x snap-mandatory"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 px-2 flex justify-center transition-transform duration-300 hover:-translate-y-3 border-red-50 snap-center"
            >
              <div className="relative max-w-md w-full text-center py-6">
                <p className="text-black">{item.name}</p>
                {/* Avatar */}
                <div className="flex justify-start ml-2  -mb-12 relative z-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-30 h-25 sm:w-24 sm:h-24 rounded-full border-4 border-red-50 bg-white shadow-lg ml-4"
                  />
                  <img src={item.testshape} alt={item.name} className="absolute  left-35 w-15 h-13    " />
                </div>

                {/* Card */}
                <div className="relative bg-white   p-6 sm:p-8 rounded-2xl shadow-lg pt-24 min-h-[380px] border-4 border-red-100 hover:shadow-2xl">


                  {/* Quote icon */}
                  <div className="absolute -top-5 right-6 w-11 h-11 rounded-full 
                bg-green-700 text-white text-2xl font-bold 
                flex items-center justify-center shadow-lg">
                    ”
                  </div>


                  {/* Name */}


                  {/* Text */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-10">
                    {item.text}
                  </p>

                  {/* Company */}
                  <div className="mt-6 text-left">
                    <h2 className="text-md font-semibold text-gray-800">
                      {item.company}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {item.position}
                    </p>
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





