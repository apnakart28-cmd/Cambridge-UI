import React, { useState, useEffect, useCallback } from 'react';
import { getAllGalleryApi, createGalleryApi, deleteGalleryApi, updateGalleryApi } from '../api/galleryApi'; 
import { useAuth } from '../context/AuthContext'; 
import Cropper from 'react-easy-crop'; 
import { 
  Plus, Image as ImageIcon, Edit2, Trash2, X, UploadCloud, 
  ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Crop
} from 'lucide-react';

// --- Helper Functions for Cropping ---
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.crossOrigin = 'anonymous'; 
    image.src = url;
  });

const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas is empty'));
        return;
      }
      const file = new File([blob], 'cropped_image.jpg', { type: 'image/jpeg' });
      resolve({ file, url: URL.createObjectURL(blob) });
    }, 'image/jpeg');
  });
};

// --- Date Formatter ---
const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};
// ------------------------------------

const GalleryManager = () => {
  const { token } = useAuth(); 

  // Data states
  const [images, setImages] = useState([]);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; 
  
  // Edit states
  const [editingId, setEditingId] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  // React-Easy-Crop states
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  
  // Final cropped states
  const [croppedPreview, setCroppedPreview] = useState('');
  const [croppedFile, setCroppedFile] = useState(null);

  useEffect(() => {
    if (token) {
      fetchImages(currentPage);
    }
  }, [token, currentPage]);

  const fetchImages = async (page) => {
    try {
      const response = await getAllGalleryApi(page, limit, token); 
      setImages(response.data || []); 
      if (response.pagination) {
        setTotalPages(response.pagination.totalPages);
      }
    } catch (error) {
      console.error("Images fetch error:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setCroppedPreview('');
        setCroppedFile(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedFile(file);
      setCroppedPreview(url);
    } catch (e) {
      console.error(e);
      alert('Crop karne mein dikkat aayi.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingId && !croppedFile) {
      setMessage('Pehle photo select aur crop karein!');
      return;
    }

    const formData = new FormData();
    if (caption) formData.append('caption', caption);
    if (croppedFile) formData.append('image', croppedFile);

    setLoading(true);
    setMessage('');

    try {
      if (editingId) {
        await updateGalleryApi(editingId, formData, token);
      } else {
        await createGalleryApi(formData, token); 
        setCurrentPage(1); 
      }
      closeModal(); 
      fetchImages(currentPage); 
    } catch (error) {
      console.error("Submit error:", error);
      setMessage(`${editingId ? 'Update' : 'Upload'} fail ho gaya. Phir se try karein.`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Kya aap sach mein is photo ko delete karna chahte hain?')) return;
    try {
      await deleteGalleryApi(id, token); 
      fetchImages(currentPage); 
    } catch (error) {
      console.error("Delete error:", error);
      alert('Delete fail ho gaya.');
    }
  };

  const handleEdit = (img) => {
    setEditingId(img._id);
    setCaption(img.caption || '');
    setCurrentImageUrl(img.imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImageSrc(null);
    setCroppedPreview('');
    setCroppedFile(null);
    setCaption('');
    setMessage('');
    setZoom(1);
    setEditingId(null);
    setCurrentImageUrl('');
  };

  const handleReselect = () => {
    setImageSrc(null);
    setCroppedPreview('');
    setCroppedFile(null);
    setZoom(1);
  };

  return (
    <div style={{ padding: '30px', fontFamily: "'Inter', 'Segoe UI', sans-serif", backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      
      {/* Dynamic CSS for Hover Effects */}
      <style>{`
        .hover-btn:hover { transform: translateY(-2px); filter: brightness(1.1); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .hover-row:hover { background-color: #f9fafb; transition: background-color 0.2s ease; }
        .action-btn:hover { transform: scale(1.05); }
        .glass-modal { backdrop-filter: blur(8px); }
        .custom-file-upload input[type="file"] { display: none; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ImageIcon size={28} color="#4f46e5" />
            <h2 style={{ margin: 0, color: '#111827', fontSize: '24px', fontWeight: '600' }}>School Gallery</h2>
          </div>
          <button 
            className="hover-btn"
            onClick={() => setIsModalOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '14px', transition: 'all 0.2s' }}
          >
            <Plus size={18} />
            Add New Photo
          </button>
        </div>

        {/* Table Container */}
        <div style={{ overflowX: 'auto', minHeight: '500px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb', color: '#6b7280', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '16px', width: '5%', fontWeight: '600' }}>#</th>
                <th style={{ padding: '16px', width: '15%', fontWeight: '600' }}>Image</th>
                <th style={{ padding: '16px', width: '35%', fontWeight: '600' }}>Caption</th>
                <th style={{ padding: '16px', width: '20%', fontWeight: '600' }}>Posted On</th>
                <th style={{ padding: '16px', width: '25%', textAlign: 'center', fontWeight: '600' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {images.length > 0 ? (
                images.map((img, index) => (
                  <tr key={img._id} className="hover-row" style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '16px', color: '#6b7280', fontSize: '14px' }}>
                      {(currentPage - 1) * limit + index + 1}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <img 
                        src={img.imageUrl} 
                        alt={img.caption || "Gallery"} 
                        style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }} 
                      />
                    </td>
                    <td style={{ padding: '16px', color: '#111827', fontSize: '14px', fontWeight: '500' }}>
                      {img.caption || <span style={{ color: '#9ca3af', fontStyle: 'italic' }}>No Caption</span>}
                    </td>
                    <td style={{ padding: '16px', fontSize: '13px', color: '#6b7280' }}>
                      {formatDate(img.createdAt)}
                    </td>
                    <td style={{ padding: '16px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
                      <button 
                        className="action-btn"
                        onClick={() => handleEdit(img)} 
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button 
                        className="action-btn"
                        onClick={() => handleDelete(img._id)} 
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s' }}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: '60px 20px', textAlign: 'center', color: '#6b7280' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                      <ImageIcon size={48} color="#d1d5db" />
                      <p style={{ fontSize: '16px', margin: 0 }}>No photos found</p>
                      <p style={{ fontSize: '13px', margin: 0 }}>Click "+ Add New Photo" to create your first gallery item.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '24px', gap: '15px' }}>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>
              Page <strong style={{ color: '#111827' }}>{currentPage}</strong> of <strong style={{ color: '#111827' }}>{totalPages}</strong>
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                disabled={currentPage === 1} 
                onClick={() => setCurrentPage(prev => prev - 1)}
                style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', backgroundColor: currentPage === 1 ? '#f3f4f6' : '#fff', color: currentPage === 1 ? '#9ca3af' : '#374151', border: '1px solid #d1d5db', borderRadius: '6px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                disabled={currentPage === totalPages} 
                onClick={() => setCurrentPage(prev => prev + 1)}
                style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', backgroundColor: currentPage === totalPages ? '#f3f4f6' : '#fff', color: currentPage === totalPages ? '#9ca3af' : '#374151', border: '1px solid #d1d5db', borderRadius: '6px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="glass-modal" style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          backgroundColor: 'rgba(17, 24, 39, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff', padding: '32px', borderRadius: '16px', width: '500px', maxWidth: '95%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            
            <button 
              onClick={closeModal}
              style={{ position: 'absolute', top: '16px', right: '16px', background: '#f3f4f6', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: '#6b7280', transition: 'background 0.2s' }}
            >
              <X size={18} />
            </button>

            <h3 style={{ marginTop: 0, marginBottom: '24px', color: '#111827', fontSize: '20px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {editingId ? <><Edit2 size={20} color="#4f46e5"/> Edit Photo</> : <><UploadCloud size={20} color="#4f46e5"/> Upload New Photo</>}
            </h3>
            
            {/* Stage 1: File Selection */}
            {!imageSrc && !croppedPreview && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {editingId && (
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <p style={{ fontWeight: '500', fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>Current Image</p>
                    <img src={currentImageUrl} alt="Current" style={{ maxWidth: '100%', maxHeight: '180px', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                  </div>
                )}

                <label className="custom-file-upload" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', border: '2px dashed #d1d5db', borderRadius: '12px', backgroundColor: '#f9fafb', cursor: 'pointer', transition: 'border 0.2s' }}>
                  <UploadCloud size={32} color="#9ca3af" style={{ marginBottom: '12px' }} />
                  <span style={{ fontWeight: '500', color: '#4b5563', fontSize: '15px' }}>
                    {editingId ? 'Click to change image' : 'Click to browse or drag an image here'}
                  </span>
                  <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>PNG, JPG, JPEG</span>
                  <input type="file" accept="image/*" onChange={handleFileChange} />
                </label>

                {/* Edit Form without new image */}
                {editingId && (
                   <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#374151' }}>Caption</label>
                      <input 
                        type="text" 
                        placeholder="Write a caption..." 
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        style={{ width: '100%', boxSizing: 'border-box', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '14px' }}
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={loading} 
                      className="hover-btn"
                      style={{ padding: '12px', cursor: loading ? 'not-allowed' : 'pointer', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                    >
                      {loading ? 'Saving...' : <><CheckCircle size={18} /> Save Changes</>}
                    </button>
                   </form>
                )}
              </div>
            )}

            {/* Stage 2: React Easy Crop */}
            {imageSrc && !croppedPreview && (
              <div>
                <p style={{ fontWeight: '500', fontSize: '14px', color: '#374151', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Crop size={16} /> Adjust Image 
                </p>
                
                <div style={{ position: 'relative', width: '100%', height: '320px', backgroundColor: '#1f2937', marginBottom: '20px', borderRadius: '12px', overflow: 'hidden' }}>
                  <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3} 
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '12px', color: '#6b7280', display: 'block', marginBottom: '8px' }}>Zoom</label>
                  <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(e) => setZoom(e.target.value)}
                    style={{ width: '100%', cursor: 'pointer' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="hover-btn" onClick={handleCropImage} style={{ flex: 1, padding: '12px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={18} /> Crop & Continue
                  </button>
                  <button className="hover-btn" onClick={handleReselect} style={{ padding: '12px 20px', backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Stage 3: Preview & Upload */}
            {croppedPreview && (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontWeight: '500', fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>Final Preview</p>
                  <img src={croppedPreview} alt="Cropped Preview" style={{ maxWidth: '100%', maxHeight: '220px', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#374151' }}>Caption (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="Write a caption..." 
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    style={{ width: '100%', boxSizing: 'border-box', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '14px' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="hover-btn"
                    style={{ flex: 2, padding: '12px', cursor: loading ? 'not-allowed' : 'pointer', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                  >
                    {loading ? (
                      'Processing...'
                    ) : (
                      <><UploadCloud size={18} /> {editingId ? 'Update Post' : 'Upload Now'}</>
                    )}
                  </button>
                  <button 
                    type="button" 
                    className="hover-btn"
                    onClick={() => setCroppedPreview('')}
                    style={{ flex: 1, padding: '12px', cursor: 'pointer', backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', fontWeight: '500' }}
                  >
                    Edit Crop
                  </button>
                </div>
              </form>
            )}

            {message && (
              <div style={{ marginTop: '20px', padding: '12px', backgroundColor: message.includes('fail') ? '#fef2f2' : '#ecfdf5', border: `1px solid ${message.includes('fail') ? '#fecaca' : '#a7f3d0'}`, borderRadius: '8px', color: message.includes('fail') ? '#dc2626' : '#059669', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500' }}>
                <AlertCircle size={18} /> {message}
              </div>
            )}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default GalleryManager;