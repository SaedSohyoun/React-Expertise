import React, { useState, useEffect } from 'react';

const Clock = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Huidige Tijd:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;