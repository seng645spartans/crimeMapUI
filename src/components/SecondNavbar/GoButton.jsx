import styles from "./SecondNavbar.module.css";
import React from 'react';


const GoButton = ({ onClick }) => (
    <button className={styles.goButton} onClick={onClick}>GO</button>
  );
  

export default GoButton;