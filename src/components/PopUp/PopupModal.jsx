import React from 'react';
import ReactDOM from 'react-dom';
import styles from './PopupModal.module.css'; // Import or define some basic modal styles

const PopupModal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.body // Assuming you have no server-side rendering
  );
};

export default PopupModal;
