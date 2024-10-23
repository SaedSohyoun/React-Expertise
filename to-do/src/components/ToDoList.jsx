import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem key={index} item={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
