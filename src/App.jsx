import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { AuthProvider } from './context/AuthContext';
import { SchoolProfileProvider } from './context/SchoolProfileContext';

// Global Layout Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Infrastructure from './pages/Infrastructure';
import Manager from './pages/Manager';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Principal from './pages/Principal';
import Teachers from './pages/Teachers';

// Auth Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// --- DYNAMIC TITLE COMPONENT ---
// Ye component apne andar aane wale (children) page ko render karega 
// aur uske hisaab se browser tab ka title update kar dega.
function PageTitle({ title, children }) {
  useEffect(() => {
    // Aap 'Oxford Public School' ki jagah apna actual school name likh sakte hain
    document.title = `${title} | Oxford Public School`; 
  }, [title]);

  return children;
}

function App() {
  return (
    <AuthProvider>
      <SchoolProfileProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
            
            {/* --- Global Header --- */}
            <header className="sticky top-0 z-50">
              <TopBar />
              <Navbar />
            </header>

            {/* --- Dynamic Content Area --- */}
            <main className="flex-grow">
              <Routes>
                {/* --- PUBLIC ROUTES --- */}
                <Route 
                  path="/" 
                  element={<PageTitle title="Home"><Home /></PageTitle>} 
                />
                <Route 
                  path="/about-us" 
                  element={<PageTitle title="About Us"><AboutUs /></PageTitle>} 
                />
                <Route 
                  path="/messages/manager" 
                  element={<PageTitle title="Manager's Message"><Manager /></PageTitle>} 
                />
                <Route 
                  path="/messages/principal" 
                  element={<PageTitle title="Principal's Message"><Principal /></PageTitle>} 
                />
                <Route 
                  path="/mandatory-disclosure" 
                  element={<PageTitle title="Mandatory Disclosure"><MandatoryDisclosure /></PageTitle>} 
                />
                <Route 
                  path="/teachers" 
                  element={<PageTitle title="Our Teachers"><Teachers /></PageTitle>} 
                />
                <Route 
                  path="/infrastructure" 
                  element={<PageTitle title="Infrastructure"><Infrastructure /></PageTitle>} 
                />
                <Route 
                  path="/gallery" 
                  element={<PageTitle title="Gallery"><Gallery /></PageTitle>} 
                />
                <Route 
                  path="/contact-us" 
                  element={<PageTitle title="Contact Us"><ContactUs /></PageTitle>} 
                />
                
                {/* Login Page */}
                <Route 
                  path="/login" 
                  element={<PageTitle title="Admin Login"><Login /></PageTitle>} 
                />

                {/* --- PROTECTED ROUTES --- */}
                <Route element={<ProtectedRoute />}>
                  <Route 
                    path="/dashboard" 
                    element={<PageTitle title="Admin Dashboard"><Dashboard /></PageTitle>} 
                  />
                </Route>
              </Routes>
            </main>

            {/* --- Global Footer --- */}
            <footer>
              <ContactBanner />
              <Footer />
            </footer>
            
          </div>
        </Router>
      </SchoolProfileProvider>
    </AuthProvider>
  );
}

export default App;