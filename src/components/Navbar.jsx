import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png'; // Aap apne logo ka path yahan set kar sakte hain

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  // Active link check karne ka function
  const isActive = (path) => location.pathname === path;

  // Navigation Links ki list
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
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
          <Link to="/" className="flex items-center gap-3">
            {/* Agar aapke paas logo.png hai toh is img tag ko uncomment karein aur div ko hata dein */}
            <img src={Logo} alt="Oxford Public School" className="h-14" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-[#1E3A8A] leading-tight">
                Oxford Public School
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wider hidden sm:block">
                DEVOTED QUALITY EDUCATION
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            <Link to="/" className={`px-3 py-2 rounded-md font-semibold transition-colors duration-300 ${isActive('/') ? 'text-[#F59E0B]' : 'text-slate-700 hover:text-[#F59E0B]'}`}>
              Home
            </Link>
            <Link to="/about-us" className={`px-3 py-2 rounded-md font-semibold transition-colors duration-300 ${isActive('/about-us') ? 'text-[#F59E0B]' : 'text-slate-700 hover:text-[#F59E0B]'}`}>
              About Us
            </Link>

            {/* Dropdown Menu for Messages */}
            <div className="relative group">
              <button className={`flex items-center px-3 py-2 rounded-md font-semibold transition-colors duration-300 ${location.pathname.includes('/messages') ? 'text-[#F59E0B]' : 'text-slate-700 hover:text-[#F59E0B]'}`}>
                Messages <ChevronDown size={16} className="ml-1" />
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                <Link to="/messages/manager" className="block px-4 py-3 text-sm text-slate-700 hover:bg-[#F8FAFC] hover:text-[#F59E0B] border-b border-gray-50">
                  Manager's Desk
                </Link>
                <Link to="/messages/principal" className="block px-4 py-3 text-sm text-slate-700 hover:bg-[#F8FAFC] hover:text-[#F59E0B]">
                  Principal's Pen
                </Link>
              </div>
            </div>

            {/* Baaki Links */}
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300 xl:text-base ${
                  isActive(link.path) ? 'text-[#F59E0B]' : 'text-slate-700 hover:text-[#F59E0B]'
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
              className="text-[#1E3A8A] hover:text-[#F59E0B] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide down) */}
      <div 
        className={`xl:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          <Link to="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md font-medium ${isActive('/') ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#F59E0B]'}`}>
            Home
          </Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md font-medium ${isActive('/about-us') ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#F59E0B]'}`}>
            About Us
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button 
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex justify-between items-center w-full px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F59E0B]"
            >
              <span>Messages</span>
              <ChevronDown size={18} className={`transform transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-6 space-y-1 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-40 mt-1' : 'max-h-0'}`}>
              <Link to="/messages/manager" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-[#F59E0B]">
                - Manager's Desk
              </Link>
              <Link to="/messages/principal" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-[#F59E0B]">
                - Principal's Pen
              </Link>
            </div>
          </div>

          {/* Baaki Mobile Links */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md font-medium ${
                isActive(link.path) ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#F59E0B]'
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