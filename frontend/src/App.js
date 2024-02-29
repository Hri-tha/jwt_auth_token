import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App-header'>
        {/* <h1>Authentication App</h1> */}
        {/* <p>Hrithik Kumar Thakur</p> */}
        <Routes>
          
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/register" element={<Registration />} />
          {/* Add more routes for other pages/components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;



