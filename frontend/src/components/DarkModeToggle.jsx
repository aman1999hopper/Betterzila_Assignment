import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    // Initialize darkMode state based on localStorage value
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  // Effect to update the document's theme and localStorage whenever darkMode changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModeToggle;
