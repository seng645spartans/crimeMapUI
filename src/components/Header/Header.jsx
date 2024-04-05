import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import GoogleLoginCustom from "../GoogleLogin/GoogleLogin";

const Header = () => {
    const navigate = useNavigate();
    const handleGetAboutClick = () => {
        navigate('/About'); // Navigate to the CreateAbout component
      };
      const handleGetHelpClick = () => {
        navigate('/Help'); // Navigate to the CreateHelp component
      };
      const handleGetFAQClick = () => {
        navigate('/FAQ'); // Navigate to the CreateFAQ component
      };
      const handleGetHomeClick = () => {
        navigate('/'); // Navigate to the CreateHome component
      };
     
  return (
    <header>
      <div className={styles.topNavbar}>
      <button className={styles.homeButton} onClick={handleGetHomeClick}>University Crime Map</button>
      <div className={styles.rightSectionTop}>
      <button className={styles.button} onClick={handleGetAboutClick}>About</button>
      <button className={styles.button} onClick={handleGetHelpClick} >Help</button>
      <button className={styles.button} onClick={handleGetFAQClick}>FAQs</button>
      <GoogleLoginCustom></GoogleLoginCustom>
      </div>
      </div>
    </header>
  );
}

export default Header;