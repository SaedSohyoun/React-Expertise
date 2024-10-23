import React from 'react';
import people from '../data';

const BirthdayList = () => {
  return (
    <div className="birthday-list-container">
      <h2>Verjaardagen</h2>
      <div className="all-data">
        {people.map((person) => (
          <div key={person.id} className="card">
            
            <div className="photo">
              <img
                src={`https://via.placeholder.com/100?text=${person.name.charAt(0)}`} 
                alt={person.name}
              />
            </div>
            
            <div className="info">
              <h3>{person.name}</h3>
              <p>Leeftijd: {person.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayList;