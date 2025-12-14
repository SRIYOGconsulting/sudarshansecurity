import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter 10 digit phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#faf5e9] flex flex-col items-center px-8 py-20 mt-16">
      <h2 className="text-2xl md:text-3xl italic text-teal-700 mb-10">
        Feel free to contact us
      </h2>

      {/* Form Container */}
      <div className="w-full ">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-4 text-black mb-12 max-w-3xl mx-auto "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
              {errors.name && (
                <p className="text-red-600 text-sm ml-4 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
              {errors.email && (
                <p className="text-red-600 text-sm ml-4 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm ml-4 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
              {errors.subject && (
                <p className="text-red-600 text-sm ml-4 mt-1">{errors.subject}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <textarea
              name="message"
              rows="5"
              placeholder="Write a message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm ml-4 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button - INSIDE the form */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white px-12 py-4 rounded-full font-semibold transition duration-300"
            >
              SEND A MESSAGE
            </button>
          </div>
        </form>

        {/* Google Map - Below the form */}
        <div className="w-full ">
          <h3 className="text-xl font-semibold text-teal-700 mb-4 text-center">
            Find Us Here
          </h3>
          <div className="w-full  overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54807.441351627334!2d87.28663665305864!3d26.68970363646343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d0c244bd217%3A0xdd8e8a36049b0208!2sSudarshan%20Security%20Services%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1765727395524!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sudarshan Security Services Location"
            ></iframe>
          </div>

   
        </div>
      </div>
    </div>
  );
}