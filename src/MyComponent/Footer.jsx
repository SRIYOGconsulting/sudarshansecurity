import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="bg-[#f5f6fa] text-gray-600">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Description */}
                <div>
                    <img
                        src="/images/logo-2.png"
                        alt="Sudarshan Security"
                        className="h-12 mb-4"
                    />
                    <p className="mb-4 text-gray-500">
                        We as a dedicated security team, work to meet the highest level of customer satisfaction and the best possible protection for our clients and their assets.
                    </p>
                    <button className="bg-red-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition">
                        EMAIL LOGIN
                    </button>
                </div>

                {/* Links */}
                <div>
                    <h2 className="text-red-800 font-bold mb-4">Links</h2>
                    <ul className="space-y-2">
                        <li className="hover:text-red-700 cursor-pointer transition">About us</li>
                        <li className="hover:text-red-700 cursor-pointer transition">Gallery</li>
                        <li className="hover:text-red-700 cursor-pointer transition">Services</li>
                        <li className="hover:text-red-700 cursor-pointer transition">FAQs</li>
                    </ul>
                </div>

                {/* Social Presence */}
                <div>
                    <h2 className="text-red-800 font-bold mb-4">Social Presence</h2>
                    <ul className="space-y-3">
                        <li className="group relative overflow-hidden cursor-pointer">
                            <div className="flex items-center gap-3 transition-all duration-300">
                                <div className="relative w-8 h-8 gap-3 rounded-full overflow-hidden ">
                                    <div></div>
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </div>

                            </div>
                            Twitter
                        </li>
                        <li className="flex items-center gap-3 hover:text-red-700 cursor-pointer transition">
                            <div className="w-8 h-8 bg-[#1877F2] rounded-full flex justify-center items-center text-white">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </div>
                            Facebook
                        </li>
                        <li className="flex items-center gap-3 hover:text-red-700 cursor-pointer transition">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex justify-center items-center text-white">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </div>
                            Instagram
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-red-800 font-bold mb-4">Contact</h2>
                    <p className="text-gray-500 mb-4">
                        Hospital Road, Itahari, Sub-Metropolitan City, Ward no.9 Sunsari, Nepal
                    </p>
                    <p className="flex items-center gap-3 mb-2">
                        <FontAwesomeIcon icon="envelope" className="text-red-700 w-4" />
                        <span className="font-semibold hover:text-red-700 cursor-pointer">
                            info@sudarshansecurity.com.np
                        </span>
                    </p>
                    <p className="flex items-center gap-3">
                        <FontAwesomeIcon icon="phone" className="text-red-700 w-4" />
                        <span className="font-semibold hover:text-red-700 cursor-pointer">
                            +977-9852054100
                        </span>
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-red-700 text-white py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>All Rights Reserved © 2025 Sudarshan Security Services</p>
                    <p>Technology Partner: SRIYOG Consulting</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;