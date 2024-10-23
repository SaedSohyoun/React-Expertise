import React, { useState } from 'react';

const FlashCard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      onClick={handleClick} 
      className={`w-64 h-32 rounded-lg flex items-center justify-center cursor-pointer bg-white shadow-lg transition-transform transform hover:scale-105 
      ${isFlipped ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
    >
      <div className="text-center text-lg font-semibold">
        {isFlipped ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
};

export default FlashCard;