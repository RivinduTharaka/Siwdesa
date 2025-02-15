import React from 'react';
import { Button, Box } from '@mui/material';
import Swal from 'sweetalert2';
import dubaiFlag from '../images/flag.png'; // Add a Dubai flag image in your project folder

function CountryBTN() {
  
  // Handle button click to show premium popup
  const handleClick = () => {
    Swal.fire({
      title: '🌍 Dubai Branch Launching Soon!',
      html: `
        <img src="${dubaiFlag}" alt="Dubai Flag" style="width: 100px; border-radius: 8px; margin-bottom: 10px;" />
        <p style="font-size: 16px; font-weight: 500;">
          We are expanding! Our new branch in <strong>Dubai</strong> will be launching soon. Stay tuned for updates!
        </p>
      `,
      icon: 'info',
      confirmButtonText: 'Explore More',
      confirmButtonColor: '#0070f3', // Premium blue shade
      background: '#f8f9fa', // Light modern background
      customClass: {
        popup: 'premium-popup',
        title: 'premium-title',
        confirmButton: 'premium-button',
      },
    });
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        // justifyContent: 'flex-end',
        // alignItems: 'center', 
        width: '100%',
        padding: 2,
      }}
    >
      <Button 
        variant="contained" 
        sx={{
          background: 'linear-gradient(45deg,rgb(252, 3, 3),rgb(252, 3, 3))', // Premium gradient
          color: '#fff',
          fontWeight: 'bold',
          borderRadius: '8px',
          padding: '10px 20px',
          '&:hover': {
            background: 'linear-gradient(45deg,rgb(174, 73, 73),rgb(170, 87, 87))',
          }
        }} 
        onClick={handleClick} 
      >
        DUBAI Branch
      </Button>
    </Box>
  );
}

export default CountryBTN;
