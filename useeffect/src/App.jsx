import React from 'react';
import './App.css';
import Clock from './components/Clock'; // De klok die je eerder hebt gemaakt
import WelcomeMessage from './components/WelcomeMessage'; // De nieuwe welkomstboodschap importeren

function App() {
  return (
    <div className="App">
      <h1>React Clock & Welcome App</h1>
      {/* WelcomeMessage-component weergeven */}
      <WelcomeMessage />
      {/* Clock-component weergeven */}
      <Clock />
    </div>
  );
}

export default App;
