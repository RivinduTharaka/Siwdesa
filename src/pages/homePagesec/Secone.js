import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled, keyframes, width } from '@mui/system';
import bg from "../../images/sazukihomeimg1.jpg"; // Update with your actual image path

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
  // height: '95vh',
  overflow: 'hidden', // Prevent animation overflow
}));

// Animated background styling
const AnimatedBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0, // Starting point for positioning
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  animation: `${popOutLoop} 5s infinite ease-in-out`, // 3D loop animation
  zIndex: 1, // Ensure it's behind the content
  [theme.breakpoints.up('lg')]: {
    height: '95vh', // Full height for large devices

  },
  [theme.breakpoints.between('md', 'lg')]: {
    height: '85vh', // Slightly reduced for medium devices
  },
  [theme.breakpoints.down('md')]: {
    height: '70vh', // Smaller height for tablets
  },
  [theme.breakpoints.down('sm')]: {
    height: '35vh', // Let it display the full natural size of the image on small devices
    backgroundRepeat: 'no-repeat', // Avoid tiling
    marginTop: '50px', // Push image down for small devices
  },
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


const letterAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const LaptopText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: 500,
  textAlign: 'center',
  marginTop:"-40px",
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  display: 'none', // Default hidden
  overflow: 'hidden', // Prevent text overflow during animation
  [theme.breakpoints.up('md', 'lg')]: {
    display: 'block', // Only visible for laptops
    fontSize: '3rem',
  },
  '& span': {
    display: 'inline-block',
    opacity: 0, // Start invisible
    animation: `${letterAnimation} 0.5s forwards`, // Animate opacity and position
  },
  '& span:nth-of-type(1)': { animationDelay: '0.1s' },
  '& span:nth-of-type(2)': { animationDelay: '0.2s' },
  '& span:nth-of-type(3)': { animationDelay: '0.3s' },
  '& span:nth-of-type(4)': { animationDelay: '0.4s' },
  '& span:nth-of-type(5)': { animationDelay: '0.5s' },
  '& span:nth-of-type(6)': { animationDelay: '0.6s' },
  '& span:nth-of-type(7)': { animationDelay: '0.7s' },
  '& span:nth-of-type(8)': { animationDelay: '0.8s' },
  '& span:nth-of-type(9)': { animationDelay: '0.9s' },
  '& span:nth-of-type(10)': { animationDelay: '1s' },
  '& span:nth-of-type(11)': { animationDelay: '1.1s' },
  '& span:nth-of-type(12)': { animationDelay: '1.2s' },
  '& span:nth-of-type(13)': { animationDelay: '1.3s' },
  '& span:nth-of-type(14)': { animationDelay: '1.4s' },
  '& span:nth-of-type(15)': { animationDelay: '1.5s' },
  '& span:nth-of-type(16)': { animationDelay: '1.6s' },
  '& span:nth-of-type(17)': { animationDelay: '1.7s' },
  '& span:nth-of-type(18)': { animationDelay: '1.8s' },
  '& span:nth-of-type(19)': { animationDelay: '1.9s' },
  '& span:nth-of-type(20)': { animationDelay: '2s' },
  '& span:nth-of-type(21)': { animationDelay: '2.1s' },
  '& span:nth-of-type(22)': { animationDelay: '2.2s' },
  '& span:nth-of-type(23)': { animationDelay: '2.3s' },
  '& span:nth-of-type(24)': { animationDelay: '2.4s' },
  '& span:nth-of-type(25)': { animationDelay: '2.5s' },
  '& span:nth-of-type(26)': { animationDelay: '2.6s' },
  '& span:nth-of-type(27)': { animationDelay: '2.7s' },
  '& span:nth-of-type(28)': { animationDelay: '2.8s' },
  '& span:nth-of-type(29)': { animationDelay: '2.9s' },
  '& span:nth-of-type(30)': { animationDelay: '3s' },
  '& span:nth-of-type(31)': { animationDelay: '3.1s' },
  '& span:nth-of-type(32)': { animationDelay: '3.2s' },

}));



function Secone() {
  const theme = useTheme();

  return (
    <HeroSection>
      {/* Animated Background */}
      <AnimatedBackground />

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
        </Typography>
        <LaptopText>
          {'Full Range of Car Care Detailing'.split('').map((char, index) => (
            <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </LaptopText>

      </TextBox>


    </HeroSection>
  );
}

export default Secone;
