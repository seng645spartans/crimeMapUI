import React from 'react';
import Header from '../Header/Header';
import styles from './InfoPages.module.css'; // Same shared CSS module

const Help = () => {
    return (
        <div>
           <Header />
        <div className={styles.infoContainer}>
            <h1>Help Center</h1>
            <p>If you're having trouble using the University Crime Mapping tool, here are some tips to get you started:</p>
            <ul>
              <li>Navigating the Map: Use the zoom controls to move in and out of the map and click on markers for more information about reported crimes.</li>
              <li>Crime Filters: You can filter the crime data by type, date range, and location using the options provided.</li>
              <li>Report a Crime: If you would like to report a crime, please contact your local campus security or police department.</li>
            </ul>
            <p>For further assistance, please reach out to our support team via the Contact page.</p>
        </div>
        </div>
    );
};

export default Help;
