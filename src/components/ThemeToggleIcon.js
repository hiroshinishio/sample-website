import React from 'react';

const ThemeToggleIcon = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme} style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
      </svg>
    </button>
  );
};

export default ThemeToggleIcon;