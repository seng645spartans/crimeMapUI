import styles from "./CrimeDetails.module.css"; // Path to your CSS module
import Header from '../Header/Header';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CrimeDetails = () => {
  const { caseId } = useParams(); // Get the caseId from URL
  const [crimeDetails, setCrimeDetails] = useState(null);

  useEffect(() => {
    const fetchCrimeDetails = async () => {
      const response = await fetch(`http://localhost:8080/getCrimeData/Info/${caseId}`);
      if (response.ok) {
        const jsonData = await response.json();
        setCrimeDetails(jsonData);
      }
    };

    fetchCrimeDetails();
  }, [caseId]);

  return (
    <div>
      <Header></Header>
      <div className={styles.detailsContainer}>
        {crimeDetails ? (
          <>
            <h1>Crime Details Page for the Crime</h1>
            <p>Type: {crimeDetails.type}</p>
            <p>Date: {crimeDetails.date}</p>
            <p>Address: {crimeDetails.address}</p>
            {/* Add more details as needed */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CrimeDetails;
