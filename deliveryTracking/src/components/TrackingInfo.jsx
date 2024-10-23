import React from 'react';
import { FaUser, FaBarcode } from 'react-icons/fa';

function TrackingInfo({ orderData }) {
  return (
    <div className="tracking-info">
      <div>
        <FaUser />
        <p>{orderData.name}</p>
      </div>
      <div>
        <FaBarcode />
        <p>Order ID: {orderData.orderId}</p>
      </div>
    </div>
  );
}

export default TrackingInfo;