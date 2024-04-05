import React, { useState, useEffect } from 'react';
import styles from './CreateAlert.module.css';
import Header from '../Header/Header';

const CreateAlert = ({ onCancel }) => {
  const [university, setUniversity] = useState('');
  const [crime, setCrime] = useState('');
  const [email, setEmail] = useState('');
  const [crimes, setCrimes] = useState([]);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch crime types from the backend when the component mounts
    const fetchCrimes = async () => {
      try {
        const response = await fetch('http://localhost:8080/getCrimeData/crimeTypes');
        if (response.ok) {
          const crimeTypes = await response.json();
          setCrimes(crimeTypes);
        } else {
          throw new Error('Failed to fetch crime types');
        }
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    };

    fetchCrimes();

    // Attempt to retrieve email from sessionStorage
    const storedEmail = sessionStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const validateForm = () => {
    let newErrors = {};
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

    // Check if the email is not present in session storage
    if (!sessionStorage.getItem('userEmail')) {
      setMessage('Please log in to submit an alert.');
      return;
    }

    if (!validateForm()) return;

    const alertRequest = {
      university: university,
      email: email,
      crimes: { [crime]: true },
    };

    fetch('http://localhost:8080/Alerts/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alertRequest),
    })
    .then(response => {
      if (response.ok) {
        setMessage('Success: Alert request processed successfully.');
        setUniversity('');
        setCrime('');
        setEmail('');
      } else {
        throw new Error('An error occurred while submitting the alert.');
      }
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
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default CreateAlert;
