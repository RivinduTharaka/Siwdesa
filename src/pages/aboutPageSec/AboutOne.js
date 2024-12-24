import React from 'react';
import { Box, Typography, Container, Grid, Button, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import backgroundImage1 from '../../images/Image_9-scaled.jpg';

import image3 from '../../images/ImagesPrime/img1.png';

function Aboutone() {
  return (
    <Box sx={{ backgroundColor: '#1b1b1b', color: '#ffffff' }}>
      {/* Top Section with Background and Overlay */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '80vh',
          backgroundImage: `url(${backgroundImage1})`,
          backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}


      =
          <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: '3.0rem',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            mb: 3,
          }}
        >
          The <span style={{ color: '#ad0011' }}>Best</span> <span style={{ fontStyle: 'italic' }}>Car Repair</span> <br />
          <span style={{ fontWeight: 300,  fontSize: '4.5rem' }}>Center</span> <span style={{ fontWeight: 700 }}>Since 2019</span>
        </Typography>


          {/* Title underline */}
          <Box
            sx={{
              width: '60px',
              height: '3px',
              backgroundColor: '#C8102E',
              margin: '0 auto',
              mt: 1,
            }}
          />
        </Container>
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
