import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import dubaiFlag from '../../images/flag.png'; // Ensure you have the Dubai flag image
import bg from "../../images/image3.jpg"; // Existing image

// Handle SAZUKI UAE button click to show the popup
const handleClick = () => {
  Swal.fire({
    title: '🌍 UAE Branch Launching Soon!',
    html: `
      <img src="${dubaiFlag}" alt="Dubai Flag" style="width: 100px; border-radius: 8px; margin-bottom: 10px;" />
      <p style="font-size: 16px; font-weight: 500;">
        We are expanding! Our new branch in <strong>UAE</strong> will be launching soon. Stay tuned for updates!
      </p>
    `,
    icon: 'info',
    confirmButtonText: 'OK',
    confirmButtonColor: '#0070f3', // Premium blue shade
    background: '#f8f9fa', // Light modern background
    customClass: {
      popup: 'premium-popup',
      title: 'premium-title',
      confirmButton: 'premium-button',
    },
  });
};

function Sectwo() {
  return (
    <>
      <Box sx={{
        padding: '60px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 600px)': {
          marginTop: '-50px',
        },
      }}>
        <Grid container spacing={4} sx={{ width: '1200px', alignItems: 'center' }}>

          {/* Left Section: Image */}
          <Grid item xs={12} md={6}>
            <Box>
              <img src={bg} alt="Accident Repair" style={{ width: '100%' }} loading="lazy" />
            </Box>
          </Grid>

          {/* Right Section: Content */}
          <Grid item xs={12} md={6}>
            <Box>
              {/* Since 2013 Tag */}
              <Box sx={{ backgroundColor: '#e00000', color: '#fff', display: 'inline-block', padding: '5px 10px', borderRadius: '3px', marginBottom: '10px', fontSize: '14px' }}>
                Since <Typography component="span" fontWeight="bold">2013</Typography>
              </Box>

              {/* Headings */}
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                We Are Accident Repair Experts
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', lineHeight: 1.4, marginBottom: '20px' }}>
                WE ARE <span style={{ color: '#e00000' }}>BEST</span> AT WHAT WE DO
              </Typography>

              {/* Description */}
              <Typography variant="body1" sx={{ marginBottom: '20px', lineHeight: 1.6 }}>
                "We Put You Back on the Road in No Time." By swiftly executing necessary repairs, we live up to our commitment and have earned our reputation as the best in the business.
              </Typography>

              {/* Buttons Section */}
              <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {/* Learn More Button */}
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#e00000', ':hover': { backgroundColor: '#b00000' } }}
                  component={Link}
                  to="/about"
                >
                  MORE
                </Button>

              </Box>
              {/* SAZUKI UAE Button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ffff', // Premium gold color
                  color: '#000000', // Black text for contrast
                  ':hover': { backgroundColor: '#FF0000' }, // Slightly darker gold on hover
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px', // Increased padding for a larger feel
                  fontSize: '1.5rem', // Slightly larger font size
                  fontWeight: '', // Bold text for premium appearance
                  borderRadius: '8px', // Rounded corners for a refined look
                  marginTop: '20px',
                }}
                onClick={handleClick}
              >
                <img src={dubaiFlag} alt="Dubai Flag" style={{ width: '50px', borderRadius: '3px' }} />
                SAZUKI UAE
              </Button>


            </Box>
          </Grid>

        </Grid>
      </Box>

    </>
  );
}

export default Sectwo;
