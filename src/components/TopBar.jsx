import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// Apne Context hook ka path sahi se set karein
import { useSchoolProfile } from '../context/SchoolProfileContext'; 

function TopBar() {
  // Context se API ka data aur loading state nikal rahe hain
  const { schoolProfile, loading } = useSchoolProfile();

  // Agar data load ho raha hai, toh temporarily top bar ka structure empty chhod sakte hain
  if (loading) {
    return <div className="bg-[#1E3A8A] py-2 h-9 hidden md:block"></div>;
  }

  // Safe data extraction using optional chaining
  const phone = schoolProfile?.primaryPhone;
  const email = schoolProfile?.email;
  const social = schoolProfile?.socialLinks || {};

  return (
    <div className="bg-[#1E3A8A] text-white py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center max-w-7xl">
        
        {/* Left Side: Contact Information */}
        <div className="flex items-center space-x-6 font-medium">
          {phone && (
            <a 
              href={`tel:${phone}`} 
              className="flex items-center space-x-2 hover:text-[#F59E0B] transition-colors duration-300"
            >
              <Phone size={16} />
              <span>{phone}</span>
            </a>
          )}
          
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="flex items-center space-x-2 hover:text-[#F59E0B] transition-colors duration-300"
            >
              <Mail size={16} />
              <span>{email}</span>
            </a>
          )}
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-300 font-medium mr-2">Follow us on:</span>
          
          {/* Conditional rendering: Icon tabhi dikhega jab link API me available ho */}
          {social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#F59E0B] transition-transform hover:scale-110 duration-300">
              <FaFacebookF size={16} />
            </a>
          )}
          
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#F59E0B] transition-transform hover:scale-110 duration-300">
              <FaTwitter size={16} />
            </a>
          )}
          
          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#F59E0B] transition-transform hover:scale-110 duration-300">
              <FaInstagram size={16} />
            </a>
          )}
          
          {social.youtube && (
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="hover:text-[#F59E0B] transition-transform hover:scale-110 duration-300">
              <FaYoutube size={16} />
            </a>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default TopBar;