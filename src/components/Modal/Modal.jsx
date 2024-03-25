import React from 'react';
import styles from './Modal.module.css';


const Modal = ({ onClose, children }) => {
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    );
  };
  //<button className ={styles.closeButton} onClick={onClose}>Close</button> add it to the div if you want to close
export default Modal;