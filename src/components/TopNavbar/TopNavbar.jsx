import React from 'react';
import styles from './TopNavbar.module.css';

const TopNavbar = () => {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.topTitle}>University Crime Map</div>
      <div className={styles.rightSectionTop}>
       <button className={styles.button}>Share</button>
       <button className={styles.button}>Police</button>
        <button className={`${styles.button} ${styles.alertButton}`}>Get Alerts</button>
        <button className={`${styles.button} ${styles.signInButton}`}>Sign in</button>
      </div>
    </div>
  );
};

export default TopNavbar;
