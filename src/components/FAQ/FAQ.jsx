import React from 'react';
import Header from '../Header/Header';
import styles from './InfoPages.module.css'; // Same shared CSS module

const FAQ = () => {
    return (
        <div>
           <Header />
        <div className={styles.infoContainer}>
            <h1>Frequently Asked Questions</h1>
            <ul className={styles.faqList}>
              <li><strong>What is the Clery Act?</strong><p>The Clery Act is a federal law that requires colleges to report crimes that occur "on campus" and school safety policies. This information must be available to the public.</p></li>
              <li><strong>How often is crime data updated?</strong><p>Crime data is typically updated daily, but the update frequency can vary depending on the data source.</p></li>
              <li><strong>Can I receive alerts for specific crime types?</strong><p>Yes, users can sign up for alerts and specify the types of crime they wish to be notified about.</p></li>
            </ul>
        </div>
        </div>
    );
};

export default FAQ;
