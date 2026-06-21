import React, { createContext, useState, useEffect, useContext } from 'react';
import { getSchoolProfileApi } from '../api/schoolProfileService'; // Aapka jahan bhi ye function ho uska path de dein

// 1. Context Create karein
const SchoolProfileContext = createContext();

// 2. Provider Component banayein
export const SchoolProfileProvider = ({ children }) => {
  const [schoolProfile, setSchoolProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetch karne ka function
  const fetchSchoolProfile = async () => {
    try {
      setLoading(true);
      const data = await getSchoolProfileApi();
      setSchoolProfile(data); // Assuming data me direct profile object aa raha hai
      setError(null);
    } catch (err) {
      console.error("Error fetching school profile in context:", err);
      setError("Failed to load school profile.");
    } finally {
      setLoading(false);
    }
  };

  // Jab application load ho, tabhi data fetch kar lein
  useEffect(() => {
    fetchSchoolProfile();
  }, []);

  return (
    <SchoolProfileContext.Provider value={{ schoolProfile, loading, error, fetchSchoolProfile }}>
      {children}
    </SchoolProfileContext.Provider>
  );
};

// 3. Custom Hook banayein taki dusre components me easily use kar sakein
export const useSchoolProfile = () => {
  return useContext(SchoolProfileContext);
};