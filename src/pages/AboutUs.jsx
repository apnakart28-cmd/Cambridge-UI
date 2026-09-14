import React from 'react';
import { Target, Eye, Award, BookOpen, Heart, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/aboutUs.jpg'; // Example local image import

function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header / Hero Section */}
      <div className="bg-[#1E3A8A] py-16 lg:py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            About <span className="text-[#DC2626]">Us</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-[#DC2626] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#DC2626]">About Us</span>
          </div>
        </div>
      </div>

      {/* Introduction / Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#DC2626] rounded-tl-3xl rounded-br-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1E3A8A] rounded-tl-3xl rounded-br-3xl -z-10"></div>
              <img 
                src={aboutImage} 
                alt="School Campus" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#DC2626] hidden md:block">
                <p className="text-2xl font-bold text-[#1E3A8A]">10+ Years</p>
                <p className="text-sm text-gray-600 font-medium">of Excellence</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
                <span className="text-[#DC2626] font-bold tracking-wider uppercase text-sm">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-6">
                Nurturing Young Minds Since 2014
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Cambridge Public School was established with a dream to provide quality and holistic education to students. Over the years, we have grown into a premier institution that balances traditional values with modern teaching methodologies.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We believe that every child is unique. Our safe, engaging, and highly collaborative learning environment ensures that students do not just learn, but thrive.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
                  <CheckCircle className="text-[#DC2626]" size={20} /> Smart Classrooms
                </li>
                <li className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
                  <CheckCircle className="text-[#DC2626]" size={20} /> Experienced Faculty
                </li>
                <li className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
                  <CheckCircle className="text-[#DC2626]" size={20} /> Sports Facilities
                </li>
                <li className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
                  <CheckCircle className="text-[#DC2626]" size={20} /> Holistic Development
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Mission Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border-t-4 border-[#1E3A8A] shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide a stimulating learning environment with a technological orientation, which maximizes individual potential and ensures students of all ability levels are well-equipped to meet the challenges of education, work, and life.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border-t-4 border-[#DC2626] shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#DC2626] rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be a center of excellence in education, empowering students to become ethical, compassionate, and responsible global citizens who contribute positively to society while upholding strong moral values.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
              <span className="text-[#DC2626] font-bold tracking-wider uppercase text-sm">Core Values</span>
              <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg">
              The fundamental beliefs that guide our actions, shape our culture, and define our identity as an educational institution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto bg-[#E0E7FF] text-[#1E3A8A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Striving for the highest standards in academics and co-curricular activities.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto bg-[#E0E7FF] text-[#1E3A8A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Fostering honesty, transparency, and strong moral principles in our students.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto bg-[#E0E7FF] text-[#1E3A8A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">Compassion</h3>
              <p className="text-gray-600 text-sm">
                Developing empathy, respect, and kindness towards others and the environment.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto bg-[#E0E7FF] text-[#1E3A8A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">Lifelong Learning</h3>
              <p className="text-gray-600 text-sm">
                Instilling a deep passion and curiosity for learning that extends beyond school.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;