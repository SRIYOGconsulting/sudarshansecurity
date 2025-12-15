import React from "react";
import  {galleryDatas}  from "../Data/GalleryData"; 

export default function Gallery() {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 md:px-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Our Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryDatas.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          >
            <img
              src={item.image}
              alt={`Gallery ${item.id}`}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
