// src/components/DetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import animals from "../animals";

const DetailPage = () => {
  const { id } = useParams();
  const animal = animals.find(a => a.id === parseInt(id));

  if (!animal) {
    return <div>Dier niet gevonden!</div>;
  }

  return (
    <div className="detail-container">
      <h1>{animal.name}</h1>
      <img src={animal.image} alt={animal.name} />
      <h2>Habitat: {animal.habitat}</h2>
      <h3>Dieet: {animal.diet}</h3>
      <p>{animal.description}</p>
    </div>
  );
};

export default DetailPage;
