import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/sazukilogo-removebg-preview.png'; // Ensure this path is correct

function Navbar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        color: 'black'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={NavLink} to="/" onClick={handleMobileMenuClose}>
        Home
      </MenuItem>
      <MenuItem component={NavLink} to="/about" onClick={handleMobileMenuClose}>
        About
      </MenuItem>
      <MenuItem component={NavLink} to="/whatwedo" onClick={handleMobileMenuClose}>
        Services
      </MenuItem>
      <MenuItem component={NavLink} to="/gallery" onClick={handleMobileMenuClose}>
        Gallery
      </MenuItem>
      <MenuItem component={NavLink} to="/careers" onClick={handleMobileMenuClose}>
        Careers
      </MenuItem>
      <MenuItem component={NavLink} to="/contact" onClick={handleMobileMenuClose}>
        Contact
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        // mt: 2,
        width: '100%',
        background: 'white' // Set background color here if needed
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src={logo} alt="Logo" style={{ width: '150px' }} />

          </Box>
        </NavLink>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2.5, alignItems: 'center' }}>
          <Button component={NavLink} to="/" sx={navLinkStyle}>
            Home
          </Button>
          <Button component={NavLink} to="/about" sx={navLinkStyle}>
            About
          </Button>
          <Button component={NavLink} to="/whatwedo" sx={navLinkStyle}>
            Services
          </Button>
          <Button component={NavLink} to="/gallery" sx={navLinkStyle}>
            Gallery
          </Button>
          <Button component={NavLink} to="/careers" sx={navLinkStyle}>
            Careers
          </Button>
          <Button component={NavLink} to="/contact" sx={navLinkStyle}>
            Contact
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://wa.me/+94755701201"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#C8102E',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#A00C23',
              },
            }}
          >
            Get Quote
          </Button>

        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            style={{ color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  );
}

// Navigation Link Styling
const navLinkStyle = {
  color: 'black',
  fontSize: '1rem',
  fontWeight: { xs: '550', md: '600' },

  fontStyle: 'italic',
  textTransform: 'none',
  padding: '10px',
  textDecoration: 'none',
  position: 'relative', // Needed to position the ::before pseudo-element
  overflow: 'hidden', // Ensures the underline doesn't extend outside the text
  '&::before': { // Pseudo-element for the underline
    content: '""', // Necessary to create a pseudo-element
    position: 'absolute',
    width: '0', // Start with no underline
    height: '3px',
    bottom: '0',
    left: '0',
    backgroundColor: '#C8102E',
    transition: 'width 0.3s ease', // Animation effect
  },
  '&:hover::before': {
    width: '100%', // Full width on hover
  },
};

export default Navbar;
