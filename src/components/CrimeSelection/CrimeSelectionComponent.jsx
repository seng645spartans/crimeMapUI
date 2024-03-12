import React, { useState } from 'react';

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
    <div>
      <button onClick={selectAllCrimes}>Select all</button>
      <button onClick={deselectAllCrimes}>Deselect all</button>
      {Object.keys(selectedCrimes).map((crime) => (
        <div key={crime}>
          <input
            type="checkbox"
            id={crime}
            name={crime}
            checked={selectedCrimes[crime]}
            onChange={() => toggleCrimeSelection(crime)}
          />
          <label htmlFor={crime}>{crime.charAt(0).toUpperCase() + crime.slice(1)}</label>
        </div>
      ))}
    </div>
  );
};

export default CrimeSelectionComponent;
