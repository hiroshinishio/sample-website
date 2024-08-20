import React from 'react';

const LandingPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <header className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
      <p className="text-lg text-gray-600">This is a sample landing page using Tailwind CSS.</p>
    </header>
    <main className="flex flex-col items-center">
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </main>
  </div>
);

export default LandingPage;
