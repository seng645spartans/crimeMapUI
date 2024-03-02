import styles from "./SecondNavbar.module.css";
import React from 'react';

const UniversityDropdown = ({ onChange }) => (
    <div className={styles.dropdown}>
      <select onChange={onChange}>
        <option value="" disabled selected>Select the University</option>
        <option value="university1">University 1</option>
        <option value="university2">University 2</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
  
export default UniversityDropdown;