// src/components/ToDoItem.js
import React from 'react';

const ToDoItem = ({ item }) => {
  return (
    <li className="bg-white shadow-lg rounded-lg p-4 mb-2 border border-gray-200">
      {item}
    </li>
  );
};

export default ToDoItem;
