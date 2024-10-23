// src/components/ToDoList.js
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos }) => {
  return (
    <ul className="w-full max-w-md mx-auto">
      {todos.map((todo, index) => (
        <ToDoItem key={index} item={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
