import React from 'react';
import { FaBox, FaTruck, FaHome } from 'react-icons/fa';

function StatusBar({ currentStatus }) {
  return (
    <div className="status-bar">
      <div className={`status ${currentStatus === 'Ordered' ? 'active' : ''}`}>
        <FaBox />
        <p>Ordered</p>
      </div>
      <div className={`status ${currentStatus === 'In transit' ? 'active' : ''}`}>
        <FaTruck />
        <p>In transit</p>
      </div>
      <div className={`status ${currentStatus === 'Delivered' ? 'active' : ''}`}>
        <FaHome />
        <p>Delivered</p>
      </div>
    </div>
  );
}

export default StatusBar;