import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/styles/login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // credentials check
      if (email === 'cms@email.com' && password === 'pass123') {
        // Simulate successful login and store user data in sessionStorage
        sessionStorage.setItem('user', JSON.stringify({ email }));
        navigate('/home'); 
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <div className="login-container">
      {/* <div className="login-image">

      </div> */}
      {/* <div className="login-form"> */}
      <h2 className="login-title">Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
            <button type="submit" className="login-button">Login</button>
            <div className="login-link">
              <p style={{ textAlign: 'center' }}>Don't have an account?</p>
              <Link to="/register" className="register-link">REGISTER</Link>
            </div>
          </form>
      {/* </div> */}

    </div>
  );
};

export default Login;