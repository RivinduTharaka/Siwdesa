import React from 'react';
import { Box, Typography, Container, Grid, Button, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import backgroundImage1 from '../../images/Image_9-scaled.jpg';

import image3 from '../../images/ImagesPrime/img1.png';

function Aboutone() {
  return (
    <Box sx={{ backgroundColor: '#1b1b1b', color: '#ffffff'}}>
      {/* Top Section with Background and Overlay */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '70vh',
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


          {/* Title */}
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
            About us
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
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side Images */}
          <Grid item xs={12} md={6}>
            <Grid >

              <Grid item xs={12}>
                <Box
                  component="img"
                  src={image3}
                  alt="3D printed car model"
                  sx={{
                    width: '90%',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
                   {/* Right Side Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color: '#C8102E', mb: 1, fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
              Empowering Your Drive, <span style={{ fontStyle: 'italic', fontWeight: '300' }}> One Part</span> {' '}
              <span style={{ fontStyle: 'italic', fontWeight: '300' }}>At A Time</span>
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              At Prime Drive, we specialize in delivering premium spare parts for German vehicles, ensuring every drive feels like the first.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our passion lies in precision, quality, and reliability—values deeply rooted in German engineering.

              From seasoned car enthusiasts to first-time owners, we provide unmatched expertise and top-grade components for brands like BMW, Mercedes-Benz, Audi, and Volkswagen.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              We do everything we can to get your car repaired as quickly as possible. Except for compromising on
              quality. That’s why we at Bosch Car Service only use high-quality spare parts. This way, we can always
              ensure no loss of manufacturer’s warranty coverage for your vehicle. No matter which of our worldwide
              workshops you go to.
              When you choose us, you're not just buying a part; you're investing in performance, longevity, and trust.

            </Typography>
            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: '#C8102E',
                color: '#ffffff',
                fontWeight: 'bold',
                borderRadius: '20px',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#a50c20',
                },
              }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More
            </Button> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Aboutone;
