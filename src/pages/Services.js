import React from 'react';
import services from '../data/servicesData.json';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Rental Services</h1>
      <div className="services-grid">
        {services.map((item) => (
          <div key={item.id} className="service-card">
            <img src={item.image} alt={item.name} className="service-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
