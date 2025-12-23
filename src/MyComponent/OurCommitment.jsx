import { OurImages } from "../Data";

const commitments = [
  {
    title: "Mission",
    image: OurImages[0],
    text:
      "To offer the greatest defense and establish the benchmark for security services that consistently surpass the needs of our clients. Save lives and property by using creative and original ideas!",
  },
  {
    title: "Vision",
    image: OurImages[1],
    text:
      "A devoted security team works to reach the highest level of customer satisfaction through insightful risk solutions, exceptional service, and the best possible protection for our clients and their assets.",
  },
  {
    title: "Values",
    image: OurImages[2],
    text:
      "Be proud of what we do and do it with the utmost honesty, integrity, and fairness. Aim to complete each assignment in a superior way and always seek better methods through innovation.",
  },
];

export default function OurCommitment() {
  return (
    <section className="bg-[#e8edf6] py-12">
      <h1 className="italic text-center text-green-700 font-bold text-sm sm:text-base ">
        Our Commitments
      </h1>

      <p className="text-black font-bold text-center text-xl sm:text-2xl md:text-3xl  p-8 mb-5">
        Commitment is an act, not a word
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 max-w-6xl mx-auto px-8">
        {commitments.map((item, index) => (
          <div
            key={index}
            className="
              bg-white 
              p-6 sm:p-6 
              text-center 
              rounded-2xl 
              shadow-lg 
              hover:shadow-2xl 
              transition-all 
              duration-300 
              hover:-translate-y-2
             max-w-[280px] sm:max-w-[320px] md:max-w-none
             m-auto

              min-h-[320px] md:min-h-[320px] sm:min-h-[280px] lg:min-h-[380px]
              flex flex-col
              border-2 border-red-50
            "
          >
            <h2 className="text-lg sm:text-xl md:text-2xl text-black font-bold mb-4 flex justify-center items-center gap-2 ">
              <img src={item.image} alt={item.title} className="w-8 sm:w-10" />
              {item.title}
            </h2>

            <p className="text-black text-sm sm:text-base leading-relaxed p-4 mt-3">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
