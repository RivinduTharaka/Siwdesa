import React from 'react';
import img1 from "../../images/Image_37-scaled.jpg"; // Update with your actual image path
import img2 from "../../images/homeimge.jpg"; // Update with your actual image path
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 

function Secthree() {
  return (
    <Box
    sx={{
      background: 'linear-gradient(to bottom, #0d0d0d 70%, #ffffff 50%)', // Gradient background
      color: 'white',
      py: 8,
      px: { xs: 4, md: '10%' },
      textAlign: 'center',
      // mb: 20,
    }}
  >
      {/* Section Header */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          fontSize: { xs: '1.8rem', md: '2.8rem' },
        }}
      >
        WHAT <span style={{ color: '#C8102E' }}>WE DO</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.7)',
          mb: 6,
        }}
      >
        Premier accident repairs since 2013. Skilled technicians, genuine spares, swift solutions.
      </Typography>

      {/* Cards Section */}
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              backgroundColor: '#1b1b1b',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0px 4px 15px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: '0px 6px 20px rgba(0,0,0,0.6)',
                transform: 'scale(1.02)',
              },
            }}
          >
            {/* Image Section */}
            <Box
              component="img"
              src={img1} // Replace with your image path
              alt="Accident Repair"
              sx={{
                width: { xs: '100%', md: '50%' },
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
            {/* Content Section */}
            <Box
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'left' },
                width: { md: '50%' },
                backgroundColor:"red"
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
              >
                ACCIDENT REPAIR
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4 }}
              >
                Swift and efficient accident repair services to get you back on the road in no time.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'red',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'A60D24',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              backgroundColor: '#1b1b1b',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0px 4px 15px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: '0px 6px 20px rgba(0,0,0,0.6)',
                transform: 'scale(1.02)',
              },
            }}
          >
            {/* Image Section */}
            <Box
              component="img"
              src={img2} // Replace with your image path
              alt="Spare Parts"
              sx={{
                width: { xs: '100%', md: '50%' },
                height: 306,
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
            {/* Content Section */}
            <Box
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'left' },
                width: { md: '50%' },
                backgroundColor:'red'
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
              >
                SPARE PARTS
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4}}
              >
                Genuine spare parts to maintain your vehicle's quality and performance.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'red',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'red',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Secthree;
