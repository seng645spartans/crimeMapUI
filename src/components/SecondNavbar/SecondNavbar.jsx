import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import UniversityDropdown from './UniversityDropdown';
import GoButton from './GoButton';
import DateRangeDisplay from './Daterange';
import ButtonWithModal from './ButtonWithModal';
import CrimeSelectionComponent from '../CrimeSelection/CrimeSelectionComponent';
import PoliceComponent from '../Police/PoliceComponent';
import DateRangeComponent from '../DateRange/DateRangeComponent';

const SecondNavbar = ({ onCrimeTypeChange, onDateRangeChange }) => {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();
  const [university, setUniversity] = useState('');

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleGoClick = () => {
    if (university) {
      navigate(`/Dashboard/${university}`);
    }
  };

  const showModal = (modalName) => {
    setActiveModal(activeModal === modalName ? null : modalName);
  };

  return (
    <AppBar position="static" color="default" sx={{ zIndex: 2, color: 'black', backgroundColor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'right', alignItems: 'center', padding: '-20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <UniversityDropdown value={university} onChange={handleUniversityChange} sx={{ mr: 2 }} />
          <GoButton onClick={handleGoClick} />
          <DateRangeDisplay />
          <ButtonWithModal buttonText="What" onToggle={() => showModal('what')} showModal={activeModal === 'what'}>
            <CrimeSelectionComponent onCrimeSelectionChange={onCrimeTypeChange} />
          </ButtonWithModal>
          <ButtonWithModal buttonText="Police" onToggle={() => showModal('police')} showModal={activeModal === 'police'}>
            <PoliceComponent />
          </ButtonWithModal>
          <ButtonWithModal buttonText="When" onToggle={() => showModal('when')} showModal={activeModal === 'when'}>
            <DateRangeComponent onDateRangeChange={onDateRangeChange} />
          </ButtonWithModal>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SecondNavbar;
