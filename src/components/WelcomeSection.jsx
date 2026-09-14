import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, BookOpen } from 'lucide-react';

function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side: Image & Trust Badge */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Accent Shape (Updated to Red & Blue) */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#DC2626]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#1E3A8A]/10 rounded-full blur-3xl -z-10"></div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                alt="Cambridge Public School Students"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 bg-white p-4 md:p-6 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center gap-4 animate-bounce-slow border-b-4 border-[#DC2626]">
              <div className="bg-[#E0E7FF] p-3 rounded-full text-[#1E3A8A]">
                <Users size={32} />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A]">4890+</p>
                <p className="text-sm md:text-base text-gray-600 font-medium">Trusted Students</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-1 bg-[#DC2626] rounded-full"></span>
              <span className="text-[#DC2626] font-bold tracking-wider uppercase text-sm">About Our Institution</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] leading-tight mb-6">
              Welcome to <span className="text-[#DC2626]">Cambridge Public School</span>
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Since 2014, we are devoted to providing quality education. Our aim is to foster holistic development, nurturing not just academic excellence but also ethical values, creativity, and leadership skills in every student.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#DC2626]" size={24} />
                <span className="text-gray-800 font-semibold">Expert Teachers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#DC2626]" size={24} />
                <span className="text-gray-800 font-semibold">Modern Infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#DC2626]" size={24} />
                <span className="text-gray-800 font-semibold">Quality Education</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#DC2626]" size={24} />
                <span className="text-gray-800 font-semibold">Holistic Development</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about-us"
                className="bg-[#1E3A8A] text-white px-8 py-3 rounded-md font-bold hover:bg-[#DC2626] transition-colors duration-300 shadow-lg flex items-center gap-2"
              >
                <BookOpen size={20} />
                Read More
              </Link>

              <div className="flex items-center gap-3 ml-2">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#1E3A8A]">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Certified</p>
                  <p className="text-sm font-bold text-[#1E3A8A]">Govt. Recognized</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;