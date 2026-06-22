import React, { useState, useEffect } from 'react';
import { getPublicNewsApi } from '../api/newsApi'; // Apne API path ke hisaab se adjust karein

function LatestNewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchPublicNews = async () => {
      try {
        setLoading(true);
        // API call to fetch active public news
        const response = await getPublicNewsApi();
        
        // Agar response.data array hai toh use set karein (Axios usually data key mein response deta hai)
        // Agar aap seedha fetch use kar rahe hain aur array return ho raha hai, toh response ko use karein
        const newsData = response.data ? response.data : response; 
        
        setNews(newsData || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching public news:", error);
        setLoading(false);
      }
    };

    fetchPublicNews();
  }, []);

  // "23 Jun" jaisa block banane ke liye formatter
  const formatDateBlock = (dateString) => {
    if (!dateString) return { day: '-', month: '-' };
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return { day, month };
  };

  // Full date formatter modal ke liye
  const formatFullDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const openModal = (item) => {
    setSelectedNews(item);
    document.body.style.overflow = 'hidden'; // Modal open hone par background scroll disable karein
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'auto'; // Modal close hone par scroll wapas enable karein
  };

  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '80px 20px', fontFamily: '"Inter", "Segoe UI", sans-serif', position: 'relative' }}>
      
      <style>
        {`
          .news-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
          }
          .news-card {
            background: #FFFFFF; 
            border-radius: 12px;
            padding: 24px;
            transition: all 0.3s ease;
            display: flex;
            gap: 20px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid transparent;
          }
          .news-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: #F59E0B; 
          }
          .date-block {
            background: #1E3A8A; 
            color: #FFFFFF;
            min-width: 75px;
            height: 80px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: 0 4px 6px rgba(30, 58, 138, 0.2);
          }
          .read-more-btn {
            background: transparent;
            border: none;
            padding: 0;
            color: #1E3A8A;
            font-weight: 600;
            font-size: 14px;
            margin-top: 12px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            transition: color 0.2s;
            font-family: inherit;
          }
          .read-more-btn:hover {
            color: #F59E0B; 
          }
          .read-more-btn svg {
            transition: transform 0.2s;
          }
          .read-more-btn:hover svg {
            transform: translateX(4px);
          }
          /* Modal Animations */
          .public-modal-overlay { 
            animation: fadeIn 0.2s ease-out; 
            backdrop-filter: blur(4px); 
          }
          .public-modal-content { 
            animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scaleUp { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        `}
      </style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '36px', color: '#1E3A8A', margin: '0 0 12px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>
          Latest Updates & Announcements
        </h2>
        <p style={{ color: '#475569', fontSize: '18px', margin: 0, maxWidth: '650px', marginInline: 'auto', lineHeight: '1.5' }}>
          Stay updated with the latest news, events, and important notices from Oxford Public School.
        </p>
        <div style={{ width: '80px', height: '4px', backgroundColor: '#F59E0B', margin: '24px auto 0', borderRadius: '2px' }}></div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#475569' }}>
          {/* Professional Loading Spinner Animation */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite', marginBottom: '10px' }}>
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
          <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
          <p style={{ fontSize: '16px', fontWeight: '500', margin: 0 }}>Loading notices...</p>
        </div>
      ) : (
        <div className="news-grid">
          {news.length > 0 ? (
            news.map((item) => {
              const { day, month } = formatDateBlock(item.startDate);
              return (
                <div key={item._id} className="news-card">
                  
                  <div className="date-block">
                    <span style={{ fontSize: '26px', fontWeight: '800', lineHeight: '1' }}>{day}</span>
                    <span style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{month}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#1E293B', fontWeight: '700', lineHeight: '1.3' }}>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, color: '#475569', fontSize: '15px', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.description}
                    </p>
                    
                    <button onClick={() => openModal(item)} className="read-more-btn">
                      Read Full Notice 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>

                </div>
              );
            })
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', background: '#FFFFFF', borderRadius: '12px', color: '#475569', border: '1px dashed #cbd5e1' }}>
              <svg style={{ margin: '0 auto 15px', display: 'block', color: '#94a3b8' }} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p style={{ fontSize: '18px', margin: 0 }}>No active announcements right now.</p>
            </div>
          )}
        </div>
      )}

      {/* Modern Notice Modal Popup */}
      {selectedNews && (
        <div 
          className="public-modal-overlay" 
          onClick={closeModal} 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
            backgroundColor: 'rgba(15, 23, 42, 0.75)', zIndex: 9999, 
            display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box'
          }}
        >
          <div 
            className="public-modal-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              backgroundColor: '#FFFFFF', borderRadius: '16px', width: '100%', maxWidth: '600px', 
              overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', maxHeight: '90vh',
              display: 'flex', flexDirection: 'column'
            }}
          >
            {/* Modal Header */}
            <div style={{ backgroundColor: '#1E3A8A', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
                </svg>
                <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: '18px', fontWeight: '600' }}>Notice Board</h3>
              </div>
              <button onClick={closeModal} style={{ background: 'transparent', border: 'none', color: '#cbd5e1', fontSize: '28px', lineHeight: '1', cursor: 'pointer', padding: 0 }}>
                &times;
              </button>
            </div>

            {/* Modal Body - Scrollable if content is too long */}
            <div style={{ padding: '30px 24px', overflowY: 'auto' }}>
              <p style={{ color: '#F59E0B', fontSize: '14px', fontWeight: '600', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {formatFullDate(selectedNews.startDate)}
              </p>
              
              <h2 style={{ margin: '0 0 20px 0', color: '#1E293B', fontSize: '24px', fontWeight: '800', lineHeight: '1.3' }}>
                {selectedNews.title}
              </h2>
              
              <div style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
                {selectedNews.description}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div style={{ padding: '20px 24px', backgroundColor: '#F8FAFC', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
              <button 
                onClick={closeModal} 
                style={{ 
                  padding: '10px 20px', backgroundColor: '#1E293B', color: '#FFFFFF', border: 'none', 
                  borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#334155'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#1E293B'}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default LatestNewsSection;