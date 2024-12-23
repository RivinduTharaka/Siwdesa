import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import bg from "../../images/sazukihomeimg2.jpg"; // Update with your actual image path

// Animation keyframes for the 3D pop-out effect
const popOutLoop = keyframes`
  
  50% {
    transform: perspective(1000px) translateY(0) scale(1.1); /* Pop out and larger */
    opacity: 1;
  }
  100% {
    transform: perspective(1000px) translateY(0) scale(1); /* Settle back */
    opacity: 1;
  }
`;

// Animation keyframes for the text fade up
const fadeUp = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Wrapper for the animated background
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative', // Relative for overlay positioning
  display: 'grid',
  height: '95vh',
  overflow: 'hidden', // Prevent animation overflow
}));

// Animated background styling
const AnimatedBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  animation: `${popOutLoop} 5s infinite ease-in-out`, // 3D loop animation
  zIndex: 1, // Ensure it's behind the content
}));

// Static text box styling
const TextBox = styled(Box)(({ theme }) => ({
  gridColumn: '1 / -1', // Make it span full width
  animation: `${fadeUp} 1.5s ease-out 0.5s`, // Slight delay for the text
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: theme.spacing(7.5),
  zIndex: 2,
  padding: theme.spacing(4), // Default padding
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(1.5),
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
  },
}));

const TopicText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3, // Ensure it's above the background and other content
  fontSize: '10rem',
  fontWeight: 900,
  color: 'transparent', // Make the text color transparent
  WebkitTextStroke: '2px white', // Define the white border of the text
  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)', // Add subtle shadow for the border
  [theme.breakpoints.down('sm')]: {
    fontSize: '3.5rem', // Smaller font size for mobile devices
    WebkitTextStroke: '1px white', // Adjust stroke size for smaller text
  },
}));


function Secone() {
  const theme = useTheme();

  return (
    <HeroSection>
      {/* Animated Background */}
      <AnimatedBackground />
      <TopicText>
        SAZUKI
      </TopicText>
      {/* Static Text Content */}
      <TextBox>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            lineHeight: '1.3', 
            color: 'white', // Pure white color
            fontWeight: 500, // Make it bold
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            maxWidth: '100%',
            marginTop: 40,
            padding: {
              xs: '2px', // for extra small devices
              sm: '30px', // for small devices
              md: '40px', // for medium devices
              lg: '50px', // for large devices
              xl: '60px'  // for extra large devices
            },
            fontSize: { 
              xs: '2.5rem', // for extra small devices
              sm: '3rem', // for small devices
              md: '4rem', // for medium devices
              lg: '3rem', // for large devices
              xl: '4.5rem'  // for extra large devices
            }
          }}
        >
          Full Range of <br/> Car Care  Detailing
        </Typography>
      </TextBox>
    </HeroSection>
  );
}

export default Secone;
