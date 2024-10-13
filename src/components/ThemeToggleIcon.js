import React, { useState, useEffect } from 'react';

const ThemeToggleIcon = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>;
};

export default ThemeToggleIcon;