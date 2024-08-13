// src/components/admin/Dashboard.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const storedUsername = 'BULLETCRACKERS2.0';
    const storedPassword = 'BULLETCRACKERS@123';

    if (username === storedUsername && password === storedPassword) {
      // Store the username and password in Firestore
      try {
        await addDoc(collection(db, 'admin'), { username, password });
        history.push('/admin/products');
      } catch (error) {
        console.error('Error storing admin credentials:', error);
      }
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
