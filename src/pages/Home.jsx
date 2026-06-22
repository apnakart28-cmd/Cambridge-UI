import React from 'react';

// Home page ke specific sections (../ karke components folder se import kiya)
import HeroSlider from '../components/HeroSlider';
import WelcomeSection from '../components/WelcomeSection';
import EducationHighlight from '../components/EducationHighlight';
import FacilitiesGrid from '../components/FacilitiesGrid';
import BenefitsSection from '../components/BenefitsSection';
import LatestNewsSection from '../components/LatestNewsSection'; // <-- Naya Import

function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSlider />
      <LatestNewsSection /> {/* <-- Naya Component */}
      <WelcomeSection />
      <EducationHighlight />
      <FacilitiesGrid />
      <BenefitsSection />
    </div>
  );
}

export default Home;