import React from 'react';
import { Box, Typography, Container, Grid, Button, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BackgroundImage from '../../images/sazukihomeimg1.jpg'; // Import your image   

import image3 from '../../images/ImagesPrime/img1.png';

function Aboutone() {
  return (
    <Box sx={{ backgroundColor: '#1b1b1b', color: '#ffffff' }}>
      {/* Top Section with Background and Overlay */}
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
    About Us
      </Typography>
      {/* Downward Arrow */}
      <KeyboardArrowDownIcon
        sx={{
          fontSize: '3rem',
          marginTop: '20px',
        }}
      />
    </Box>

    {/* Main Content Section */}
<Box sx={{ backgroundColor: 'white', py: 5 }}>
  <Container>
    <Grid container spacing={4} alignItems="center">
      {/* Left Side Image */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={image3} // Replace with your image source
          alt="Team and car"
          sx={{
            width: '100%',
            borderRadius: '10px',
          }}
        />
      </Grid>

      {/* Right Side Text Content */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h6"
          sx={{
            color: '#000000',
            mb: 1,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            color: '#222',
          }}
        >
          WE ARE <span style={{ color: '#C8102E' }}>SAZUKI</span>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
          SAZUKI Garage is a renowned name in automotive excellence, specializing in comprehensive vehicle repairs and maintenance. Since our inception, we’ve been committed to bringing top-tier services to every car owner.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
          At SAZUKI, we believe in precision, quality, and trust. From minor tune-ups to extensive bodywork, our expert team ensures that your car runs like new, every time you visit us.
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          Equipped with cutting-edge tools and a passion for perfection, we strive to deliver unmatched automotive solutions. When you choose SAZUKI, you choose excellence and reliability for your vehicle.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box>


    </Box>
  );
}

export default Aboutone;
