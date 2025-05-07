import React, { useEffect, useState } from 'react';
import './Applicants.css';

const Applicants = () => {
  const [applications, setApplications] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const adminPassword = 'admin123'; // Simple password for access control

  useEffect(() => {
    if (authorized) {
      const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
      setApplications(storedApplications);
    }
  }, [authorized]);

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setAuthorized(true);
    } else {
      alert('Incorrect password. Access denied.');
    }
  };

  const updateApplicationStatus = (id, status) => {
    const updatedApplications = applications.map(applicant => {
      if (applicant.id === id) {
        return { ...applicant, status };
      }
      return applicant;
    });
    setApplications(updatedApplications);
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
  };

  const removeApplication = (id) => {
    const filteredApplications = applications.filter(applicant => applicant.id !== id);
    setApplications(filteredApplications);
    localStorage.setItem('applications', JSON.stringify(filteredApplications));
  };

  if (!authorized) {
    return (
      <section className="applicants">
        <h2>Applicants - Admin Access</h2>
        <form onSubmit={handlePasswordSubmit}>
          <label>
            Enter Admin Password:
            <input
              type="password"
              value={passwordInput}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }

  if (applications.length === 0) {
    return (
      <section className="applicants">
        <h2>Applicants</h2>
        <p>No applications have been submitted yet.</p>
      </section>
    );
  }

  return (
    <section className="applicants">
      <h2>Applicants</h2>
      <ul className="applicant-list">
        {applications.map(applicant => (
          <li key={applicant.id} className="applicant-item">
            <div><strong>Name:</strong> {applicant.name}</div>
            <div><strong>Email:</strong> {applicant.email}</div>
            <div><strong>Age:</strong> {applicant.age}</div>
            <div><strong>Voice Part:</strong> {applicant.voicePart}</div>
            <div><strong>Motivation:</strong> {applicant.motivation}</div>
            <div><strong>Status:</strong> {applicant.status || 'Pending'}</div>
            {!applicant.status && (
              <div className="applicant-actions">
                <button onClick={() => updateApplicationStatus(applicant.id, 'Accepted')}>Accept</button>
                <button onClick={() => updateApplicationStatus(applicant.id, 'Rejected')}>Reject</button>
              </div>
            )}
            <button className="remove-button" onClick={() => removeApplication(applicant.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Applicants;
