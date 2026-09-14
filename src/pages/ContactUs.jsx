import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useSchoolProfile } from '../context/SchoolProfileContext';

function ContactUs() {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'
  
  // Context se data fetch karein
  const { schoolProfile } = useSchoolProfile();

  // Data mapping with fallbacks for Cambridge Public School
  const address = schoolProfile?.address || "By Pass Chauraha, Tilhar, National Highway 30, Tilhar, Uttar Pradesh 242307, India";
  const primaryPhone = schoolProfile?.primaryPhone || "+91 9935719994, 8853693201";
  const alternatePhone = schoolProfile?.alternatePhone; // Agar ho toh dikhayenge
  const email = schoolProfile?.email || "cambridgepublicschool2026@gmail.com";
  
  // Working hours formatting from API
  const workingDays = schoolProfile?.workingHours?.mondayToFriday || "8:00 AM - 2:00 PM";
  const saturdayHours = schoolProfile?.workingHours?.saturday || "8:00 AM - 1:00 PM";
  const sundayHours = schoolProfile?.workingHours?.sunday || "Closed";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission delay
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset(); // Reset form fields
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
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
            Contact <span className="text-[#DC2626]">Us</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-[#DC2626] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#DC2626]">Contact</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-16">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Contact Information */}
          <div className="w-full lg:w-5/12">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-[#DC2626] rounded-full"></span>
                <span className="text-[#DC2626] font-bold tracking-wider uppercase text-sm">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
                We're Here to Help You
              </h2>
              <p className="text-gray-600 text-lg">
                Have questions about admissions, facilities, or our curriculum? Reach out to us, and our support team will get back to you promptly.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Address Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-[#E0E7FF] text-[#1E3A8A] p-4 rounded-full flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {address}
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-[#FEE2E2] text-[#DC2626] p-4 rounded-full flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">Phone Number</h3>
                  <p className="text-gray-600">Main Office: <a href={`tel:${primaryPhone}`} className="hover:text-[#DC2626]">{primaryPhone}</a></p>
                  {alternatePhone && (
                    <p className="text-gray-600">Alternate: <a href={`tel:${alternatePhone}`} className="hover:text-[#DC2626]">{alternatePhone}</a></p>
                  )}
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-[#E0E7FF] text-[#1E3A8A] p-4 rounded-full flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">Email Address</h3>
                  <p className="text-gray-600"><a href={`mailto:${email}`} className="hover:text-[#DC2626]">{email}</a></p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-[#FEE2E2] text-[#DC2626] p-4 rounded-full flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">Working Hours</h3>
                  <p className="text-gray-600">Mon - Fri: {workingDays}</p>
                  <p className="text-gray-600">Saturday: {saturdayHours}</p>
                  <p className="text-gray-600">Sunday: {sundayHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">Send Us a Message</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-pulse-once">
                  <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-600">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 9876543210" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all text-gray-700">
                        <option value="admission">Admission Inquiry</option>
                        <option value="general">General Query</option>
                        <option value="feedback">Feedback / Suggestion</option>
                        <option value="career">Career / Jobs</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Your Message *</label>
                    <textarea 
                      required
                      rows="5"
                      placeholder="How can we help you?" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                      formStatus === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1E3A8A] hover:bg-[#DC2626] hover:shadow-lg'
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send size={20} className={formStatus === 'submitting' ? 'animate-pulse' : ''} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full Width Google Map Section (Fixed Address Link) */}
        <div className="mt-16 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
          <div className="w-full h-[450px] rounded-2xl overflow-hidden relative">
            <iframe 
              title="Cambridge Public School Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1687.6527941063214!2d79.73962745276114!3d27.967233650734176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399feb761678baa5%3A0x9e4513850e2cf3f1!2sCambridge%20Public%20school%2C%20Station%20Road%20Tilhar!5e0!3m2!1sen!2sin!4v1789366887320!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0"
            ></iframe>
            </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;