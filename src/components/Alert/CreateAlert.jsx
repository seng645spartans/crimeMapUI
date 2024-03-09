// CreateAlert.js
import React, { useState } from 'react';

const CreateAlert = ({ onCancel }) => {
  const [university, setUniversity] = useState('');
  const [crime, setCrime] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You would handle the submission logic here
    console.log({ university, crime, email });
  };

  return (
    <div>
      <h1>Create Alert</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select University
          <select value={university} onChange={(e) => setUniversity(e.target.value)}>
            {/* Populate these options with actual university options */}
            <option value="">Select University</option>
            <option value="university1">University 1</option>
            <option value="university2">University 2</option>
          </select>
        </label>
        <label>
          Select Crime
          <select value={crime} onChange={(e) => setCrime(e.target.value)}>
            {/* Populate these options with actual crime options */}
            <option value="">Select Crime</option>
            <option value="crime1">Crime 1</option>
            <option value="crime2">Crime 2</option>
          </select>
        </label>
        <label>
          Enter Email Address
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">GO</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateAlert;
