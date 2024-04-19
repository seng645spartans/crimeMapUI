import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, useMediaQuery } from '@mui/material';
import GoogleLoginCustom from "../GoogleLogin/GoogleLogin";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['About', 'Help', 'FAQ'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', padding: '10px', color: 'white' }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ zIndex: 3 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box sx={{ flexGrow: 1 }} component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button sx={{ color: 'inherit', textTransform: 'none', zIndex: 2 }}>
            <Typography variant="h6">
              University Crime Map
            </Typography>
          </Button>
        </Box>

        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button sx={{ color: 'inherit', marginLeft: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: '#333' }, zIndex: 2 }} component={Link} to="/About">About</Button>
            <Button sx={{ color: 'inherit', marginLeft: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: '#333' }, zIndex: 2 }} component={Link} to="/Help">Help</Button>
            <Button sx={{ color: 'inherit', marginLeft: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: '#333' }, zIndex: 2 }} component={Link} to="/FAQ">FAQ</Button>
            <GoogleLoginCustom sx={{ zIndex: 2 }} />
          </Box>
        )}

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          {list()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
