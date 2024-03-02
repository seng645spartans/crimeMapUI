import React from 'react';
import Modal from '../Modal/Modal';
import styles from "./SecondNavbar.module.css";

const ButtonWithModal = ({ buttonText, onToggle, showModal, children }) => (
  <div className={styles.buttonModalContainer}>
    <button onClick={onToggle} className={styles.navbarButton}>{buttonText}</button>
    {showModal && <Modal onClose={onToggle}>{children}</Modal>}
  </div>
);

export default ButtonWithModal;