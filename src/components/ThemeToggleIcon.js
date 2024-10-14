import React from 'react';

const ThemeToggleIcon = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      <span role="img" aria-label="theme icon">🌞/🌜</span>
    </button>
  );
};

export default ThemeToggleIcon;
