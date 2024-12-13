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

      {/* New Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: '#1c1b1b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 6,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: '#ad0011',
            letterSpacing: 2,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.875rem',
          }}
        >
          <span style={{ width: 50, height: 1, backgroundColor: '#ad0011', marginRight: 8 }} />
          Top Notch Solutions
          <span style={{ width: 50, height: 1, backgroundColor: '#ad0011', marginLeft: 8 }} />
        </Typography>

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
          The <span style={{ color: '#ad0011' }}>Best</span> <span style={{ fontStyle: 'italic' }}>Car Service</span> <br />
          <span style={{ fontWeight: 300, fontStyle: 'italic', fontSize: '4.5rem' }}>Company</span> <span style={{ fontWeight: 700 }}>Since 2019</span>
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ad0011',
            color: 'white',
            mt: 3,
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: '20px',
          }}
          onClick={() => navigate('/products')} // Navigate to the products page
        >
          Our Products
        </Button>
      </Box>
    </Box>
  );
}

export default AboutThree;
