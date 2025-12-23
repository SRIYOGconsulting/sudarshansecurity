import { useState } from "react";

const faqs = [
  {
    question: "How do you price your services?",
    answer:
      "There are a variety of factors that go into the cost of service. For example, the number of hours, location, specific duty requirements and other contributions as well. We would be happy to meet with you and discuss what your specific needs are.",
  },
  {
    question: "Are your security officers in uniform?",
    answer:
      "Yes. We offer a traditional police style uniform, with company patch and our badge. In addition we can offer a softer/concierge style uniform consisting of a blazer and tie. Our Executive Protection services are provided by plain-clothes officers.",
  },
  {
    question: "What type of training do your security guards receive?",
    answer:
      "Our training program consists of classroom training that covers state laws and general security procedures. In addition, all security personnel receive specific on-site training for each individual client. All security officers are properly trained before starting their assignment.",
  },
  {
    question: "Are your security officers supervised?",
    answer:
      "The security guard checks in and off duty using an automated software system, that verifies the officer’s location and keeps a record of when the officer is on duty. SPS has supervisors out in the field that routinely monitor the performance of all team members.",
  },
  {
    question: "Do the security guards keep daily reports?",
    answer:
      "Depending on management needs, daily security reports can be provided for each shift. Incident reports will be provided if some of sort of security violation occurs.",
  },
  {
    question: "Is your security company licensed?",
    answer: "Yes. We are fully licensed.",
  },
  {
    question: "Do you have insurance that would protect me from liability?",
    answer:
      "SPS carries commercial general liability, commercial automobile liability and workers compensation insurance.",
  },
  {
    question: "What type of background check is performed on your security guards?",
    answer:
      "We conduct an extensive internal investigation including prior employment and personal references. We perform a nationwide database search into each applicant’s criminal background.",
  },
];

export default function FaqItem() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {faqs.map((item, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl shadow-sm border p-5 transition-all duration-300 ${openIndex === index ? 'h-auto' : 'h-fit min-h-[100px]'
            }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <h3 className="font-semibold text-gray-800">
              {item.question}
            </h3>

            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xl">
              {openIndex === index ? "−" : "+"}
            </div>
          </div>

          {openIndex === index && (
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
