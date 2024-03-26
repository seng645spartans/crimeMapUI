import React, { useState } from 'react';
import styles from './AdminDashboard.module.css';
import Header from '../Header/Header';

const AdminDashboard = () => {
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [selectedCrimes, setSelectedCrimes] = useState([]);

  const universities = ["UMBC", "UMCP", "UMD"];
  const crimes = ["Theft", "Assault", "Vandalism"];

  const toggleSelection = (item, list, setList) => {
    const currentIndex = list.indexOf(item);
    const newChecked = [...list];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setList(newChecked);
  };

  return (
    <div>
    <Header />
    <div className={styles['admin-dashboard']}>
      <h1>Admin Dashboard</h1>
      <div className={styles.dashboard}>
        <div className={styles.selection}>
          <h2>Universities</h2>
          {universities.map(uni => (
            <label key={uni} className={styles.checkboxContainer}>
              {uni}
              <input
                type="checkbox"
                checked={selectedUniversities.includes(uni)}
                onChange={() => toggleSelection(uni, selectedUniversities, setSelectedUniversities)}
              />
              <span className={styles.checkmark}></span>
            </label>
          ))}
        </div>
        <div className={styles.selection}>
          <h2>Crimes</h2>
          {crimes.map(crime => (
            <label key={crime} className={styles.checkboxContainer}>
              {crime}
              <input
                type="checkbox"
                checked={selectedCrimes.includes(crime)}
                onChange={() => toggleSelection(crime, selectedCrimes, setSelectedCrimes)}
              />
              <span className={styles.checkmark}></span>
            </label>
          ))}
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.enableButton}>Enable</button>
          <button className={styles.disableButton}>Disable</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
