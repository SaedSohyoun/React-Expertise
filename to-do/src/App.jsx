// src/App.js
import React, { useState } from 'react';
import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">To-Do Lijst</h1>
      <CreateToDo onAdd={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;