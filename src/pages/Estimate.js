import React, { useState } from 'react';
import services from '../data/servicesData.json';
import '../styles/Estimate.css';

function Estimate() {
  const [quantities, setQuantities] = useState({});

  const DELIVERY_CHARGE = 25;
  const SALES_TAX_RATE = 0.0875;

  const handleQuantityChange = (id, value) => {
    const qty = Math.max(0, parseInt(value) || 0);
    setQuantities({ ...quantities, [id]: qty });
  };

  const calculateItemTotal = (item) => {
    const qty = quantities[item.id] || 0;
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return (qty * price).toFixed(2);
  };

  const calculateSubtotal = () => {
    return services.reduce((total, item) => {
      const qty = quantities[item.id] || 0;
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return total + qty * price;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * SALES_TAX_RATE;
  const grandTotal = (subtotal + DELIVERY_CHARGE + tax).toFixed(2);

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
      <div className="estimate-summary">
        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p><strong>Delivery Charge:</strong> ${DELIVERY_CHARGE.toFixed(2)}</p>
        <p><strong>Sales Tax (8.75%):</strong> ${tax.toFixed(2)}</p>
        <h2><strong>Grand Total Estimate:</strong> ${grandTotal}</h2>
      </div>
    </div>
  );
}

export default Estimate;
