// Logout.js

import React from 'react';
import AuthService from '../services/AuthService';
import './Logout.css';

const Logout = () => {
  const handleLogout = () => {
    AuthService.logout();
    // Redirect or perform any action upon logout
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
