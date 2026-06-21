import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// Context import karein (path check kar lein)
import { useSchoolProfile } from '../context/SchoolProfileContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Context se data fetch karein
  const { schoolProfile } = useSchoolProfile();
  
  // Safe extraction with fallbacks (agar data na ho toh default value dikhegi)
  const schoolName = schoolProfile?.schoolName || "Oxford Public School";
  const address = schoolProfile?.address || "Raskoopa Bahadurpur, Kanth, Shahjahanpur, U.P. India, Pin-242223";
  const phone = schoolProfile?.primaryPhone || "+91 9415847324";
  const email = schoolProfile?.email || "info@opsspn.in";
  const social = schoolProfile?.socialLinks || {};

  // School name ko do line me todne ke liye (first word alag, baaki alag)
  const nameParts = schoolName.split(' ');
  const firstWord = nameParts[0];
  const restOfName = nameParts.slice(1).join(' ');

  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-8 border-t-4 border-[#F59E0B]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About School */}
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-lg rounded-full">
                  {firstWord.substring(0, 3).toUpperCase()} {/* Logo text dynamic */}
                </div>
                <span className="text-xl font-bold text-white leading-tight">
                  {firstWord} <br />{restOfName}
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Devoted to quality education since 2014. We focus on academic excellence and the holistic development of every child in a safe environment.
            </p>
            
            {/* Dynamic Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300">
                  <FaFacebookF size={16} />
                </a>
              )}
              {social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300">
                  <FaTwitter size={16} />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300">
                  <FaInstagram size={16} />
                </a>
              )}
              {social.youtube && (
                <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300">
                  <FaYoutube size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-0.5 after:bg-[#F59E0B]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/messages/manager" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  Manager's Desk
                </Link>
              </li>
              <li>
                <Link to="/messages/principal" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  Principal's Pen
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  Our Teachers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-0.5 after:bg-[#F59E0B]">
              Important Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mandatory-disclosure" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  Mandatory Disclosure
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  Photo Gallery
                </Link>
              </li>
              <li>
                <a href="/books.pdf" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  List of Books
                </a>
              </li>
              <li>
                <Link to="/contact-us" className="text-sm hover:text-[#F59E0B] transition-colors duration-300 flex items-center group">
                  <ChevronRight size={14} className="mr-2 text-gray-500 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Dynamic) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-0.5 after:bg-[#F59E0B]">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#F59E0B] mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400 whitespace-pre-line">
                  {address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#F59E0B] mr-3 flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  {phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#F59E0B] mr-3 flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  {email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} {schoolName}. All Rights Reserved.
          </p>
          <p>
            Designed & Developed by <a href="#" className="text-gray-300 hover:text-[#F59E0B] font-semibold transition-colors duration-300">Your Company Name</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;