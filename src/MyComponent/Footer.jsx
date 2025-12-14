import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    // Social media configuration
    const socialMedia = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/people/Sudarshan-Security-Services-Pvt-Ltd/100057211459760/',
            icon: ['fab', 'facebook-f'],
            color: 'bg-[#1877F2]',
            ariaLabel: 'Visit our Facebook page'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/sudarshansecurity/',
            icon: ['fab', 'instagram'],
            color: 'bg-gradient-to-r from-purple-500 to-pink-500',
            ariaLabel: 'Visit our Instagram profile'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/sudarshansecurity',
            icon: ['fab', 'twitter'],
            color: 'bg-[#1DA1F2]',
            ariaLabel: 'Visit our Twitter profile'
        },
    ];

    // Contact information - structured like social links
    const contactLinks = [
          {
            name: 'Address',
            value: 'Hospital Road, Itahari, Sub-Metropolitan City, Ward no.9 Sunsari, Nepal',
            url: 'https://maps.google.com/?q=Hospital+Road,Itahari,Sunsari,Nepal', // Google Maps link
            icon: 'map-marker-alt',
            color: 'text-blue-500',
            ariaLabel: 'View our location on Google Maps'
        },
        {
            name: 'Email',
            value: 'info@sudarshansecurity.com.np',
            url: 'mailto:info@sudarshansecurity.com.np',
            icon: 'envelope',
            color: 'text-[#EA4335]',
            ariaLabel: 'Send email to info@sudarshansecurity.com.np'
        },
        {
            name: 'Phone',
            value: '+977-9852054100',
            url: 'tel:+9779852054100',
            icon: 'phone',
            color: 'text-[#34A853]',
            ariaLabel: 'Call +977-9852054100'
        },
      
    ];

    // Navigation links
    const navLinks = [
        { name: 'About us', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Services', href: '/services' },
        { name: 'FAQs', href: '/faqs' }
    ];

    // Handlers
    const handleEmailLogin = () => {
        window.location.href = '/email-login';
    };

    return (
        <footer className="bg-[#f5f6fa] text-gray-600" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Company Information */}
                <div className="space-y-4">
                    <img
                        src="/images/footerlogo.png"
                        alt="Sudarshan Security Services"
                        className="h-12 w-auto"
                    />
                    <p className="text-gray-500 leading-relaxed">
                        We as a dedicated security team, work to meet the highest level of customer
                        satisfaction and the best possible protection for our clients and their assets.
                    </p>
                    <button
                        onClick={handleEmailLogin}
                        className="bg-red-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        aria-label="Access email login"
                    >
                        EMAIL LOGIN
                    </button>
                </div>

                {/* Navigation Links */}
                <div>
                    <h2 className="text-red-800 font-bold mb-4 text-lg">Quick Links</h2>
                    <ul className="space-y-3">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="
                                        text-gray-400 
                                        hover:text-red-700 
                                        transition-all 
                                        duration-300 
                                        relative
                                        hover:translate-x-2
                                        before:content-['›']
                                        before:absolute
                                        before:-left-4
                                        before:opacity-0
                                        before:transform
                                        before:-translate-x-2
                                        before:transition-all
                                        before:duration-300
                                        before:text-red-700
                                        before:font-bold
                                        hover:before:opacity-100
                                        hover:before:translate-x-0
                                        block py-1
                                    "
                                    aria-label={`Navigate to ${link.name}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-red-800 font-bold mb-4 text-lg">Follow Us</h2>
                    <ul className="space-y-4">
                        {socialMedia.map((social) => (
                            <li key={social.name} className="flex items-center gap-3">
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                    aria-label={social.ariaLabel}
                                >
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden group">
                                        {/* Default background */}
                                        <div className="absolute inset-0 bg-gray-800"></div>
                                        {/* Color overlay on hover */}
                                        <div className={`absolute inset-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out ${social.color}`}></div>
                                        {/* Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center text-white">
                                            <FontAwesomeIcon
                                                icon={social.icon}
                                                className="text-sm"
                                            />
                                        </div>
                                    </div>
                                </a>
                                <span className="text-gray-400 font-medium">
                                    {social.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information - Updated with <a> tags */}
                <div>
                    <h2 className="text-red-800 font-bold mb-4 text-lg">Contact Us</h2>
                    <ul className="space-y-4">
                        {contactLinks.map((contact) => (
                            <li key={contact.name} className="flex items-center gap-3">
                                <a
                                    href={contact.url}
                                    target={contact.url.startsWith('http') ? '_blank' : '_self'}
                                    rel={contact.url.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="block"
                                    aria-label={contact.ariaLabel}
                                >
                                    <div className="relative w-10 h-10 ">




                                        {/* Icon */}
                                        <FontAwesomeIcon
                                            icon={contact.icon}
                                            className={`text-sm ${contact.color}`}
                                        />


                                    </div>
                                </a>
                                <div className="flex flex-col">
                                    <span className="text-gray-400 font-medium">
                                        {contact.name}
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        {contact.value}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-red-800 text-white py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sudarshan Security Services. All Rights Reserved.</p>
                    <p>Technology Partner: <strong>SRIYOG Consulting</strong></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
