import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight, CalendarDays } from 'lucide-react';
// Context import karein (path check kar lein)
import { useSchoolProfile } from '../context/SchoolProfileContext';

function ContactBanner() {
  // Context se data fetch karein
  const { schoolProfile } = useSchoolProfile();

  // Data mapping with fallbacks
  const schoolName = schoolProfile?.schoolName || "Oxford Public School";
  const phone = schoolProfile?.primaryPhone || "+91 98765 43210";
  
  // Working hours formatting
  // Agar API me working hours hain toh unhe use karein, warna default dikhayein
  const workingHours = schoolProfile?.workingHours?.mondayToFriday 
    ? `Mon - Fri, ${schoolProfile.workingHours.mondayToFriday}` 
    : "Mon - Sat, 8 AM - 4 PM";

  return (
    <section className="relative py-16 mt-12 mb-12 lg:mt-20 lg:mb-20 px-4">
      {/* Background with Gradient and Shape */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#152C6B] rounded-3xl mx-4 lg:mx-8 shadow-2xl overflow-hidden">
        {/* Abstract Background Shapes for Texture */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F59E0B] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-12 max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-8 lg:py-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Ready to Shape Your Child's <span className="text-[#F59E0B]">Future?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-medium">
              Admissions are now open for the upcoming academic session. Join {schoolName} and give your child the education they deserve.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center gap-3 text-white">
                <div className="bg-white/20 p-2.5 rounded-full">
                  <PhoneCall size={20} className="text-[#F59E0B]" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Call Us Today</p>
                  <a href={`tel:${phone}`} className="text-lg font-bold hover:text-[#F59E0B] transition-colors duration-300">
                    {phone}
                  </a>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-white/20"></div> {/* Divider */}
              
              <div className="flex items-center gap-3 text-white">
                <div className="bg-white/20 p-2.5 rounded-full">
                  <CalendarDays size={20} className="text-[#F59E0B]" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Working Hours</p>
                  <p className="text-sm sm:text-base font-bold">{workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-center lg:items-end">
            <Link 
              to="/contact-us" 
              className="w-full sm:w-auto lg:w-full max-w-xs flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 shadow-lg group"
            >
              Contact Us Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/admission" 
              className="w-full sm:w-auto lg:w-full max-w-xs flex items-center justify-center bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Admission Procedure
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactBanner;