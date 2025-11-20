import React from 'react'

export default function Discover() {
  return (
    <div>
          <section className="w-full bg-[#e8edf6] py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        {/* Top Text */}
        <p className="text-green-700 italic text-lg mb-2">
          Join us for service
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          What we stand for
        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Since 1983, Sudarshan Security has been a leading name in Nepal's
          security sector. As the first registered security company, we have
          unmatched experience and knowledge. Our highly trained professionals
          deliver comprehensive security solutions, including advanced access
          control, close protection, and 24/7 surveillance. We offer high-quality
          services for individual, corporate, and major event security needs.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-700 leading-relaxed text-lg mb-10">
          Our ISO 9001:2015 certification reflects our commitment to quality
          and excellence. With decades of experience, Sudarshan Security is the
          most reputable and reliable choice for safeguarding what matters most
          to you.
        </p>

        {/* Button */}
        <button className="px-10 py-4 bg-red-700 text-white font-semibold rounded-full text-sm md:text-base hover:bg-red-800 transition">
          DISCOVER MORE
        </button>

      </div>
    </section>

    </div>
  )
}
