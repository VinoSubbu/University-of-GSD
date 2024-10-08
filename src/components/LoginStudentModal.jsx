import React, { useState } from 'react';
import { Link , Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../assets/styles/student.css'; 

const LoginModal = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple authentication logic
    if (username === 'student' && password === 'stu123') {
      onLogin(true);
      navigate('/student')
    }
    else if (username === 'student1' && password === 'sam123') {
      onLogin(true);
      navigate('/student1')
    }
    else {
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

export default LoginModal;
