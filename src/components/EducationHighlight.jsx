import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Lightbulb, Trophy } from 'lucide-react';

function EducationHighlight() {
  return (
    // 'bg-fixed' class se background image parallax effect deti hai
    <section 
      className="relative py-20 bg-fixed bg-center bg-cover overflow-hidden" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')" }}
    >
      {/* Deep Navy Blue Overlay - Image ko thoda dark aur blue tint dene ke liye */}
      <div className="absolute inset-0 bg-[#1E3A8A]/85"></div>
      
      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl z-10">
        
        {/* Top Text Content */}
        <div className="max-w-3xl mx-auto text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Devoted to <span className="text-[#F59E0B]">Quality Education</span> Since 2014
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium">
            We provide a vibrant learning environment that fosters innovation, critical thinking, and a lifelong love for learning in every child.
          </p>
          <Link 
            to="/contact-us" 
            className="inline-block bg-[#F59E0B] text-white px-8 py-3.5 rounded-md font-bold text-lg hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Apply for Admission
          </Link>
        </div>

        {/* Highlight Stats / Features Grid (Glassmorphism Effect) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Feature Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 mx-auto bg-[#F59E0B] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Classrooms</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Interactive learning experience with modern digital tools, projectors, and rich multimedia resources.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 mx-auto bg-[#F59E0B] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Faculty</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Highly qualified, dedicated, and experienced teachers to guide your child at every step of their journey.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 mx-auto bg-[#F59E0B] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Trophy size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Excellence Awards</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Consistent track record of academic excellence, sports achievements, and overall student success.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EducationHighlight;