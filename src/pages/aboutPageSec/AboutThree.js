import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import CountUp from 'react-countup';
import carIcon from '../../images/electric-car.png'; // Replace with actual paths to icons
import yearsIcon from '../../images/calendar.png';
import projectsIcon from '../../images/closure.png';
import locationIcon from '../../images/location.png';

function AboutThree() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <Box
      sx={{
        backgroundColor: '#1c1b1b',
        color: 'white',
        textAlign: 'center',
        backgroundImage: 'url("/path/to/backgroundImage.png")', // Replace with actual background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 8,
      }}
    >
      <Container
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          py: 4,
          px: 5,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Counter 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2 }}>
              <img src={carIcon} alt="Happy Clients Icon" style={{ width: 60, height: 60 }} />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', color: '#ad0011' }}>
              <CountUp end={100} duration={3} suffix="+" />
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', mt: 1 }}>
              Happy Clients
            </Typography>
          </Grid>

          {/* Counter 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2 }}>
              <img src={yearsIcon} alt="Years Icon" style={{ width: 60, height: 60 }} />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', color: '#ad0011' }}>
              <CountUp end={5} duration={3} suffix="+" />
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', mt: 1 }}>
              Years
            </Typography>
          </Grid>

          {/* Counter 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2 }}>
              <img src={projectsIcon} alt="Projects Icon" style={{ width: 60, height: 60 }} />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', color: '#ad0011' }}>
              <CountUp end={200} duration={3} suffix="+" />
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', mt: 1 }}>
              Projects
            </Typography>
          </Grid>

          {/* Counter 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2 }}>
              <img src={locationIcon} alt="Locations Icon" style={{ width: 60, height: 60 }} />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', color: '#ad0011' }}>
              <CountUp end={10} duration={3} suffix="+" />
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', mt: 1 }}>
              Vehicle Brands
            </Typography>
          </Grid>
        </Grid>
      </Container>

    
    </Box>
  );
}

export default AboutThree;
