import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAdminNewsApi, createNewsApi, updateNewsApi, deleteNewsApi } from '../api/newsApi'; // Apne path ke hisaab se adjust karein

function NewsManager() {
  const { token } = useAuth();
  
  // State for Data & Pagination
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  // State for Modal & Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  });

  // Jab bhi page change ho, news fetch karein
  useEffect(() => {
    if (token) {
      fetchAdminNews(currentPage);
    }
  }, [currentPage, token]);

  const fetchAdminNews = async (page) => {
    try {
      const result = await getAdminNewsApi(page, 10, token); // 10 items per page
      setNewsList(result.data);
      setCurrentPage(result.currentPage);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error("News fetch error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = (newsItem = null) => {
    if (newsItem) {
      setEditId(newsItem._id);
      
      const formatForInput = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toISOString().slice(0, 16);
      };

      setFormData({
        title: newsItem.title,
        description: newsItem.description,
        startDate: formatForInput(newsItem.startDate),
        endDate: formatForInput(newsItem.endDate)
      });
    } else {
      setEditId(null);
      setFormData({ title: '', description: '', startDate: '', endDate: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditId(null);
    setFormData({ title: '', description: '', startDate: '', endDate: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return alert("Aap login nahi hain!");

    const dataToSend = { ...formData };
    
    // Agar startDate khali chhod diya toh current time bhejenge
    if (!dataToSend.startDate) {
        dataToSend.startDate = new Date().toISOString();
    }
    
    // Agar endDate khali hai toh backend pe mat bhejo taaki undefined/null ho jaye
    if (!dataToSend.endDate) {
        delete dataToSend.endDate;
    }

    try {
      if (editId) {
        await updateNewsApi(editId, dataToSend, token);
        alert("News successfully updated!");
      } else {
        await createNewsApi(dataToSend, token);
        alert("New news added!");
      }
      closeModal();
      fetchAdminNews(currentPage); // Refresh current page
    } catch (error) {
      console.error("Error saving news:", error);
      alert("Something went wrong!");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Kya aap is news ko delete karna chahte hain?")) {
      try {
        await deleteNewsApi(id, token);
        alert("News deleted!");
        fetchAdminNews(currentPage);
      } catch (error) {
        console.error("Error deleting news:", error);
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '40px 20px', fontFamily: '"Inter", "Segoe UI", sans-serif', boxSizing: 'border-box' }}>
      
      {/* Inline Styles for Hover effects and Animations */}
      <style>
        {`
          * { box-sizing: border-box; }
          .custom-btn { transition: all 0.2s ease-in-out; }
          .custom-btn:hover { transform: translateY(-2px); filter: brightness(1.1); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .custom-btn:active { transform: translateY(0); }
          .table-row { transition: background-color 0.2s ease; }
          .table-row:hover { background-color: #f8fafc; }
          .form-input { transition: all 0.2s; border: 1px solid #d1d5db; width: 100%; }
          .form-input:focus { border-color: #3b82f6; outline: none; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); }
          .modal-overlay { animation: fadeIn 0.2s ease-out; backdrop-filter: blur(4px); }
          .modal-content { animation: slideUp 0.3s ease-out; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        `}
      </style>

      <div style={{ maxWidth: '1100px', margin: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', padding: '30px', overflow: 'hidden' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #f3f4f6', paddingBottom: '20px' }}>
          <h2 style={{ margin: 0, color: '#1f2937', fontSize: '24px', fontWeight: '600' }}>News Dashboard</h2>
          <button 
            className="custom-btn"
            onClick={() => openModal()} 
            style={{ padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>+</span> Add News
          </button>
        </div>

        {/* Table Section */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#f9fafb', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '12px' }}>
                <th style={{ padding: '16px', borderBottom: '1px solid #e5e7eb', fontWeight: '600' }}>Title</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #e5e7eb', fontWeight: '600' }}>Start Date</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #e5e7eb', fontWeight: '600' }}>End Date</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #e5e7eb', fontWeight: '600' }}>Status</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #e5e7eb', fontWeight: '600', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsList.length > 0 ? (
                newsList.map(news => {
                  const now = new Date();
                  const isLive = new Date(news.startDate) <= now && (!news.endDate || new Date(news.endDate) >= now);
                  
                  return (
                    <tr key={news._id} className="table-row" style={{ borderBottom: '1px solid #e5e7eb', color: '#374151' }}>
                      <td style={{ padding: '16px', fontWeight: '500' }}>{news.title}</td>
                      <td style={{ padding: '16px', color: '#6b7280' }}>
                        {news.startDate ? new Date(news.startDate).toLocaleString() : 'N/A'}
                      </td>
                      <td style={{ padding: '16px', color: '#6b7280' }}>
                        {news.endDate ? new Date(news.endDate).toLocaleString() : 'Never Expires'}
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ 
                          padding: '6px 12px', 
                          borderRadius: '999px', 
                          fontSize: '12px', 
                          fontWeight: '600',
                          backgroundColor: isLive ? '#d1fae5' : '#fee2e2',
                          color: isLive ? '#065f46' : '#991b1b',
                          display: 'inline-block'
                        }}>
                          {isLive ? 'Active' : 'Expired / Upcoming'}
                        </span>
                      </td>
                      <td style={{ padding: '16px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <button className="custom-btn" onClick={() => openModal(news)} style={{ background: '#f3f4f6', color: '#374151', padding: '8px 12px', border: '1px solid #d1d5db', cursor: 'pointer', borderRadius: '6px', fontWeight: '500' }}>Edit</button>
                        <button className="custom-btn" onClick={() => handleDelete(news._id)} style={{ background: '#fee2e2', color: '#b91c1c', padding: '8px 12px', border: 'none', cursor: 'pointer', borderRadius: '6px', fontWeight: '500' }}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr><td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>No News Available at the moment.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#6b7280' }}>Showing page <span style={{ fontWeight: 'bold', color: '#111827' }}>{currentPage}</span> of {totalPages || 1}</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="custom-btn"
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage(prev => prev - 1)}
              style={{ padding: '8px 16px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', background: 'white', border: '1px solid #d1d5db', borderRadius: '6px', color: currentPage === 1 ? '#9ca3af' : '#374151', fontWeight: '500' }}>
              Previous
            </button>
            <button 
              className="custom-btn"
              disabled={currentPage >= totalPages} 
              onClick={() => setCurrentPage(prev => prev + 1)}
              style={{ padding: '8px 16px', cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer', background: 'white', border: '1px solid #d1d5db', borderRadius: '6px', color: currentPage >= totalPages ? '#9ca3af' : '#374151', fontWeight: '500' }}>
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          background: 'rgba(17, 24, 39, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px'
        }}>
          <div className="modal-content" style={{ background: 'white', padding: '30px', borderRadius: '16px', width: '100%', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <h3 style={{ margin: 0, fontSize: '20px', color: '#111827' }}>{editId ? 'Edit News' : 'Add New News'}</h3>
              <button onClick={closeModal} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#6b7280' }}>&times;</button>
            </div>
            
            <form onSubmit={handleSubmit}>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151', fontSize: '14px' }}>News Title</label>
                <input className="form-input" type="text" name="title" value={formData.title} onChange={handleInputChange} required placeholder="Enter an engaging title..." style={{ padding: '12px', borderRadius: '8px' }} />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151', fontSize: '14px' }}>Description</label>
                <textarea className="form-input" name="description" value={formData.description} onChange={handleInputChange} required rows="4" placeholder="Briefly describe the news..." style={{ padding: '12px', borderRadius: '8px', resize: 'vertical' }} />
              </div>
              
              {/* Fix Applied Here: Added flexWrap and minWidth taaki dates overlap ya overflow na karein */}
              <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151', fontSize: '14px' }}>Start Date & Time</label>
                  <input className="form-input" type="datetime-local" name="startDate" value={formData.startDate} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px' }} />
                </div>
                
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151', fontSize: '14px' }}>End Date (Optional)</label>
                  <input className="form-input" type="datetime-local" name="endDate" value={formData.endDate} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px' }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button type="button" onClick={closeModal} className="custom-btn" style={{ padding: '12px 20px', background: 'white', color: '#374151', border: '1px solid #d1d5db', cursor: 'pointer', borderRadius: '8px', fontWeight: '500' }}>Cancel</button>
                <button type="submit" className="custom-btn" style={{ padding: '12px 25px', background: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '8px', fontWeight: '600' }}>{editId ? 'Save Changes' : 'Publish News'}</button>
              </div>
              
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default NewsManager;