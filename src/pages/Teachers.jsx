import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Mail, Loader2, ChevronDown } from 'lucide-react';
import { getAllTeachersApi } from '../api/teacherApi'; 

function Teachers() {
  // 1. States for Data, Loading, and View More
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8); // Shuru mein kitne teachers dikhane hain

  // 2. Fetching data from API
  useEffect(() => {
    const fetchTeachersData = async () => {
      try {
        setLoading(true);
        const response = await getAllTeachersApi();
        
        // Backend response structure ke hisaab se
        const fetchedData = response?.data?.data || response?.data || [];
        setTeachers(fetchedData);
        
      } catch (error) {
        console.error("Teachers data fetch karne mein error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachersData();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

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
            Our <span className="text-[#DC2626]">Faculty</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-[#DC2626] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#DC2626]">Teachers</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
            <span className="text-[#DC2626] font-bold tracking-wider uppercase text-sm">Meet Our Team</span>
            <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
            Inspiring the Leaders of Tomorrow
          </h2>
          <p className="text-gray-600 text-lg">
            Our highly qualified and experienced teachers are dedicated to providing the best learning experience, nurturing each student's unique potential.
          </p>
        </div>

        {/* 3. Loading State Handle */}
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20 space-y-4">
             <div className="relative">
              <div className="absolute inset-0 bg-[#DC2626] rounded-full blur-xl opacity-20 animate-pulse"></div>
              <Loader2 className="animate-spin text-[#1E3A8A] relative z-10" size={56} />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A8A] animate-pulse">Loading Faculty Details...</h3>
          </div>
        ) : (
          <>
            {/* Teachers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teachers.slice(0, visibleCount).map((teacher) => (
                <div 
                  key={teacher._id} // ID update kiya
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                      src={teacher.photoUrl} // photoUrl update kiya
                      alt={teacher.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <button className="bg-[#DC2626] text-white p-3 rounded-full hover:bg-white hover:text-[#DC2626] transition-colors shadow-lg">
                        <Mail size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">{teacher.name}</h3>
                    {/* Backend mein designation nahi tha toh qualification dikha rahe hain */}
                    <p className="text-[#DC2626] font-semibold text-sm mb-4">
                      {teacher.qualification || 'Faculty Member'}
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <BookOpen size={16} className="text-gray-400" />
                        <span>{teacher.subject}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <Award size={16} className="text-gray-400" />
                        {/* Ensure "Experience" word lag jaaye agar backend se nahi aata */}
                        <span>
                          {teacher.experience?.toLowerCase().includes('year') || teacher.experience?.toLowerCase() === 'fresher' 
                            ? teacher.experience 
                            : `${teacher.experience} Experience`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {teachers.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg font-medium">No faculty members found at the moment.</p>
              </div>
            )}

            {/* View More Button */}
            {visibleCount < teachers.length && (
              <div className="mt-16 flex justify-center">
                <button 
                  onClick={handleViewMore}
                  className="flex items-center gap-2 bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] px-8 py-3 rounded-full font-bold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  View More <ChevronDown size={20} />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default Teachers;