import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import bg from "../../images/sazukihomeimg.jpg"; // Update with your actual image path

// Animation keyframes
const fadeUp = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Custom styling for the hero section
const HeroSection = styled(Box)(({ theme }) => ({
  display: 'grid',
  height: '95vh',
  color: 'white',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Center the background image
}));

// Custom styling for the text box
const TextBox = styled(Box)(({ theme }) => ({
  gridColumn: '1 / -1', // Make it span full width
  animation: `${fadeUp} 1s ease-out`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: theme.spacing(7.5),
  padding: theme.spacing(2), // Default padding
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(1.5),
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
  },
}));

function Secone() {
  const theme = useTheme();

  return (
    <HeroSection>
      <TextBox>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            lineHeight: '1.3', 
            maxWidth: '100%',
            marginTop:15,
            fontSize: { 
              xs: '2.5rem', // for extra small devices
              sm: '3rem', // for small devices
              md: '4rem', // for medium devices
              lg: '5rem', // for large devices
              xl: '6rem'  // for extra large devices
            }
          }}
        >
          Full Range of <br/> Car Care <br/> Detailing
        </Typography>
      </TextBox>
      <Box />
      <Box />
    </HeroSection>
  );
}

export default Secone;
