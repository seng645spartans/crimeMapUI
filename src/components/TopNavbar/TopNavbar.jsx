import React, { useState } from 'react';
import styles from './TopNavbar.module.css';
import PopupModal from '../PopUp/PopupModal';
import { useNavigate } from 'react-router-dom';

const TopNavbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState("https://www.example.com/map"); // Replace with your actual sharing link
  const navigate = useNavigate();

  const handleShareClick = () => {
    setIsModalOpen(true);
  };
  const handleGetAlertsClick = () => {
    navigate('/Alert'); // Navigate to the CreateAlert component
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink)
      .then(() => alert('Link copied to clipboard!')) // Show some alert or toast notification
      .catch(err => console.error('Could not copy link: ', err));
  };

  return (
    <div className={styles.topNavbar}>
      <div className={styles.topTitle}>University Crime Map</div>
      <div className={styles.rightSectionTop}>
      <button className={styles.button} onClick={handleShareClick}>Share</button>
        <button className={styles.button}>Graphs</button>
        <button className={`${styles.button} ${styles.alertButton}`} onClick={handleGetAlertsClick}>Get Alerts</button>
        <button className={`${styles.button} ${styles.signInButton}`}>Sign in</button>
      </div>
      {isModalOpen && (
        <PopupModal onClose={() => setIsModalOpen(false)}>
          <div className={styles.modalContent}>
            <h2>Share this map</h2>
            <input type="text" value={shareLink} readOnly />
            <button onClick={handleCopyLink}>Copy Link</button>
          </div>
        </PopupModal>
      )}
    </div>
  );
};

export default TopNavbar;
