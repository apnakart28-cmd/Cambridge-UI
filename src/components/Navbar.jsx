import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Administrator sub-pages active hai ya nahi check karne ke liye
  const isAdministratorActive = 
    isActive('/administrator/manager-message') || 
    isActive('/administrator/principal-message');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  // Administrator ke Sub-pages
  const adminSubLinks = [
    { name: "Manager's Message", path: '/administrator/manager-message' },
    { name: "Principal's Message", path: '/administrator/principal-message' },
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

            <Link 
              to="/" 
              className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                isActive('/') ? 'text-[#DC2626]' : 'text-slate-700 hover:text-[#DC2626]'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about-us" 
              className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                isActive('/about-us') ? 'text-[#DC2626]' : 'text-slate-700 hover:text-[#DC2626]'
              }`}
            >
              About Us
            </Link>

            {/* Administrator Dropdown (Desktop) */}
            <div 
              className="relative group"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-2 py-2 rounded-md text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                  isAdministratorActive ? 'text-[#DC2626]' : 'text-slate-700 hover:text-[#DC2626]'
                }`}
              >
                <span>Administrator</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {desktopDropdownOpen && (
                <div className="absolute left-0 mt-0 w-52 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                  {adminSubLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.path}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive(subLink.path)
                          ? 'bg-slate-100 text-[#DC2626] font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'
                      }`}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Baaki Links */}
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                  isActive(link.path) ? 'text-[#DC2626]' : 'text-slate-700 hover:text-[#DC2626]'
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
        className={`xl:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className={`block px-3 py-2 rounded-md font-medium ${isActive('/') ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
          >
            Home
          </Link>
          
          <Link 
            to="/about-us" 
            onClick={() => setIsOpen(false)} 
            className={`block px-3 py-2 rounded-md font-medium ${isActive('/about-us') ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'}`}
          >
            About Us
          </Link>

          {/* Administrator Mobile Accordion Dropdown */}
          <div>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium ${
                isAdministratorActive ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'
              }`}
            >
              <span>Administrator</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileDropdownOpen && (
              <div className="pl-4 py-1 space-y-1 bg-slate-50 rounded-md mt-1">
                {adminSubLinks.map((subLink) => (
                  <Link
                    key={subLink.name}
                    to={subLink.path}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(subLink.path) ? 'text-[#DC2626] font-semibold' : 'text-slate-600 hover:text-[#DC2626]'
                    }`}
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Baaki Mobile Links */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md font-medium ${
                isActive(link.path) ? 'bg-[#1E3A8A] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'
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