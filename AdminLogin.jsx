import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!credentials.email || !credentials.password) {
      setError('Please enter both email and password');
      return;
    }
    
    // For demo purposes, hardcoded credentials
    // In a real app, you would validate against a backend
    if (credentials.email === 'admin@saniclean.com' && credentials.password === 'admin123') {
      // Store authentication state (in a real app, use proper auth tokens)
      localStorage.setItem('isAuthenticated', 'true');
      
      // Redirect to admin dashboard
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Admin Login</h1>
          <p>Enter your credentials to access the dashboard</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-alert">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <div className="login-footer">
          <p>Demo credentials:</p>
          <p>Email: admin@saniclean.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;