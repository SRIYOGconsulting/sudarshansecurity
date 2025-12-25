import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../Data";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", path: "/home" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "message", label: "Message", path: "/messages" },
    { id: "team", label: "Team", path: "/team" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "Apply", label: "Apply", path: "/apply" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-red-800 bg-opacity-90 text-yellow-50 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/home">
            <img src={logo[0]} alt="Logo" className="h-12" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:text-yellow-300 focus:text-yellow-300 active:text-yellow-300 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger / Cross */}
          <div
            className="md:hidden flex flex-col justify-center items-center cursor-pointer w-8 h-8 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {!isMobileMenuOpen ? (
              <>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </>
            ) : (
              <>
                <span className="block w-6 h-0.5 bg-white rotate-45 absolute top-3"></span>
                <span className="block w-6 h-0.5 bg-white -rotate-45 absolute top-3"></span>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-20 left-0 w-full bg-black bg-opacity-90 space-y-2 py-4 z-40">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded transition-colors duration-200
                    hover:bg-yellow-200 focus:bg-yellow-200 active:bg-yellow-200
                    hover:text-black focus:text-black active:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
