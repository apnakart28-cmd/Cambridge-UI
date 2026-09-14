import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isMessageActive = isActive('/messages/manager') || isActive('/messages/principal');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-white shadow-md relative z-40 w-full">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 xl:gap-3">
            <img src={Logo} alt="Cambridge Public School" className="h-12 xl:h-14" />
            <div className="flex flex-col">
              <span className="text-lg xl:text-xl font-bold text-[#1E3A8A] leading-tight whitespace-nowrap">
                Cambridge Public School
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-3">

            <Link to="/" className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${isActive('/') ? 'text-[#DC2626]' : 'text-slate-700 hover:text-[#DC2626]'}`}>
              Home
            </Link>

            <Link to="/about-us" className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${isActive('/about-us') ? 'text-[#DC2626]' : 'text-slate-700 hover:text-[#DC2626]'}`}>
              About Us
            </Link>


            {/* Baaki Links */}
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${isActive(link.path) ? 'text-[#DC2626]' : 'text-slate-700 hover:text-[#DC2626]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E3A8A] hover:text-[#DC2626] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide down) */}
      <div
        className={`xl:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-3 space-y-1">
          <Link to="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md font-medium ${isActive('/') ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}>
            Home
          </Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md font-medium ${isActive('/about-us') ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}>
            About Us
          </Link>
          {/* Baaki Mobile Links */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md font-medium ${isActive(link.path) ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
