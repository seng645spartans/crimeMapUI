import React, { useState } from 'react';

const CrimeSelectionComponent = () => {
  // Assume initial state is no crimes selected
  const [selectedCrimes, setSelectedCrimes] = useState({
    assault: false,
    vandalism: false,
    theft: false,
    drugAlcohol: false,
    motorTheft: false,
  });

  const toggleCrimeSelection = (crime) => {
    setSelectedCrimes((prevSelections) => ({
      ...prevSelections,
      [crime]: !prevSelections[crime],
    }));
  };

  const selectAllCrimes = () => {
    setSelectedCrimes({
      assault: true,
      vandalism: true,
      theft: true,
      drugAlcohol: true,
      motorTheft: true,
    });
  };

  const deselectAllCrimes = () => {
    setSelectedCrimes({
      assault: false,
      vandalism: false,
      theft: false,
      drugAlcohol: false,
      motorTheft: false,
    });
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
