import React, { useState } from 'react';
import Header from './components/Header';
import TrackingInfo from './components/TrackingInfo';
import StatusBar from './components/StatusBar';
import './App.css';

const orderData = {
  name: "John Doe",
  orderId: "ORD12345",
  status: "In transit"
};

function App() {
  const [status, setStatus] = useState(orderData.status);

  return (
    <div className="App">
      <Header />
      <TrackingInfo orderData={orderData} />
      <StatusBar currentStatus={status} />
    </div>
  );
}

export default App;