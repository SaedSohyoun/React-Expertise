import React, { useState } from 'react';
import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>To-Do Lijst</h1>
      <CreateToDo onAdd={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
