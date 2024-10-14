import React from 'react';

const ThemeToggleIcon = ({ theme, toggleTheme }) => {
  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px' }}>
      {theme === 'light' ? (
        <span role="img" aria-label="Switch to dark mode">🌙</span>
      ) : (
        <span role="img" aria-label="Switch to light mode">☀️</span>
      )}
    </div>
  );
};

export default ThemeToggleIcon;