import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Sanitization Services</h1>
          <p>Keep your spaces clean, safe, and germ-free with our expert sanitization solutions.</p>
          <Link to="/quote" className="cta-button">Get a Quote</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <i className="fas fa-home service-icon"></i>
            <h3>Home Sanitization</h3>
            <p>Complete sanitization for your living spaces, ensuring a healthy environment for your family.</p>
          </div>
          
          <div className="service-card">
            <i className="fas fa-building service-icon"></i>
            <h3>Office Sanitization</h3>
            <p>Keep your workplace safe with our thorough commercial sanitization services.</p>
          </div>
          
          <div className="service-card">
            <i className="fas fa-car service-icon"></i>
            <h3>Vehicle Sanitization</h3>
            <p>Deep cleaning and sanitization for all types of vehicles to ensure safe travel.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>SaniClean is a leading provider of sanitization services with over 10 years of experience. We use eco-friendly products and advanced techniques to ensure the highest level of cleanliness and safety.</p>
            <p>Our team of trained professionals is dedicated to delivering exceptional service tailored to your specific needs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>"SaniClean provided excellent service for our office. The team was professional and thorough. Highly recommended!"</p>
            <h4>- John Smith, ABC Company</h4>
          </div>
          
          <div className="testimonial-card">
            <p>"We've been using SaniClean for our home sanitization needs for years. They are reliable, efficient, and use safe products."</p>
            <h4>- Sarah Johnson, Homeowner</h4>
          </div>
          
          <div className="testimonial-card">
            <p>"The vehicle sanitization service was outstanding. My car has never felt cleaner and safer."</p>
            <h4>- Michael Brown, Car Owner</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today for a free consultation and quote.</p>
        <div className="cta-buttons">
          <Link to="/quote" className="cta-button">Request a Quote</Link>
          <Link to="/contact" className="cta-button secondary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;