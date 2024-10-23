// src/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      {/* Container for the content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 text-center mb-4">
          Welkom bij Tailwind CSS
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-6">
          Dit is een voorbeeldpagina gemaakt met Tailwind CSS. Bekijk hoe eenvoudig het is om styling toe te voegen zonder custom CSS te schrijven.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
            Actie Knop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;