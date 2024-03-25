import React from 'react';
import Header from '../Header/Header';
import styles from './InfoPages.module.css'; // Assuming you create a shared CSS module

const About = () => {
    return (
        <div>
           <Header />
        <div className={styles.infoContainer}>
            <h1>About Crime Mapping</h1>
            <p>
              Crime mapping is an innovative tool used by researchers, law enforcement agencies,
              and the public to visualize crime trends in a geographical area. It involves plotting
              crime incidents on a map so that patterns can be identified and resources can be
              allocated more effectively. With crime mapping, community members can stay informed
              about the safety of their area, and policymakers can make data-driven decisions to
              improve public security. Our University Crime Mapping system is designed to give
              insight into campus safety under the Clery Act, which mandates the disclosure of
              crime statistics and security information by educational institutions.
            </p>
        </div>
        </div>
    );
};

export default About;
