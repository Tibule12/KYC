import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import './Applicants.css';

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') || '');
  const [responseMessages, setResponseMessages] = useState({});

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  const fetchApplicants = async (token) => {
    try {
      console.log('Fetching applicants with token:', token);
      console.log('Request URL:', `${backendUrl}/api/applicants`);
      const response = await fetch(`${backendUrl}/api/applicants`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Response status:', response.status);
      if (response.status === 401) {
        throw new Error('Unauthorized. Please login as admin.');
      }
      if (!response.ok) {
        throw new Error('Failed to fetch applicants');
      }
      const data = await response.json();
      console.log('Applicants data:', data);
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format received from server');
      }
      setApplicants(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching applicants:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminToken) {
      fetchApplicants(adminToken);
    } else {
      setLoading(false);
    }
  }, [adminToken]);

  const handleLogin = () => {
    const token = 'admin123';
    setAdminToken(token);
    localStorage.setItem('adminToken', token);
    setError(null);
    setLoading(true);
    fetchApplicants(token);
  };

  const handleResponseChange = (id, value) => {
    setResponseMessages(prev => ({ ...prev, [id]: value }));
  };

  const updateApplicantStatus = async (id, status) => {
    try {
      const response = await fetch(`${backendUrl}/api/applicants/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      // Refresh applicants list
      fetchApplicants(adminToken);
    } catch (err) {
      alert(err.message);
    }
  };

  const removeApplicant = async (id) => {
    if (!window.confirm('Are you sure you want to remove this applicant?')) return;
    try {
      const response = await fetch(`${backendUrl}/api/applicants/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to remove applicant');
      }
      // Refresh applicants list
      fetchApplicants(adminToken);
    } catch (err) {
      alert(err.message);
    }
  };

  if (!adminToken) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  if (loading) return <p>Loading applicants...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log('Rendering applicants:', applicants);
  return (
    <div className="applicants-container">
      <h2>Applicants</h2>
      {applicants.length === 0 ? (
        <p>No applicants found.</p>
      ) : (
        applicants.map(applicant => (
          <div key={applicant.id} className="applicant-card">
            <p><strong>Name:</strong> {applicant.name}</p>
            <p><strong>Email:</strong> {applicant.email}</p>
            <p><strong>Age:</strong> {applicant.age}</p>
            <p><strong>Voice Part:</strong> {applicant.voicePart}</p>
            <p><strong>Motivation:</strong> {applicant.motivation}</p>
            <p><strong>Status:</strong> {applicant.status || 'Pending'}</p>
            <textarea
              placeholder="Response message"
              value={responseMessages[applicant.id] || ''}
              onChange={(e) => handleResponseChange(applicant.id, e.target.value)}
              className="response-textarea"
            />
            <div className="button-group">
              <button onClick={() => updateApplicantStatus(applicant.id, 'Accepted')}>Accept</button>
              <button onClick={() => updateApplicantStatus(applicant.id, 'Rejected')}>Reject</button>
              <button onClick={() => removeApplicant(applicant.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Applicants;
