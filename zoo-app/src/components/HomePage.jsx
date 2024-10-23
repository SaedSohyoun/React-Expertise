// src/components/HomePage.jsx
import React from "react";
import animals from "../animals";
import Card from "./Card";

const HomePage = () => {
  return (
    <div>
      <h1>Dierentuin</h1>
      <div className="card-container">
        {animals.map(animal => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;