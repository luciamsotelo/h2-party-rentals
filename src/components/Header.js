import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src="/images/h2logo.jpeg" alt="H2 Party Rentals Logo" />
      </div>
      <div className="header-text">
        <h1>H2 Party Rentals</h1>
        <p>Creating unforgettable events, one party at a time!</p>
      </div>
    </header>
  );
}

export default Header;

