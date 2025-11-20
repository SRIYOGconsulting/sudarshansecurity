import React, { useRef, useState } from "react";
import { Feedback } from "./ScrollImange";

export default function Testimonial() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; // scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = "grab";
  };

  return (
    <div className=" mx-auto bg-[#f2f4f7] p-6 select-none">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-green-400 mb-2">Feedback</h1>
        <p className="text-lg text-gray-900 mb-2">
          What they're talking about
        </p>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-1 cursor-grab "
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
        style={{ overflow: "hidden" , maxwidth:"500px"}} 
      >
        {Feedback.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-1/2 h-full  "
          >
            <img
              src={item.image}
              alt={item.alt || "feedback"}
              className="w-96 h-full object-cover "
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}