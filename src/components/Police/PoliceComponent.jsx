import React from 'react';
import styles from './PoliceComponent.module.css';

const PoliceComponent = () => {
  return (
    <div className={styles.policeContainer}>
      <h1>UMD Police Department</h1>
      <ul>
        <li>
          <a href="https://www.yourlinkhere.com/emergency-services" target="_blank" rel="noopener noreferrer">Emergency Services</a>
          <p>Description of Emergency Services...</p>
        </li>
        <li>
          <a href="https://www.yourlinkhere.com/daily-crime-log" target="_blank" rel="noopener noreferrer">Daily Crime Log</a>
          <p>Description of Daily Crime Log...</p>
        </li>
        <li>
          <a href="https://www.yourlinkhere.com/police-station-services" target="_blank" rel="noopener noreferrer">Police Station Services</a>
          <p>Description of Police Station Services...</p>
        </li>
        <li>
          <a href="https://www.yourlinkhere.com/contact-information" target="_blank" rel="noopener noreferrer">Contact Information</a>
          <p>Description of how to contact the Police Department...</p>
        </li>
      </ul>
    </div>
  );
};

export default PoliceComponent;
