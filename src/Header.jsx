import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

function Header({ cart }) {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart <span className="cart-count">({cart.length})</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;