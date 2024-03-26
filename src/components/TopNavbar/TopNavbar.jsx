import React, { useState } from "react";
import styles from "./TopNavbar.module.css";
import PopupModal from "../PopUp/PopupModal";
import { useNavigate } from "react-router-dom";
import GoogleLoginCustom from "../GoogleLogin/GoogleLogin";

const TopNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState("https://www.example.com/map"); // Replace with your actual sharing link
  const navigate = useNavigate();

  const handleShareClick = () => {
    setIsModalOpen(true);
  };
  const handleGetAlertsClick = () => {
    navigate("/Alert"); // Navigate to the CreateAlert component
  };

  const handleGetHomeClick = () => {
    navigate("/"); // Navigate to the CreateHome component
  };

  const handleAdminButtonClick = () => {
    navigate("/Admin"); // Navigate to the Admin component
  };

  const handleGetGraphClick = () => {
    navigate("/Graph"); // Navigate to the Admin component
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareLink)
      .then(() => alert("Link copied to clipboard!")) // Show some alert or toast notification
      .catch((err) => console.error("Could not copy link: ", err));
  };

  return (
    <div className={styles.topNavbar}>
      <button className={styles.homeButton} onClick={handleGetHomeClick}>
        University Crime Map
      </button>
      <div className={styles.rightSectionTop}>
        <button className={styles.button} onClick={handleAdminButtonClick}>
          Admin
        </button>
        <button className={styles.button} onClick={handleShareClick}>
          Share
        </button>
        <button className={styles.button} onClick={handleGetGraphClick}>Graphs</button>
        <button
          className={`${styles.button} ${styles.alertButton}`}
          onClick={handleGetAlertsClick}
        >
          Get Alerts
        </button>
        <div className={styles.buttonSigned}>
          <GoogleLoginCustom></GoogleLoginCustom>
        </div>
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
