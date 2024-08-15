import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../assets/styles/faculty.css'; 

const LoginFacultyModal = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple authentication logic
    if (username === 'faculty' && password === 'fac123') {
      onLogin(true);
    } else {
      setError('Invalid username or password');
    }
  };

  const handleBackHome = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
        <div className="back-home-btn">
          <Button variant="outlined" id='back-home' onClick={handleBackHome}>Back to HomePage</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginFacultyModal;
