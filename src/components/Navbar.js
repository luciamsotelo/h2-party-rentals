import { Link } from 'react-router-dom';
import logo from '../assets/h2logo.jpeg';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/estimate">Estimate</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
