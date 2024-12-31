import React from 'react';
import { Box, Typography } from '@mui/material';
import BackgroundImage from '../../images/sazukihomeimg.jpg'; // Import your image
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Project1() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`, // Replace with actual image path
        color: '#fff', // White text
        height: '40vh', // Full screen height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Main Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          marginTop: '60px',
        }}
      >
      Our Projects
      </Typography>

      {/* Downward Arrow */}
      <KeyboardArrowDownIcon
        sx={{
          fontSize: '3rem',
          marginTop: '20px',
        }}
      />
    </Box>
  );
}

export default Project1;
