import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 🛑 IMAGE IMPORT (Sabse safe tareeqa)
// Apni image ko src/assets folder me rakhein aur yahan aise import karein:
// Dhyan dein: Agar aapka HeroSlider kisi aur folder me hai, toh path ('../../assets/...') apne hisab se adjust kar lein.
// Image ka naam 'cambridge-hero.jpeg' kar diya gaya hai, ise apne assets ke anusar adjust kar lein.
import bgImage from '../assets/oxford-hero.jpeg'; // <-- Yahan apni image ka path aur naam adjust karein

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Welcome To Cambridge Public School",
      subtitle: "Empowering students with knowledge, skills, and values for a brighter future.",
      buttonText: "Learn More",
      link: "/about-us"
    },
    {
      id: 2,
      title: "We Can Teach You",
      subtitle: "Building a strong foundation with expert faculties and modern infrastructure.",
      buttonText: "Our Facilities",
      link: "/infrastructure"
    },
    {
      id: 3,
      title: "Shape Your Career",
      subtitle: "Experience live learning, professional courses, and holistic development.",
      buttonText: "Contact Us",
      link: "/contact-us"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-slate-900">
      
      {/* 1. BACKGROUND IMAGE */}
      <img
        src={bgImage} 
        alt="Cambridge Public School Campus"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* 2. BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* 3. TEXT CONTENT (Overlapping Fix Kar Diya Gaya Hai) */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-700 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 z-10 visible scale-100" 
              : "opacity-0 z-0 invisible scale-95 pointer-events-none" // invisible se ghost text nahi banega
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow-md">
            {slide.subtitle}
          </p>
          <Link
            to={slide.link}
            className="bg-[#DC2626] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-[#1E3A8A] transition-colors duration-300 shadow-lg"
          >
            {slide.buttonText}
          </Link>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-[#DC2626] text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-[#DC2626] text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronRight size={32} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#DC2626] w-8" : "bg-white/50 w-3 hover:bg-white"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
}

export default HeroSlider;