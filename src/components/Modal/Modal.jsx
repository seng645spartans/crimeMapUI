import React from 'react';
import styles from './Modal.module.css';


const Modal = ({ onClose, children }) => {
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modalContent}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
export default Modal;