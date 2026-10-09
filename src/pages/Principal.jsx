import React from 'react';
import { User, Quote, BookOpen } from 'lucide-react';

function Principal() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Page Header */}
      <div className="max-w-5xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-3">
          Principal's Message
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
              {/* Jab principal sir/ma'am ki photo aaye, is comment ko hatakar img tag active karein aur <User /> hata dein */}
              {/* <img src="/path-to-principal-image.jpg" alt="Sryanchal Dwivedi" className="w-full h-full object-cover" /> */}
              
              <User size={80} className="text-gray-300" strokeWidth={1.5} />
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Suryanchal Dwivedi
              </h2>
              
              <div className="flex items-center justify-center gap-2 mt-2">
                <BookOpen className="w-4 h-4 text-[#DC2626]" />
                <span className="inline-block text-[#1E3A8A] text-sm font-bold uppercase tracking-wider">
                  Principal
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Message Content */}
          <div className="md:w-2/3 p-8 lg:p-10 relative">
            <Quote 
              size={100} 
              className="absolute top-4 right-4 text-gray-100 z-0 opacity-50" 
            />
            
            <div className="relative z-10 text-gray-700 leading-relaxed space-y-5 text-justify">
              <p className="text-lg font-medium text-gray-900">
                Dear Students, Parents, and Staff,
              </p>
              
              <p>
                It gives me immense pleasure to welcome you to our school's website. We are committed to providing a safe, positive, and intellectual learning environment that will empower students to become creative problem solvers, critical thinkers, and inspired learners prepared for life in the twenty-first century.
              </p>

              <p>
                High standards and expectations for each student in regard to academic performance, co-curricular participation, and responsible citizenship are the foundation of our school. It is with pride that we hold these high standards and ask each of our students to commit to maintaining the extraordinary record of achievement.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="font-medium text-gray-800">Warm Regards,</p>
                <div className="mt-4">
                  {/* Digital Signature Placeholder */}
                  <h3 className="text-xl font-bold text-[#1E3A8A] italic" style={{ fontFamily: 'cursive' }}>
                   Suryanchal Dwivedi
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Principal, Cambridge Public School
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

export default Principal;