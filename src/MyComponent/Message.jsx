import React, { useEffect } from 'react'

export default function Message() {
        useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // or 'smooth' for smooth scrolling
        });
      }, [])
    
    const details = [
        {
            id: 1,
            name: "Dambar Bahadur Tamang",
            post: "Managing Director",
            img: '/teams/1.png',
            para: "With more than two decades of experience in the field of private security arrangement, having defence background. It is an important part of human being and all type of industrial and commercial sectors. The Sudarshan Security Services Pvt. Ltd. is a professional security company. Has been providing more than 1500 security personnels all over Nepal in the various aspects of industries, commercial banks, finance companies, hotel premises, school compound etc.",
            num: "977-985-202-0058",
            email: "dambar@sudarshansecurity.com.np",
            whatapp: "WhatsApp Message",
        },
        {
            id: 2,
            name: "Keshab Adhikari",
            post: "General Manager",
            img: '/teams/2.png',
            para: "With more than two decades of experience in the field of private security arrangement, having defence background. It is an important part of human being and all type of industrial and commercial sectors. The Sudarshan Security Services Pvt. Ltd. is a professional security company. Has been providing more than 1500 security personnels all over Nepal in the various aspects of industries, commercial banks, finance companies, hotel premises, school compound etc.",
            num: "+977-985-205-4100",
            email: "keshab@sudarshansecurity.com.np",
            whatapp: "WhatsApp Message",
        },
        {
            id: 3,
            name: "Ramesh Ghising",
            post: "Operation Director",
            img: '/teams/4.png',
            para: "With more than two decades of experience in the field of private security arrangement, having defence background. It is an important part of human being and all type of industrial and commercial sectors. The Sudarshan Security Services Pvt. Ltd. is a professional security company. Has been providing more than 1500 security personnels all over Nepal in the various aspects of industries, commercial banks, finance companies, hotel premises, school compound etc.",
            num: "977-985-102-4462",
            email: "ramesh@sudarshansecurity.com.np",
            whatapp: "WhatsApp Message",
        },
    ]

    const formatPhoneHref = (phone) => {
        return `tel:${phone.replace(/[-\s]/g, '')}`
    }

    const formatWhatsappHref = (phone, message = "Hello") => {
        const cleanPhone = phone.replace(/[^\d]/g, '');
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    }

    return (
        <div className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-3'>
            <div className="max-w-4xl mx-auto">
                
                
                {details.map((m) => (
                   <div key={m.id} className="relative bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">

    {/* Flex Layout */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 p-10">
        
        {/* Big Image */}
        <div className="flex-shrink-0">
            <img 
                src={m.img} 
                alt={m.name} 
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 shadow-md mx-auto lg:mx-0"
            />
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
            <h2 className="text-lg font-semibold text-gray-600 uppercase tracking-wide">
                {m.post}
            </h2>
            <h1 className="text-2xl font-bold text-gray-800 mt-1">
                {m.name}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                {m.para}
            </p>

            {/* CONTACT */}
            <div className="space-y-3">
                {/* Phone */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <a href={formatPhoneHref(m.num)} className="text-blue-600 hover:text-blue-700 font-medium">
                        {m.num}
                    </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <a href={`mailto:${m.email}`} className="text-green-600 hover:text-green-700 font-medium">
                        {m.email}
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <a 
                        href={formatWhatsappHref(m.num)}
                        target="_blank"
                        className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-2"
                    >
                        {m.whatapp}
                    </a>
                </div>
            </div>
        </div>
    </div>

    {/* Small Bottom-Right Logo */}
    <div className="absolute bottom-4 right-4">
        <img 
            src="/images/1.jpg" 
            alt="image" 
            className="w-16 h-16 rounded-full border shadow-md"
        />
    </div>
</div>

                ))}
            </div>
        </div>
    )
}