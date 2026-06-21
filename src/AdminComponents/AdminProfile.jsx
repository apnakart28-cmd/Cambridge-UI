import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getSchoolProfileApi, updateSchoolProfileApi } from '../api/schoolProfileService';
import { 
  Building2, Clock, Link2, Save, AlertCircle, CheckCircle2, 
  Loader2, Phone, Mail, MapPin, Info, Settings, Camera
} from 'lucide-react';

const InputField = ({ label, icon: Icon, ...props }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
      {Icon && <Icon className="w-4 h-4 text-indigo-500" />}
      {label}
    </label>
    {props.type === 'textarea' ? (
      <textarea 
        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400 min-h-[100px] resize-y shadow-sm"
        {...props}
      />
    ) : (
      <input 
        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400 shadow-sm"
        {...props}
      />
    )}
  </div>
);

function AdminProfile() {
  const { token } = useAuth();

  const [activeTab, setActiveTab] = useState('basic');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    schoolName: '', email: '', primaryPhone: '', alternatePhone: '',
    address: '', aboutText: '', logoUrl: '',
    workingHours: { mondayToFriday: '', saturday: '', sunday: '' },
    socialLinks: { facebook: '', instagram: '', twitter: '', youtube: '' }
  });

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: Building2, desc: 'Name, email, and location' },
    { id: 'hours', label: 'Working Hours', icon: Clock, desc: 'Set your operational timings' },
    { id: 'social', label: 'Social Links', icon: Link2, desc: 'Connect your social media' },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setMessage({ type: 'error', text: 'Authentication token missing. Please login again.' });
        setLoading(false);
        return;
      }

      try {
        const response = await getSchoolProfileApi();
        const data = response.data || response; 
        
        setFormData({
          schoolName: data.schoolName || '', email: data.email || '', 
          primaryPhone: data.primaryPhone || '', alternatePhone: data.alternatePhone || '',
          address: data.address || '', aboutText: data.aboutText || '', logoUrl: data.logoUrl || '',
          workingHours: {
            mondayToFriday: data.workingHours?.mondayToFriday || '',
            saturday: data.workingHours?.saturday || '',
            sunday: data.workingHours?.sunday || ''
          },
          socialLinks: {
            facebook: data.socialLinks?.facebook || '', instagram: data.socialLinks?.instagram || '',
            twitter: data.socialLinks?.twitter || '', youtube: data.socialLinks?.youtube || ''
          }
        });
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to load school profile.' });
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (e, category) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [category]: { ...prev[category], [name]: value }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;

    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      await updateSchoolProfileApi(formData, token);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update school profile.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-indigo-600">
        <Loader2 className="w-12 h-12 animate-spin mb-4" />
        <p className="font-medium text-slate-500 animate-pulse">Loading institution details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3 tracking-tight">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <Settings className="w-6 h-6" />
              </div>
              Institution Profile
            </h1>
            <p className="text-sm text-slate-500 mt-2 ml-1">
              Manage your school's public-facing information and operational details.
            </p>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={saving} 
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white shadow-sm transition-all duration-200 ${
              saving 
                ? 'bg-indigo-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving Changes...' : 'Save Changes'}
          </button>
        </div>

        {/* Alert Messages */}
        {message.text && (
          <div className={`mb-6 p-4 text-sm rounded-xl flex items-center gap-3 border shadow-sm animate-in slide-in-from-top-2 duration-300 ${
            message.type === 'error' 
              ? 'bg-red-50 border-red-100 text-red-700' 
              : 'bg-emerald-50 border-emerald-100 text-emerald-700'
          }`}>
            {message.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
            <span className="font-medium">{message.text}</span>
          </div>
        )}

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          
          {/* Sidebar Tabs */}
          <div className="w-full md:w-72 bg-slate-50/50 border-b md:border-b-0 md:border-r border-slate-200 p-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 ml-1">Settings Menu</h3>
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-2 md:pb-0 hide-scrollbar">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-start gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-white shadow-sm border border-slate-200/60 text-indigo-600' 
                        : 'border border-transparent text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <div className="whitespace-nowrap md:whitespace-normal">
                      <div className={`font-semibold text-sm ${isActive ? 'text-indigo-700' : ''}`}>{tab.label}</div>
                      <div className="text-[11px] text-slate-400 hidden md:block mt-0.5">{tab.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Area */}
          <div className="flex-1 p-6 sm:p-8 min-h-[500px]">
            <form id="profile-form" onSubmit={handleSubmit} className="h-full">
              
              {activeTab === 'basic' && (
                <div className="animate-in fade-in duration-500">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-slate-900">Basic Information</h2>
                    <p className="text-sm text-slate-500 mt-1">This information will be displayed publicly on your school portal.</p>
                  </div>
                  
                  {/* Visual Logo/Avatar Section */}
                  <div className="flex items-center gap-6 mb-8 p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center overflow-hidden">
                        {formData.logoUrl ? (
                          <img src={formData.logoUrl} alt="School Logo" className="w-full h-full object-cover" />
                        ) : (
                          <Building2 className="w-8 h-8 text-indigo-300" />
                        )}
                      </div>
                      <button type="button" className="absolute bottom-0 right-0 p-1.5 bg-white border border-slate-200 rounded-full shadow-sm text-slate-600 hover:text-indigo-600 transition-colors">
                        <Camera className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex-1">
                      <InputField label="Logo URL (Optional)" name="logoUrl" value={formData.logoUrl} onChange={handleChange} placeholder="https://example.com/logo.png" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    <div className="md:col-span-2">
                      <InputField label="School Name" name="schoolName" value={formData.schoolName} onChange={handleChange} required icon={Building2} placeholder="Enter the official name" />
                    </div>
                    <InputField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required icon={Mail} placeholder="contact@school.edu" />
                    <InputField label="Primary Phone" type="tel" name="primaryPhone" value={formData.primaryPhone} onChange={handleChange} required icon={Phone} placeholder="+91 98765 43210" />
                    <InputField label="Alternate Phone" type="tel" name="alternatePhone" value={formData.alternatePhone} onChange={handleChange} icon={Phone} placeholder="+91 98765 00000" />
                    <div className="md:col-span-2 mt-2">
                      <InputField label="Complete Address" type="textarea" name="address" value={formData.address} onChange={handleChange} required icon={MapPin} placeholder="Enter full street address, city, and zip code" />
                    </div>
                    <div className="md:col-span-2">
                      <InputField label="About School" type="textarea" name="aboutText" value={formData.aboutText} onChange={handleChange} icon={Info} placeholder="Write a brief description about the institution's history and values..." />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hours' && (
                <div className="animate-in fade-in duration-500">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-slate-900">Working Hours</h2>
                    <p className="text-sm text-slate-500 mt-1">Specify when the school office is open for visitors.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    <InputField label="Monday - Friday" name="mondayToFriday" value={formData.workingHours.mondayToFriday} onChange={(e) => handleNestedChange(e, 'workingHours')} placeholder="e.g., 7:30 AM - 1:30 PM" />
                    <InputField label="Saturday" name="saturday" value={formData.workingHours.saturday} onChange={(e) => handleNestedChange(e, 'workingHours')} placeholder="e.g., 7:30 AM - 11:30 AM" />
                    <InputField label="Sunday" name="sunday" value={formData.workingHours.sunday} onChange={(e) => handleNestedChange(e, 'workingHours')} placeholder="e.g., Closed / Holiday" />
                  </div>
                </div>
              )}

              {activeTab === 'social' && (
                <div className="animate-in fade-in duration-500">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-slate-900">Social Media Links</h2>
                    <p className="text-sm text-slate-500 mt-1">Add links to your official social media pages.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    <InputField label="Facebook Profile" type="url" name="facebook" value={formData.socialLinks.facebook} onChange={(e) => handleNestedChange(e, 'socialLinks')} placeholder="https://facebook.com/..." />
                    <InputField label="Instagram Profile" type="url" name="instagram" value={formData.socialLinks.instagram} onChange={(e) => handleNestedChange(e, 'socialLinks')} placeholder="https://instagram.com/..." />
                    <InputField label="Twitter/X Profile" type="url" name="twitter" value={formData.socialLinks.twitter} onChange={(e) => handleNestedChange(e, 'socialLinks')} placeholder="https://twitter.com/..." />
                    <InputField label="YouTube Channel" type="url" name="youtube" value={formData.socialLinks.youtube} onChange={(e) => handleNestedChange(e, 'socialLinks')} placeholder="https://youtube.com/..." />
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

export default AdminProfile;