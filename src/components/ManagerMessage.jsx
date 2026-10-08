import React from 'react';
import { User, Quote } from 'lucide-react'; // Icons for placeholder and design

function ManagerMessage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-3">
          Manager's Message
        </h1>
        <div className="w-24 h-1 bg-[#DC2626] mx-auto rounded-full"></div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Column: Photo & Name Section */}
          <div className="md:w-1/3 bg-slate-100 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
            {/* Photo Placeholder */}
            <div className="relative w-48 h-48 rounded-full bg-white flex items-center justify-center border-4 border-[#1E3A8A] shadow-md mb-6 overflow-hidden">
              {/* Jab actual image aaye, is niche wale img tag ko uncomment karein aur icon hata dein */}
              {/* <img src="/path-to-image.jpg" alt="Mr. Lucky Verma" className="w-full h-full object-cover" /> */}
              
              <User size={80} className="text-gray-300" strokeWidth={1.5} />
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Mr. Lucky Verma
              </h2>
              <span className="inline-block px-4 py-1 bg-[#1E3A8A] text-white text-sm font-semibold rounded-full mt-2">
                Director / Manager
              </span>
            </div>
          </div>

          {/* Right Column: Message Content */}
          <div className="md:w-2/3 p-8 lg:p-10 relative">
            <Quote 
              size={100} 
              className="absolute top-4 right-4 text-gray-100 z-0 opacity-50" 
            />
            
            <div className="relative z-10 text-gray-700 leading-relaxed space-y-5">
              <p className="text-lg font-medium text-gray-900">
                Dear Parents, Students, and Well-wishers,
              </p>
              
              <p>
                Welcome to <span className="font-semibold text-[#1E3A8A]">Cambridge Public School</span>. 
                Education is not merely the accumulation of facts; it is the preparation of life itself. 
                At our school, we aim to provide a nurturing environment where every child can discover 
                and realize their full potential.
              </p>

              <p>
                In today’s rapidly changing world, our mission is to empower students with critical thinking 
                skills, global perspective, and a strong moral compass. We believe that a strong partnership 
                between the school and parents is essential for the holistic development of our students.
              </p>

              <p>
                Our dedicated faculty members are committed to providing quality education and ensuring 
                that each student feels valued and supported. We focus not only on academic excellence 
                but also on extracurricular activities, sports, and character building.
              </p>

              <p>
                Let us work together to shape the future of our children and make them responsible, 
                compassionate, and successful citizens of tomorrow.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="font-medium text-gray-800">Warm Regards,</p>
                <div className="mt-4">
                  {/* Digital Signature Placeholder */}
                  <h3 className="text-xl font-bold text-[#1E3A8A] italic" style={{ fontFamily: 'cursive' }}>
                    Lucky Verma
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Director, Cambridge Public School
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ManagerMessage;