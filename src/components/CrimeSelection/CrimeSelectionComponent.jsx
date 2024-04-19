import React, { useEffect, useState } from 'react';
import styles from './CrimeSelectionComponent.module.css';

const CrimeSelectionComponent = ({ onCrimeSelectionChange }) => {
  const [availableCrimes, setAvailableCrimes] = useState([]);
  const [selectedCrimes, setSelectedCrimes] = useState({});

  useEffect(() => {
    const fetchCrimeTypes = async () => {
      const response = await fetch('https://seng645backend.me/getCrimeData/crimeTypes');
      if (response.ok) {
        const crimes = await response.json();
        const crimeSelections = crimes.reduce((acc, crime) => {
          acc[crime.toLowerCase()] = true; // Initialize all crimes as selected
          return acc;
        }, {});
        setAvailableCrimes(crimes.map(crime => crime.toLowerCase()));
        setSelectedCrimes(crimeSelections);
      }
    };

    fetchCrimeTypes();
  }, []);

  const toggleCrimeSelection = (crime) => {
    const newSelections = {
      ...selectedCrimes,
      [crime]: !selectedCrimes[crime],
    };
    setSelectedCrimes(newSelections);
    onCrimeSelectionChange(newSelections);
  };

  const selectAllCrimes = () => {
    const allSelected = availableCrimes.reduce((acc, crime) => {
      acc[crime] = true;
      return acc;
    }, {});
    setSelectedCrimes(allSelected);
    onCrimeSelectionChange(allSelected);
  };

  const deselectAllCrimes = () => {
    const allDeselected = availableCrimes.reduce((acc, crime) => {
      acc[crime] = false;
      return acc;
    }, {});
    setSelectedCrimes(allDeselected);
    onCrimeSelectionChange(allDeselected);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={selectAllCrimes}>Select all</button>
        <button className={styles.button} onClick={deselectAllCrimes}>Deselect all</button>
      </div>
      {availableCrimes.map((crime) => (
        <div className={styles.crimeItem} key={crime}>
          <div className={styles.crimeIcon}>
            {/* Insert the icon component here */}
          </div>
          <input
            className={styles.checkbox}
            type="checkbox"
            id={crime}
            name={crime}
            checked={selectedCrimes[crime]}
            onChange={() => toggleCrimeSelection(crime)}
          />
          <label className={styles.crimeLabel} htmlFor={crime}>{crime.charAt(0).toUpperCase() + crime.slice(1)}</label>
        </div>
      ))}
    </div>
  );
};

export default CrimeSelectionComponent;
