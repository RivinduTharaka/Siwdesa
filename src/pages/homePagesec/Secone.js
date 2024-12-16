import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import bg from "../../images/sazukihomeimg.jpg"

// Animation keyframes
const fadeUp = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Custom styling for the hero section
const HeroSection = styled(Box)({
  display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
  height: '95vh',
  color: 'white',
  backgroundImage: `url(${bg})`, // Update with your actual image path
  backgroundSize: 'cover'
});

// Custom styling for the text box
const TextBox = styled(Box)({
  gridColumn: '1 / 20',
  padding: '100px',
  animation: `${fadeUp} 1s ease-out`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: 60,

});

function Secone() {
  return (
    <HeroSection>
        
      <TextBox>
        <Typography variant="h2" component="h1" gutterBottom sx={{ lineHeight: '1.3', maxWidth: '100%', fontSize:80 }}>
          Full Range of <br/> Car Care <br/> Detailing
        </Typography>
      </TextBox>
      {/* Additional grid columns can be used for other content or remain empty */}
      <Box />
      <Box />
    </HeroSection>
  );
}

export default Secone;
