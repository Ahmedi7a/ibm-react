import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <h1>Welcome to Green Haven</h1>
      <p>Your one-stop shop for beautiful houseplants to brighten your home.</p>
      <button onClick={() => navigate('/products')} className="get-started-btn">
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;