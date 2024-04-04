import React, { useState } from 'react';
import styles from './CreateAlert.module.css';
import Header from '../Header/Header';

const CreateAlert = ({ onCancel }) => {
  const [university, setUniversity] = useState('');
  const [crime, setCrime] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const crimes = [
    "Theft", "Vehicle theft", "Mal Destruction", "Assault", "AGG/Assault",
    "Burglary", "Vandalism", "Dating violence", "Harassment", "Stalking",
    "Fondling", "Rape", "DUI", "Alcohol violation", "Disorderly", "Interference", "Other"
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!university) newErrors.university = 'University is required';
    if (!crime) newErrors.crime = 'Crime is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const alertRequest = {
      university: university,
      email: email,
      crimes: { [crime]: true },
    };

    fetch('http://44.201.137.194/Alerts/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alertRequest),
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      setMessage('Success: Alert request processed successfully');
      // Clear form fields
      setUniversity('');
      setCrime('');
      setEmail('');
    })
    .catch((error) => {
      setMessage(`Error: ${error.message}`);
    });
  };

  return (
    <div> 
      <Header />
      <div className={styles.createAlertContainer}>
        <h1>Create Alert</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Select University
            <select value={university} onChange={(e) => setUniversity(e.target.value)}>
              <option value="">Select University</option>
              <option value="UMBC">UMBC</option>
              <option value="UMCP">UMCP</option>
            </select>
          </label>
          {errors.university && <p className={styles.error}>{errors.university}</p>}

          <label>
            Select Crime
            <select value={crime} onChange={(e) => setCrime(e.target.value)}>
              <option value="">Select Crime</option>
              {crimes.map(crime => (
                <option key={crime} value={crime}>{crime}</option>
              ))}
            </select>
          </label>
          {errors.crime && <p className={styles.error}>{errors.crime}</p>}

          <label>
            Enter Email Address
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <button type="submit" className={styles.submitBtn}>GO</button>
          <button type="button" onClick={onCancel} className={styles.cancelBtn}>Cancel</button>
        </form>
        {message && <p className={styles.message}>{message}</p>} {/* Display success or error message */}
      </div>
    </div>
  );
};

export default CreateAlert;
