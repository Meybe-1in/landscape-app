import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import logo from '../logols.png';
import './RegisterForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="register-container">
      <div className="logo">
        <img src={logo} alt="Borcelle Logo" />
      </div>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-btn">REGISTER</button>
        <div className="social-login">
          <button className="google-btn">
            <FaGoogle /> Register with Google
          </button>
          <button className="facebook-btn">
            <FaFacebookF /> Register with Facebook
          </button>
        </div>
      </form>
      <p className="terms">
        By registering, you agree to LandScape <a href="#terms">terms, conditions, and policies</a>.
      </p>
      <p className="login-link">
        Already have an account? <a href="#login">Log in</a>
      </p>
    </div>
  );
};

export default RegisterForm;
