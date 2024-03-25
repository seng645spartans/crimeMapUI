import React, { useState } from 'react';
import styles from './CreateAlert.module.css'; // Path to your CSS module
import Header from '../Header/Header';

const CreateAlert = ({ onCancel }) => {
  const [university, setUniversity] = useState('');
  const [crime, setCrime] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ university, crime, email });
  };

  return (
    <div> 
    <Header></Header>
    <div className={styles.createAlertContainer}>
      <h1>Create Alert</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select University
          <select value={university} onChange={(e) => setUniversity(e.target.value)}>
            <option value="">Select University</option>
            <option value="university1">University 1</option>
            <option value="university2">University 2</option>
          </select>
        </label>
        <label>
          Select Crime
          <select value={crime} onChange={(e) => setCrime(e.target.value)}>
            <option value="">Select Crime</option>
            <option value="crime1">Crime 1</option>
            <option value="crime2">Crime 2</option>
          </select>
        </label>
        <label>
          Enter Email Address
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit" className={styles.submitBtn}>GO</button>
        <button type="button" onClick={onCancel} className={styles.cancelBtn}>Cancel</button>
      </form>
    </div>
    </div>
  );
};

export default CreateAlert;
