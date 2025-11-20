import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'message', label: 'Message' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (itemId) => {
    setActiveLink(itemId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className=" text-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl text-yellow-300">ES</span>
              <span className="text-lg text-yellow-20 text-yellow-300">Sudarshan</span>
            </div>
            <div className="text-sm">Security Services</div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`hover:text-yellow-300 transition ${
                    activeLink === item.id ? 'underline' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex flex-col justify-center space-y-1 cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden  space-y-2 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block px-4 py-2 hover:bg-yellow-200 hover:text-black rounded ${
                    activeLink === item.id ? 'underline' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
