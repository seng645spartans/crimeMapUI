import styles from "./SecondNavbar.module.css";
import React from 'react';

const UniversityDropdown = ({ value, onChange }) => (
  <div className={styles.dropdown}>
    <select value={value} onChange={onChange}>
      <option value="" disabled>Select the University</option>
      <option value="UMBC">UMBC</option>
      <option value="UMCP">UMCP</option>
      {/* Add more options as needed */}
    </select>
  </div>
);

  
export default UniversityDropdown;