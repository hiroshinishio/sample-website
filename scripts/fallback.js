document.addEventListener('DOMContentLoaded', function() {
  if (!window.localStorage) {
    console.warn('localStorage is not supported. Defaulting to light theme.');
    return;
  }

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', currentTheme === 'dark');
});

// This script should be included in the HTML for browsers that do not support localStorage
