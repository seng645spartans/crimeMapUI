import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GoogleLoginCustom from "../GoogleLogin/GoogleLogin";
import PopupModal from "../PopUp/PopupModal";

const TopNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState("https://taupe-snickerdoodle-744e96.netlify.app/Dashboard/UMBC");
  const navigate = useNavigate();

  const handleShareClick = () => setIsModalOpen(true);
  const handleGetAlertsClick = () => navigate("/Alert");
  const handleGetHomeClick = () => navigate("/");
  const handleAdminButtonClick = () => navigate("/Admin")
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareLink)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Could not copy link: ", err));
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', padding: '3px', alignItems: 'center' }}>
      <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
        <Button sx={{ color: 'white', textTransform: 'none', paddingLeft: '2%' }} onClick={handleGetHomeClick}>
          <Typography variant="h6">Campus Crime Watch</Typography>
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button sx={{ backgroundColor: '#3498db', color: 'white', marginLeft: '10px', '&:hover': { backgroundColor: '#2980b9' } }} onClick={handleAdminButtonClick}>
            Admin
          </Button>
          <Button sx={{ backgroundColor: '#3498db', color: 'white', marginLeft: '10px', '&:hover': { backgroundColor: '#2980b9' } }} onClick={handleShareClick}>
            Share
          </Button>
          <Button sx={{ backgroundColor: '#e74c3c', color: 'white', marginLeft: '10px', '&:hover': { backgroundColor: '#c0392b' } }} onClick={handleGetAlertsClick}>
            Get Alerts
          </Button>
          <Box sx={{ marginLeft: '10px' }}>
            <GoogleLoginCustom />
          </Box>
        </Box>
        {isModalOpen && (
          <PopupModal onClose={() => setIsModalOpen(false)}>
            <Box sx={{ textAlign: 'center', color: '#4A4A4A', padding: '20px' }}>
              <Typography variant="h6" sx={{ color: '#333', marginBottom: '20px', fontWeight: '600' }}>Share this map</Typography>
              <input type="text" value={shareLink} readOnly style={{ width: '80%', padding: '10px', marginBottom: '20px', border: '1px solid #DADADA', borderRadius: '5px', fontSize: '16px', textAlign: 'center' }} />
              <Button sx={{ backgroundColor: '#0056b3', color: 'white', padding: '10px 20px', '&:hover': { backgroundColor: '#003d82' } }} onClick={handleCopyLink}>
                Copy Link
              </Button>
            </Box>
          </PopupModal>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
