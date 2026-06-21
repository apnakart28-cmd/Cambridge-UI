import React from 'react';
import { User, Quote } from 'lucide-react'; 

function Manager() {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl tracking-tight">
            Message from the Manager
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-white p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          
          {/* Image Placeholder Area */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden shadow-inner border-2 border-dashed border-gray-300 flex flex-col items-center justify-center group transition-all hover:border-blue-400 hover:bg-blue-50/50">
               {/* Jab image available ho, is div ke content ko hata kar apni <img> tag laga dein */}
               {/* Example: <img src="/path-to-manager-image.jpg" alt="Manager" className="object-cover w-full h-full" /> */}
               <User className="w-16 h-16 text-gray-400 mb-3 group-hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
               <span className="text-sm text-gray-500 font-medium group-hover:text-blue-600 transition-colors duration-300">
                 Manager Image Placeholder
               </span>
            </div>
          </div>

          {/* Text Content Area */}
          <div className="w-full lg:w-2/3 relative">
            {/* Background Quote Icon */}
            <Quote className="hidden sm:block absolute -top-6 -left-8 w-16 h-16 text-blue-50 transform -scale-x-100 z-0" fill="currentColor" />
            
            <div className="relative z-10 space-y-5 text-gray-600 leading-relaxed text-justify text-base sm:text-lg">
              <p>
                {/* Yahan manager.html se pehla paragraph paste karein */}
                Education is not merely the accumulation of facts, but the preparation of life itself. Education is knowledge imbued with wisdom and ethics. It develops the personality of the students, moulds their character and develops mental skills to help them cope with problems and challenges of the complex world of today.
              </p>
              <p>
                {/* Yahan dusra paragraph paste karein */}
                At our institution, we aim to provide an enriching and stimulating environment where children can grow, learn, and discover their true potential. We believe in nurturing not just academic excellence, but also moral values, sportsmanship, and a sense of responsibility towards society.
              </p>
              <p>
                {/* Yahan teesra paragraph paste karein */}
                Our dedicated team of educators is committed to fostering a culture of continuous learning and innovation. We invite you to join us in this journey of empowering the next generation of leaders.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-900">Anil Mishra</h4>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mt-1">
                  Manager, Oxford Public School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Manager;