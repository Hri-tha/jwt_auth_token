import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import './Registration.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      // Validate form inputs
      if (!name || !email || !password || !confirmPassword) {
        setError('All fields are required');
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Invalid email address');
        return;
      }

      // Validate password and confirm password
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      // Call registration API
      const response = await AuthService.register(name, email, password);
      console.log('Registration successful!', response);
      // Redirect or perform any action upon successful registration
    } catch (error) {
      console.error('Registration failed!', error);
      setError('Registration failed. Please try again.');
      // Handle registration error (display error message, etc.)
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      {error && <p className="error-message">{error}</p>}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
