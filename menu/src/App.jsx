import React, { useState } from 'react';
import menuItems from './data-1';
import './App.css';

const App = () => {
  const [items, setItems] = useState(menuItems);

  return (
    <div className="app">
      <h1>Menu</h1>
      <div className="menu-items">
        {items.map(item => (
          <div key={item.id} className="menu-item">
            <img src={`${item.img}`} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;