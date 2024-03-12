import React, { useState } from 'react';
import styles from './SecondNavbar.module.css';
import UniversityDropdown from './UniversityDropdown';
import GoButton from './GoButton';
import DateRangeDisplay from './Daterange';
import ButtonWithModal from './ButtonWithModal';
import CrimeSelectionComponent from '../CrimeSelection/CrimeSelectionComponent';
import PoliceComponent from '../Police/PoliceComponent';
import DateRangeComponent from '../DateRange/DateRangeComponent';
import { useNavigate } from 'react-router-dom';

const SecondNavbar = ({ onCrimeTypeChange, onDateRangeChange }) => {
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
  
  const [university, setUniversity] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleGoClick = () => {
    if (university) {
      navigate(`/Dashboard/${university}`); // Navigate to the dashboard with the selected university
    }
  };

  return (
    <div className={styles.secondNavbar}>
      <UniversityDropdown value={university} onChange={handleUniversityChange} />
      <GoButton onClick={handleGoClick} />
      <DateRangeDisplay />
      <ButtonWithModal buttonText="What" onToggle={() => showModal('what')} showModal={activeModal === 'what'}>
        <CrimeSelectionComponent onCrimeSelectionChange={onCrimeTypeChange} />
      </ButtonWithModal>
      <ButtonWithModal buttonText="Police" onToggle={() => showModal('police')} showModal={activeModal === 'police'}>
        <PoliceComponent></PoliceComponent>
      </ButtonWithModal>
      <ButtonWithModal buttonText="When" onToggle={() => showModal('when')} showModal={activeModal === 'when'}>
        <DateRangeComponent onDateRangeChange={onDateRangeChange} />
      </ButtonWithModal>
    </div>
  );
};

export default SecondNavbar;
