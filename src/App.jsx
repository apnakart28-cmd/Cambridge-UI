import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context (Naya Import)
import { AuthProvider } from './context/AuthContext';

// Global Layout Components (Jo components/ folder me hain)
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; // <-- Naya Import

// Pages (Jo pages/ folder me hain)
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Infrastructure from './pages/Infrastructure';
import Manager from './pages/Manager';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Principal from './pages/Principal';
import Teachers from './pages/Teachers';
import { SchoolProfileProvider } from './context/SchoolProfileContext';

// Naye Auth Pages
import Login from './pages/Login';         // <-- Naya Import
import Dashboard from './pages/Dashboard'; // <-- Naya Import

function App() {
  return (
    // Pura app AuthProvider ke andar wrap hoga taki token ka state sab jagah mil sake
    <AuthProvider>
      <SchoolProfileProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
          
          {/* --- Global Header --- */}
          <header className="sticky top-0 z-50">
            <TopBar />
            <Navbar />
          </header>

          {/* --- Dynamic Content Area (Pages Yahan Load Honge) --- */}
          <main className="flex-grow">
            <Routes>
              {/* --- PUBLIC ROUTES --- */}
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/messages/manager" element={<Manager />} />
              <Route path="/messages/principal" element={<Principal />} />
              <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact-us" element={<ContactUs />} />
              
              {/* Login Page (Ye bhi public hoga) */}
              <Route path="/login" element={<Login />} />

              {/* --- PROTECTED ROUTES --- */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Agar future me aur admin pages banane ho, toh yahi add honge */}
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