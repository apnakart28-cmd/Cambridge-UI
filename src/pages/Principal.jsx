import React from 'react';
import { Quote, BookOpen } from 'lucide-react';

function Principal() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl tracking-tight">
            Message from the Principal
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card (Full Width without Image) */}
        <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">

          {/* Text Content Area */}
          <div className="relative">
            {/* Background Quote Icon */}
            <Quote className="hidden sm:block absolute -top-6 -right-4 w-16 h-16 text-slate-200 transform z-0" fill="currentColor" />

            <div className="relative z-10 space-y-5 text-gray-600 leading-relaxed text-justify text-base sm:text-lg">
              <p>
                It gives me immense pleasure to welcome you to our school's website. We are committed to providing a safe, positive, and intellectual learning environment that will empower students to become creative problem solvers, critical thinkers, and inspired learners prepared for life in the twenty-first century.
              </p>
              <p>
                High standards and expectations for each student in regard to academic performance, co-curricular participation, and responsible citizenship are the foundation of our school. It is with pride that we hold these high standards and ask each of our students to commit to maintaining the extraordinary record of achievement.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-900">Sryanchal Dwivedi</h4>
                <div className="flex items-center gap-2 mt-1">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                    Principal, Cambridge Public School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Principal;