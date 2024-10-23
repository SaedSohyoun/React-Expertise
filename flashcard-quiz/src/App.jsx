import React from 'react';
import FlashCardList from './components/FlashCardList';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Flashcard Quiz: Capitals of the World</h1>
        <FlashCardList />
      </div>
    </div>
  );
};

export default App;