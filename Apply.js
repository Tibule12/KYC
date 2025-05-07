import React, { useState, useRef } from 'react';
import './Apply.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    voicePart: '',
    motivation: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [statusEmail, setStatusEmail] = useState('');
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [statusChecked, setStatusChecked] = useState(false);

  const voiceParts = ['Soprano', 'Alto', 'Tenor', 'Bass'];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.age || isNaN(formData.age) || formData.age < 10 || formData.age > 30) {
      newErrors.age = 'Age must be a number between 10 and 30';
    }
    if (!formData.voicePart) newErrors.voicePart = 'Please select a voice part';
    if (!formData.motivation.trim()) newErrors.motivation = 'Please provide a motivation message';
    return newErrors;
  };

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Save application to localStorage
      const existingApplications = JSON.parse(localStorage.getItem('applications')) || [];
      const newApplication = {...formData, id: Date.now()};
      localStorage.setItem('applications', JSON.stringify([...existingApplications, newApplication]));

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        age: '',
        voicePart: '',
        motivation: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  const handleStatusEmailChange = e => {
    setStatusEmail(e.target.value);
  };
  const [videoFile, setVideoFile] = useState(null);
const videoInputRef = useRef(null);
  const handleVideoChange = e => {
    const file = e.target.files[0];
    setVideoFile(file);
  };   

  const checkApplicationStatus = e => {
    e.preventDefault();
    const existingApplications = JSON.parse(localStorage.getItem('applications')) || [];
    const application = existingApplications.find(app => app.email.toLowerCase() === statusEmail.toLowerCase());
    if (application) {
      setApplicationStatus(application.status || 'Pending');
    } else {
      setApplicationStatus('No application found for this email.');
    }
    setStatusChecked(true);
  };

  return (
    <section className="apply">
      <h2>Apply to Join the Choir</h2>
      {submitted && <div className="success-message">Thank you for your application! We will get back to you soon.</div>}

      <form onSubmit={handleSubmit} noValidate>
        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <span className="error">{errors.age}</span>}
        </label>
        <label>
          Voice Part:
          <select name="voicePart" value={formData.voicePart} onChange={handleChange}>
            <option value="">-- Select --</option>
            {voiceParts.map(part => (
              <option key={part} value={part}>{part}</option>
            ))}
          </select>
          {errors.voicePart && <span className="error">{errors.voicePart}</span>}
        </label>
        <label>
  Upload a one minute video:
  <input
    type="file"
    accept="video/mp4,video/webm,video/ogg"
    onChange={handleVideoChange}
    ref={videoInputRef}
  />
  {errors.videoFile && <span className="error">{errors.videoFile}</span>}
</label>
        <label>
          Why do you want to join the choir?
          <textarea name="motivation" value={formData.motivation} onChange={handleChange} rows="4" />
          {errors.motivation && <span className="error">{errors.motivation}</span>}
        </label>
        <button type="submit">Submit Application</button>
      </form>

      <hr />

      <h2>Check Application Status</h2>
      <form onSubmit={checkApplicationStatus} noValidate>
        <label>
          Enter your email address:
          <input type="email" value={statusEmail} onChange={handleStatusEmailChange} required />
        </label>
        <button type="submit">Check Status</button>
      </form>
      {statusChecked && (
        <div className="status-result">
          <strong>Status: </strong>{applicationStatus}
        </div>
      )}
    </section>
  );
};

export default Apply;
