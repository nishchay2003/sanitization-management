import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sanitization Management Syatem</h3>
          <p>Professional sanitization services for homes, offices, and vehicles.</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: saniclean123@gmail.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Address: Near Central Bus Station, Sanitown, ST-12345</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sanitization Management Syatem. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;