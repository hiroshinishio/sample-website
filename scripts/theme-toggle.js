document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', currentTheme === 'dark');

  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  });
});

// Ensure the icon is present in the HTML
// <button id="theme-toggle">
//   <img src="assets/icons/theme-switcher.svg" alt="Toggle Theme">
// </button>

