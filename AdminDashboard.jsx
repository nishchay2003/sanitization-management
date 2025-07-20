import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RequestTable from '../components/RequestTable';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  // Sample data for demonstration
  const sampleRequests = [
    {
      id: 1001,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '555-123-4567',
      serviceType: 'Home Sanitization',
      address: '123 Main St, Anytown',
      date: '2023-06-15',
      time: '10:00',
      status: 'Completed',
      instructions: 'Please focus on kitchen and bathrooms'
    },
    {
      id: 1002,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '555-987-6543',
      serviceType: 'Office Sanitization',
      address: '456 Business Ave, Commerce City',
      date: '2023-06-18',
      time: '14:00',
      status: 'In Progress',
      instructions: 'Entry code is 1234'
    },
    {
      id: 1003,
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '555-456-7890',
      serviceType: 'Vehicle Sanitization',
      address: '789 Park Rd, Greenville',
      date: '2023-06-20',
      time: '09:30',
      status: 'Pending',
      instructions: 'SUV with leather seats'
    },
    {
      id: 1004,
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '555-789-0123',
      serviceType: 'Home Sanitization',
      address: '321 Oak St, Riverside',
      date: '2023-06-22',
      time: '13:00',
      status: 'Cancelled',
      instructions: 'Have pets, please use pet-friendly products'
    }
  ];

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }
    
    // In a real app, you would fetch data from an API
    // For demo purposes, we're using sample data
    setTimeout(() => {
      setRequests(sampleRequests);
      setIsLoading(false);
    }, 1000);
  }, [navigate]);

  const handleStatusChange = (id, newStatus) => {
    setRequests(
      requests.map(request => 
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };

  const handleDelete = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-summary">
          <div className="summary-card">
            <h3>Total Requests</h3>
            <p>{requests.length}</p>
          </div>
          
          <div className="summary-card">
            <h3>Pending</h3>
            <p>{requests.filter(r => r.status === 'Pending').length}</p>
          </div>
          
          <div className="summary-card">
            <h3>In Progress</h3>
            <p>{requests.filter(r => r.status === 'In Progress').length}</p>
          </div>
          
          <div className="summary-card">
            <h3>Completed</h3>
            <p>{requests.filter(r => r.status === 'Completed').length}</p>
          </div>
        </div>
        
        <div className="requests-section">
          <h2>Service Requests</h2>
          
          {isLoading ? (
            <div className="loading">Loading requests...</div>
          ) : (
            <RequestTable 
              requests={requests}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;