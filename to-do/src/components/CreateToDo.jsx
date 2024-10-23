import React, { useState } from 'react';

const CreateToDo = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Voer een to-do in"
      />
      <button type="submit">Voeg toe</button>
    </form>
  );
};

export default CreateToDo;
