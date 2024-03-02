import React from 'react';
import styles from './SecondNavbar.module.css';

const SecondNavbar = () => {
  return (
    <div className={styles.secondNavbar}>
      <div className={styles.leftSection}>
        
      </div>
      <div className={styles.rightSection}>
      <div className={styles.dropdown}>
          <select>
            <option value="" disabled selected>Select the University</option>
            <option value="university1">University 1</option>
            <option value="university2">University 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button className={styles.goButton}>GO</button>
        <div className={styles.dateRange}>Date Range: 7 days</div>
        <button className={styles.navbarButton}>What</button>
        <button className={styles.navbarButton}>Where</button>
        <button className={styles.navbarButton}>When</button>
      </div>
    </div>
  );
};

export default SecondNavbar;
