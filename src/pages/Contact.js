import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    event_date: '',
    location: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id',     // Replace with your actual EmailJS Service ID
      'your_template_id',    // Replace with your actual EmailJS Template ID
      formData,
      'your_user_id'         // Replace with your actual EmailJS User ID
    )
    .then(() => {
      alert('🎉 Thank you! Your message has been sent.');
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: '',
        event_date: '',
        location: '',
      });
      setShowForm(false);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Oops! Something went wrong. Please try again.');
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact H2 Party Rentals</h2>
      <p>We’d love to help you plan your next unforgettable event!</p>

      <div className="contact-info">
        <p>📞 <a href="tel:+16197483075">(619) 748-3075</a></p>
        <p>📧 <span className="email-link" onClick={() => setShowForm(true)}>buildmysiteagency@gmail.com</span></p>
        <p>📍 1075 W San Ysidro Blvd, San Diego CA 92173</p>
        <p>🕒 Open Daily: 7am – 11pm</p>
      </div>

      {showForm && (
        <div className="quote-form">
          <h3>Request a Quote</h3>
          <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email Address:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone Number:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />

            <label>Event Date:</label>
            <input type="date" name="event_date" value={formData.event_date} onChange={handleChange} />

            <label>Event Location:</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} />

            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" />

            <button type="submit">🎈 Send</button>
          </form>
        </div>
      )}

      <div className="map-section">
        <h3>Find Us</h3>
        <iframe
          title="H2 Party Rentals Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13448.72608468564!2d-117.0635!3d32.5556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94c1f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2s1075%20W%20San%20Ysidro%20Blvd%2C%20San%20Diego%2C%20CA%2092173!5e0!3m2!1sen!2sus!4v1698799999999"
          width="100%"
          height="300"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
