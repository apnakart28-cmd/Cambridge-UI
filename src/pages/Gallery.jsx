import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { getAllGalleryApi } from '../api/galleryApi';

function Gallery() {
  // States
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Categories (API mein category nahi hai, isliye abhi sab 'All' mein aayenge)
  const categories = [];

  // API se data fetch karne ka logic
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await getAllGalleryApi();
        
        // Backend response structure ke hisaab se data nikalna
        // Agar axios use kar rahe hain toh response.data.data ho sakta hai
        const fetchedData = response?.data?.data || response?.data || [];
        setGalleryItems(fetchedData);
        
      } catch (error) {
        console.error("Gallery data fetch karne mein error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Filter logic (Agar future mein API mein category aati hai toh ye kaam karega)
  const filteredGallery = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <div className="bg-[#1E3A8A] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Photo <span className="text-[#F59E0B]">Gallery</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F59E0B]">Gallery</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-12">
        
        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-gray-600 text-lg">
            A glimpse into the vibrant life at Oxford Public School. Explore our campus, academic activities, sports events, and cultural celebrations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#1E3A8A] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State Handle */}
        {loading ? (
          <div className="flex flex-col justify-center items-center py-32 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F59E0B] rounded-full blur-xl opacity-20 animate-pulse"></div>
              <Loader2 className="animate-spin text-[#1E3A8A] relative z-10" size={56} />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A8A] animate-pulse">Loading amazing moments...</h3>
          </div>
        ) : (
          <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div 
                  key={item._id} // ID updated
                  className="group relative h-72 rounded-2xl overflow-hidden shadow-sm bg-gray-200 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.imageUrl} // SRC updated to imageUrl
                    alt={item.caption || "Oxford School Event"} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1E3A8A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <div className="bg-[#F59E0B] p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 mb-3">
                      <Maximize2 size={24} />
                    </div>
                    {/* Caption logic: agar khali hai toh default text dikhaye */}
                    <h3 className="text-white font-bold text-lg text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
                      {item.caption || "Beautiful Moment"} 
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State Handle */}
            {!loading && filteredGallery.length === 0 && (
              <div className="text-center py-20">
                <ImageIcon className="mx-auto text-gray-300 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-500">No images found.</h3>
                <p className="text-gray-400 mt-2">Check back later for new updates!</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox (Popup for Image) */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#F59E0B] transition-colors z-50 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md"
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.caption || "Gallery View"} 
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {selectedImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-center rounded-b-lg">
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">
                  {selectedImage.caption}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Gallery;