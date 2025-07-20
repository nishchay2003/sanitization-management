import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Sanitization Management Syatem
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quote" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Get Quote
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-links admin-link" onClick={() => setIsMenuOpen(false)}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;