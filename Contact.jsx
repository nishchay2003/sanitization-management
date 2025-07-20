import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Have questions or need more information? Get in touch with our team.</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Our Information</h2>
          
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Address</h3>
              <p>123 Clean Street, Sanitown, ST 12345</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>info@saniclean.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="map-container">
            <h3>Find Us</h3>
            <div className="map-placeholder">
              {/* Replace with actual Google Maps embed */}
              <p>Google Map will be embedded here</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          
          {submitted && (
            <div className="success-message">
              Your message has been sent successfully! We'll get back to you soon.
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                rows="6"
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;