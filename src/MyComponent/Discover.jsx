import React from "react";
import { Image2 } from "../Data";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Discover() {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 30% visible triggers animation
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);


  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/about')
  }
  return (
    <section className="w-full bg-[#e8edf6] py-6 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Top Text */}
        <p className="text-green-700 italic text-lg mb-2">
          Join us for service
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          What we stand for
        </h2>

        {/* Responsive Side-by-Side */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-10">
          {/* Left: Paragraphs */}
          <div className="flex-1">
            <p className="text-gray-400 leading-relaxed text mb-6">
              Since 1983, Sudarshan Security has been a leading name in Nepal's
              security sector. As the first registered security company, we have
              unmatched experience and knowledge. Our highly trained professionals
              deliver comprehensive security solutions, including advanced access
              control, close protection, and 24/7 surveillance. We offer high-quality
              services for individual, corporate, and major event security needs.
            </p>

            <p className="text-gray-400 leading-relaxed text">
              Our ISO 9001:2015 certification reflects our commitment to quality
              and excellence. With decades of experience, Sudarshan Security is
              the most reputable and reliable choice for safeguarding what
              matters most to you.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1 overflow-hidden">
            <img
              ref={imageRef}
              src={Image2}
              alt="Discover"
              className={`
      w-full h-auto rounded-lg object-cover
      transform transition-all duration-700 ease-out
      ${isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-32 opacity-0"
                }
    `}
            />
          </div>

        </div>

        {/* Button */}
        <div className='flex '>
          <button onClick={handleClick} className=" group mt-1 px-10 py-4  text-white font-semibold bg-red-800 rounded-full text-sm md:text-base hover:bg-red-800  relative overflow-hidden transition-all duration-500 ">
            <span className='relative z-10 group-hover:text-black'>Discover MORE➤</span>
            <span className='absolute inset-0 bg-green-800 -translate-y-full group-hover:translate-y-0 transition-transform duration-500'></span>
          </button>

        </div>

      </div>
    </section>
  );
}
