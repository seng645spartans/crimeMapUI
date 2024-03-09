import React, { useState } from 'react';
import styles from './SecondNavbar.module.css';
import UniversityDropdown from './UniversityDropdown';
import GoButton from './GoButton';
import DateRangeDisplay from './Daterange';
import ButtonWithModal from './ButtonWithModal';
import CrimeSelectionComponent from '../CrimeSelection/CrimeSelectionComponent';
import PoliceComponent from '../Police/PoliceComponent';
import DateRangeComponent from '../DateRange/DateRangeComponent';

const SecondNavbar = () => {
  const [activeModal, setActiveModal] = useState(null);

  const showModal = (modalName) => {
    if (activeModal === modalName) {
      // If the same button is clicked again, close the modal
      setActiveModal(null);
    } else {
      // Open the new modal
      setActiveModal(modalName);
    }
  };

  return (
    <div className={styles.secondNavbar}>
      <UniversityDropdown />
      <GoButton />
      <DateRangeDisplay />
      <ButtonWithModal buttonText="What" onToggle={() => showModal('what')} showModal={activeModal === 'what'}>
        <CrimeSelectionComponent></CrimeSelectionComponent>
      </ButtonWithModal>
      <ButtonWithModal buttonText="Police" onToggle={() => showModal('police')} showModal={activeModal === 'police'}>
        <PoliceComponent></PoliceComponent>
      </ButtonWithModal>
      <ButtonWithModal buttonText="When" onToggle={() => showModal('when')} showModal={activeModal === 'when'}>
        <DateRangeComponent></DateRangeComponent>
      </ButtonWithModal>
    </div>
  );
};

export default SecondNavbar;
