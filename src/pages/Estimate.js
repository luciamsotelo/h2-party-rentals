import React, { useState } from 'react';
import services from '../data/servicesData.json';
import '../styles/Estimate.css';

function Estimate() {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    const qty = Math.max(0, parseInt(value) || 0);
    setQuantities({ ...quantities, [id]: qty });
  };

  const calculateItemTotal = (item) => {
    const qty = quantities[item.id] || 0;
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return (qty * price).toFixed(2);
  };

  const calculateTotal = () => {
    return services.reduce((total, item) => {
      const qty = quantities[item.id] || 0;
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return total + qty * price;
    }, 0).toFixed(2);
  };

  return (
    <div className="estimate-wrapper">
      <h1>Estimate Your Rental</h1>
      <p>Select quantities to get a price estimate for your event.</p>
      <div className="estimate-table">
        <div className="estimate-row estimate-header">
          <div>Image</div>
          <div>Description</div>
          <div>Unit Price</div>
          <div>×</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        {services.map((item) => (
          <div key={item.id} className="estimate-row">
            <div>
              <img src={item.image} alt={item.name} className="estimate-thumb" />
            </div>
            <div>
              <strong>{item.name}</strong><br />
              <span>{item.description}</span>
            </div>
            <div>{item.price}</div>
            <div>×</div>
            <div>
              <input
                type="number"
                min="0"
                value={quantities[item.id] || ''}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="quantity-input"
              />
            </div>
            <div>${calculateItemTotal(item)}</div>
          </div>
        ))}
      </div>
      <div className="estimate-total">
        <h2>Total Estimate: ${calculateTotal()}</h2>
      </div>
    </div>
  );
}

export default Estimate;

