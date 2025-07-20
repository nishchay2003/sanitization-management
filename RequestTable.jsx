import { useState } from 'react';
import './RequestTable.css';

const RequestTable = ({ requests, onStatusChange, onDelete }) => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  
  const handleStatusChange = (id, newStatus) => {
    onStatusChange(id, newStatus);
    setSelectedRequest(null);
  };
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      onDelete(id);
    }
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'status-pending';
      case 'In Progress':
        return 'status-progress';
      case 'Completed':
        return 'status-completed';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  return (
    <div className="request-table-container">
      <table className="request-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Service Type</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">No requests found</td>
            </tr>
          ) : (
            requests.map((request) => (
              <tr key={request.id}>
                <td>#{request.id.toString().padStart(4, '0')}</td>
                <td>{request.name}</td>
                <td>{request.serviceType}</td>
                <td>{formatDate(request.date)}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(request.status)}`}>
                    {request.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="action-btn status-btn"
                      onClick={() => setSelectedRequest(selectedRequest === request.id ? null : request.id)}
                    >
                      Change Status
                    </button>
                    <button 
                      className="action-btn delete-btn"
                      onClick={() => handleDelete(request.id)}
                    >
                      Delete
                    </button>
                    
                    {selectedRequest === request.id && (
                      <div className="status-dropdown">
                        <button onClick={() => handleStatusChange(request.id, 'Pending')}>Pending</button>
                        <button onClick={() => handleStatusChange(request.id, 'In Progress')}>In Progress</button>
                        <button onClick={() => handleStatusChange(request.id, 'Completed')}>Completed</button>
                        <button onClick={() => handleStatusChange(request.id, 'Cancelled')}>Cancelled</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;