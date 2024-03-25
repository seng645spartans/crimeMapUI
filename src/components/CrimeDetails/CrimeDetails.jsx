import React from "react";
import styles from "./CrimeDetails.module.css"; // Path to your CSS module
import Header from '../Header/Header';

const CrimeDetails = () => {
  return (
    <div>
      <Header></Header>
    <div className={styles.detailsContainer}>
      <h1>Crime Details Page for the Crime</h1>
      <p>Type: Motor Theft</p>
      <p>Date: 02/25/2024 5:50 PM</p>
      <p>Description: STALLxxx. Event #: 20240225-XXX.</p>
      <p>
        Disclaimer: This is from the Baltimore County 911 calls for service log.
        Information is subjectto change.
      </p>
      <p>Address: ABCDXYZ AVE & 12345 CHOICE LN, Baltimore County, MD</p>
      <button className={styles.googleMapsButton}>View on Google Maps</button>
    </div>
    </div>
  );
};

export default CrimeDetails;
