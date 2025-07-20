import { useState } from 'react';
import './QuoteForm.css';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    address: '',
    date: '',
    time: '',
    instructions: ''
  });
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});

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
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
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
    console.log('Form submitted:', formData);
    
    // Show confirmation popup
    setShowConfirmation(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      address: '',
      date: '',
      time: '',
      instructions: ''
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="quote-form-container">
      <h2>Request a Sanitization Service Quote</h2>
      <p>Fill out the form below and we'll get back to you with a quote as soon as possible.</p>
      
      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name*</label>
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
          <label htmlFor="phone">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="serviceType">Service Type*</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={errors.serviceType ? 'error' : ''}
          >
            <option value="">Select a service</option>
            <option value="home">Home Sanitization</option>
            <option value="office">Office Sanitization</option>
            <option value="vehicle">Vehicle Sanitization</option>
            <option value="other">Other</option>
          </select>
          {errors.serviceType && <span className="error-message">{errors.serviceType}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address*</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? 'error' : ''}
          ></textarea>
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Preferred Date*</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? 'error' : ''}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="time">Preferred Time*</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={errors.time ? 'error' : ''}
            />
            {errors.time && <span className="error-message">{errors.time}</span>}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="instructions">Special Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Any specific requirements or information we should know..."
          ></textarea>
        </div>
        
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
      
      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="confirmation-content">
            <h3>Thank You!</h3>
            <p>Your quote request has been submitted successfully. We'll contact you shortly.</p>
            <button onClick={closeConfirmation}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteForm;