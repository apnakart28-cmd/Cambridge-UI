import React from 'react';
import { ShieldCheck, Brain, Users, Sparkles, Target, Clock } from 'lucide-react';

function BenefitsSection() {
  // Benefits ka data array
  const benefits = [
    {
      id: 1,
      title: "Holistic Development",
      description: "We focus on academic excellence, physical fitness, and mental well-being for all-round growth.",
      icon: <Brain size={24} />
    },
    {
      id: 2,
      title: "Safe & Secure Environment",
      description: "A fully monitored, ragging-free campus ensuring the utmost safety of every child.",
      icon: <ShieldCheck size={24} />
    },
    {
      id: 3,
      title: "Parent-Teacher Collaboration",
      description: "Regular PTMs and transparent communication to keep parents involved in their child's progress.",
      icon: <Users size={24} />
    },
    {
      id: 4,
      title: "Value-Based Education",
      description: "Instilling strong moral values, ethics, and discipline to build responsible future citizens.",
      icon: <Sparkles size={24} />
    },
    {
      id: 5,
      title: "Focus on Practical Skills",
      description: "Moving beyond rote learning with hands-on projects, labs, and interactive activities.",
      icon: <Target size={24} />
    },
    {
      id: 6,
      title: "Timely Updates & Routine",
      description: "Strict adherence to academic calendars and timely updates through our digital portal.",
      icon: <Clock size={24} />
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Text and Benefits List */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-[#F59E0B] rounded-full"></span>
              <span className="text-[#F59E0B] font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] leading-tight mb-6">
              Benefits of Learning at <span className="text-[#F59E0B]">Oxford</span>
            </h2>
            
            <p className="text-gray-600 mb-10 text-lg">
              We go beyond traditional teaching methods to ensure every student discovers their true potential in a nurturing and competitive environment.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E0E7FF] text-[#1E3A8A] flex items-center justify-center group-hover:bg-[#F59E0B] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Composition */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            {/* Background Decorative Box */}
            <div className="absolute top-10 -right-4 w-full h-full bg-[#1E3A8A] rounded-2xl -z-10 transform rotate-3"></div>
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Students studying together" 
                className="w-full h-[500px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Stat Box */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-[#F59E0B]">
                <p className="text-3xl font-extrabold text-[#1E3A8A]">10+</p>
                <p className="text-sm font-bold text-gray-800">Years of</p>
                <p className="text-sm text-gray-600">Educational Excellence</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;