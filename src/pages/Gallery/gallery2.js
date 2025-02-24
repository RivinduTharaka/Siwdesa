import React from 'react';
import { Box, Typography } from '@mui/material';
import truckImage from '../../images/lorry123-removebg-preview.png'; // Replace with the actual truck image path

function Gallery2() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for larger screens
      justifyContent: 'space-between',
      alignItems: 'center',
      background: {
        xs: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.8))', // Mobile view
        md: 'linear-gradient(to right, rgba(255, 255, 255, 0.17) 50%, rgb(162, 0, 0) 50%)', // Larger screens
      },
      padding: { xs: 2, md: 4 },
      position: 'relative',
      overflow: 'hidden',
      height: 'auto',
      marginTop: 5,
    }}
    
    >
      {/* Image Section */}
      <Box
        component="img"
        src={truckImage}
        alt="Truck"
        sx={{
          width: '60%',
          maxWidth: { md: '50%' }, // Limit width for larger screens
          marginBottom: { xs: 2, md: 0 },
          zIndex: 2,
          // alignItems:'center
        }}
      />

      {/* Content Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          color: 'white',
          padding: { xs: 2, md: 4 },
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
          24/7 Roadside Recovery Service
        </Typography>
        <Typography variant="body1" sx={{ marginY: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
          With guaranteed safety and affordable rates
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ marginTop: 1, fontSize: { xs: '1.25rem', md: '1.75rem' } }}
        >
          CALL: (+94) 766446464
        </Typography>
      </Box>
    </Box>
  );
}

export default Gallery2;
