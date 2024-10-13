import React from 'react';

const ThemeToggleIcon = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? (
        <span role="img" aria-label="moon">🌙</span>
      ) : (
        <span role="img" aria-label="sun">☀️</span>
      )}
    </button>
  );
};

export default ThemeToggleIcon;