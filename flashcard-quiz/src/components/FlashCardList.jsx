import React from 'react';
import FlashCard from './FlashCard';
import flashcards from '../flashcardData';

const FlashCardList = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-6">
      {flashcards.map((flashcard, index) => (
        <FlashCard key={index} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default FlashCardList;