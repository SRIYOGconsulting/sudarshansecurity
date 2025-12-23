import FaqItem from "./FaqItem";

export default function Faq() {
  return (
    <section className="bg-gray-50 py-30 text-red-600">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
          Frequently Asked Questions
        </h2>

        {/* Render the FaqItem component */}
        <FaqItem />

      </div>
    </section>
  );
}