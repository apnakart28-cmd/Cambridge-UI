import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  BookOpen,
  FlaskConical,
  Bus,
  Trophy,
  Users,
  Wifi,
  ShieldCheck
} from 'lucide-react';

function Infrastructure() {
  // Facilities Data Array
  const facilities = [
    {
      id: 1,
      title: 'Smart Classrooms',
      description: 'Spacious, well-ventilated classrooms equipped with interactive smart boards and projectors to make learning visual and engaging.',
      icon: <Users size={32} />,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Science Laboratories',
      description: 'Fully equipped Physics, Chemistry, and Biology labs that provide a safe environment for hands-on practical learning and experiments.',
      icon: <FlaskConical size={32} />,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Hi-Tech Computer Lab',
      description: 'Modern computer lab with the latest hardware, high-speed internet, and updated software to build early technical proficiency.',
      icon: <Monitor size={32} />,
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Vast Library',
      description: 'A quiet, well-stocked library featuring thousands of books, journals, and digital resources covering various academic and fictional subjects.',
      icon: <BookOpen size={32} />,
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2030&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Sports Complex',
      description: 'Extensive playgrounds and courts for basketball, volleyball, badminton, and athletics to promote physical fitness and teamwork.',
      icon: <Trophy size={32} />,
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Safe Transport',
      description: 'A fleet of well-maintained school buses with GPS tracking and trained staff, ensuring safe and comfortable commute for students.',
      icon: <Bus size={32} />,
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* Page Header */}
      <div className="bg-[#1E3A8A] py-16 lg:py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Our <span className="text-[#DC2626]">Infrastructure</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-[#DC2626] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#DC2626]">Infrastructure</span>
          </div>
        </div>
      </div>

      {/* Campus Overview Section */}
      <section className="py-16 mt-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
                <span className="text-[#DC2626] font-bold tracking-wider uppercase text-sm">Campus Overview</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-6">
                A World-Class Environment for Holistic Growth
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Spread across a sprawling, lush green campus, Cambridge Public School offers a serene and pollution-free environment ideal for learning. Our architecture is designed to maximize natural light and ventilation, ensuring student comfort throughout the year.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="bg-[#E0E7FF] text-[#1E3A8A] p-3 rounded-lg">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E3A8A]">24/7 Security</h4>
                    <p className="text-sm text-gray-500 mt-1">CCTV surveillance across campus</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="bg-[#FEE2E2] text-[#DC2626] p-3 rounded-lg">
                    <Wifi size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E3A8A]">Digital Campus</h4>
                    <p className="text-sm text-gray-500 mt-1">Wi-Fi enabled academic blocks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="absolute top-4 -right-4 w-full h-full bg-[#DC2626] rounded-2xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop"
                alt="School Campus Building"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
              <span className="text-[#DC2626] font-bold tracking-wider uppercase text-sm">Key Facilities</span>
              <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
              Designed to Empower Students
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white text-[#1E3A8A] w-12 h-12 flex items-center justify-center rounded-full shadow-lg group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300 z-10">
                    {facility.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-white relative">
                  {/* Small decorative line */}
                  <div className="absolute top-0 left-6 w-12 h-1 bg-[#DC2626] group-hover:w-full transition-all duration-500"></div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3 mt-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Infrastructure;