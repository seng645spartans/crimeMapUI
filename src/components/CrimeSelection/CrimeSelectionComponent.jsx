import React, { useState } from 'react';
import styles from './CrimeSelectionComponent.module.css';

const CrimeSelectionComponent = ({ onCrimeSelectionChange }) => {
  const [selectedCrimes, setSelectedCrimes] = useState({
    assault: true,
    vandalism: true,
    theft: true,
    drugAlcohol: true,
    motortheft: true,
  });

  const toggleCrimeSelection = (crime) => {
    const newSelections = {
      ...selectedCrimes,
      [crime]: !selectedCrimes[crime],
    };
    setSelectedCrimes(newSelections);
    onCrimeSelectionChange(newSelections);
  };

  const selectAllCrimes = () => {
    const allSelected = Object.keys(selectedCrimes).reduce((acc, crime) => {
      acc[crime] = true;
      return acc;
    }, {});
    setSelectedCrimes(allSelected);
    onCrimeSelectionChange(allSelected);
  };

  const deselectAllCrimes = () => {
    const allDeselected = Object.keys(selectedCrimes).reduce((acc, crime) => {
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
      {Object.keys(selectedCrimes).map((crime) => (
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
