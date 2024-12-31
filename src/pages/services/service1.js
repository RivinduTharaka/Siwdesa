import React from 'react';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BackgroundImage from '../../images/sazukihomeimg1.jpg'; // Import your image   

function Service1() {
  return (
    <Box
    sx={{
      // backgroundImage: `url(${BackgroundImage})`, // Set the background image
backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BackgroundImage})`,

      backgroundRepeat: 'no-repeat', // Prevent image repetition
      backgroundSize: 'cover', // Ensure the image covers the entire box
      backgroundPosition: 'center', // Center the image
      color: '#fff', // White text
      height: '60vh', // 40% of the viewport height
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
        fontWeight: ' ',
        marginTop: '60px',
        fontSize: {
          xs: '3rem', // Font size for small screens
          sm: '3rem',   // Font size for medium screens
          md: '4rem', // Font size for larger screens
          lg: '5rem',   // Font size for extra-large screens
        },
      }}
    >
       Services
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

export default Service1;
