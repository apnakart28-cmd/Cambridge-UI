import React from 'react';
import { Monitor, Zap, Music, Video, Presentation, Activity, Cpu, BookOpen } from 'lucide-react';

function FacilitiesGrid() {
  // Facilities ka data array
  const facilities = [
    {
      id: 1,
      name: "Computer Lab",
      description: "State-of-the-art computer labs with high-speed internet and latest software for hands-on learning.",
      icon: <Monitor size={40} strokeWidth={1.5} />
    },
    {
      id: 2,
      name: "Electric Generators",
      description: "24/7 uninterrupted power supply to ensure smooth and consistent learning experiences.",
      icon: <Zap size={40} strokeWidth={1.5} />
    },
    {
      id: 3,
      name: "Music Classes",
      description: "Dedicated music rooms equipped with various instruments to nurture creative talents.",
      icon: <Music size={40} strokeWidth={1.5} />
    },
    {
      id: 4,
      name: "Security Cameras",
      description: "Comprehensive CCTV coverage ensuring complete safety and security of all students.",
      icon: <Video size={40} strokeWidth={1.5} />
    },
    {
      id: 5,
      name: "Smart Classrooms",
      description: "Digital boards and projectors in classrooms to make learning interactive and engaging.",
      icon: <Presentation size={40} strokeWidth={1.5} />
    },
    {
      id: 6,
      name: "Games & Sports",
      description: "Expansive playgrounds and equipment for various indoor and outdoor sports activities.",
      icon: <Activity size={40} strokeWidth={1.5} />
    },
    {
      id: 7,
      name: "Modern Technology",
      description: "Integration of the latest tech tools in daily curriculum to keep students future-ready.",
      icon: <Cpu size={40} strokeWidth={1.5} />
    },
    {
      id: 8,
      name: "Rich Library",
      description: "A vast collection of academic books, journals, and literature to encourage reading habits.",
      icon: <BookOpen size={40} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
            <span className="text-[#DC2626] font-bold tracking-wider uppercase text-sm">Discover Our Campus</span>
            <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] leading-tight">
            Infrastructure & <span className="text-[#DC2626]">Facilities</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We provide a world-class environment equipped with top-notch facilities to ensure the overall growth and comfort of our students.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {facilities.map((facility) => (
            <div 
              key={facility.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#E0E7FF] text-[#1E3A8A] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                {facility.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3 group-hover:text-[#DC2626] transition-colors duration-300">
                {facility.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FacilitiesGrid;