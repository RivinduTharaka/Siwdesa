import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Gallery3() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 3, md: 5 },
        backgroundColor: 'white',
        color: 'black',
        minHeight: '80vh',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          mb: 3,
          fontSize: { xs: '2rem', md: '3rem' },
          lineHeight: 1.2,
          color: 'red',
        }}
      >
        24/7 Reliable Vehicle Carrier Service
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.6,
          maxWidth: { xs: '100%', md: '70%' },
          color: 'black',
        }}
      >
        Our vehicle carrier service provides fast and secure transportation for your vehicle, 
        available 24 hours a day, 7 days a week. Whether you're stranded on the road or need to 
        relocate your car, our skilled team ensures the process is safe, efficient, and stress-free.
        We value your time and safety, offering guaranteed customer satisfaction at affordable rates.
      </Typography>

      {/* Value Statement */}
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.6,
          maxWidth: { xs: '100%', md: '70%' },
          color: 'blue',
        }}
      >
        <b>How We Serve:</b> From accident recovery to long-distance transport, our team is equipped 
        to handle any situation with care and professionalism.
        <br />
        <b>Benefits to Customers:</b> Save time and avoid stress with our reliable service. Enjoy peace 
        of mind knowing your vehicle is in safe hands.
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        size="large"
        component="a"
        href="tel:+94766446464"
        sx={{
          backgroundColor: 'orange',
          color: 'white',
          '&:hover': { backgroundColor: 'red' },
          paddingX: 4,
          textDecoration: 'none',
        }}
      >
        Call Us: +94 766 446 464
      </Button>
    </Box>
  );
}

export default Gallery3;
