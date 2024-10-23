// src/components/Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ animal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`animal/${animal.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      
      <img src={`${animal.img}`} alt={animal.title} />

      <h2>{animal.name}</h2>
      <p>{animal.id}</p>
      <p>{animal.habitat}</p>
      <p>{animal.diet}</p>
      <p>{animal.description}</p>
    </div>
  );
};

export default Card;