import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/homePageVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      <div className="home-content">
        <h2 className="home-title">🎉 Welcome to H2 Party Rentals</h2>
        <p className="home-tagline">We bring the party to you — fun, easy, and unforgettable!</p>
        <div className="home-intro">
          <p>
            Whether you're planning a birthday bash, school event, family reunion, or neighborhood celebration,
            H2 Party Rentals has everything you need to make it magical. We specialize in:
          </p>
          <ul>
            <li>🪑 <strong>Kids Chairs & Tables</strong></li>
            <li>🏰 <strong>Inflatables</strong></li>
            <li>🎈 <strong>Party Essentials</strong></li>
          </ul>
          <p>
            Our team handles delivery, setup, and pickup so you can focus on enjoying the moment.
          </p>
        </div>
        <div className="home-cta">
          <p>✨ Ready to plan your event? <a href="/services">Explore Services</a> or <a href="/estimate">Get an Estimate</a></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
