import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BuildIcon from '@mui/icons-material/Build';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import backgroundImage1 from '../images/Image_9-scaled.jpg';
import backgroundImage2 from '../images/Image_37-scaled.jpg';
import image1 from '../images/Image_9-scaled.jpg';
import image2 from '../images/Image_9-scaled.jpg';
// import image3 from '../images/img1234.png';
// import iconImage1 from '../images/bmw.png';
// import iconImage2 from '../images/bnz.png';
// import iconImage3 from '../images/Audi.png';
// import iconImage4 from '../images/VW.png';
import Navbar from '../components/Navbar';
// import Secone from './AboutPagesec/Secone';
// import Sectwo from './AboutPagesec/Sectwo';
// import Secthree from './AboutPagesec/Secthree';
// import Aboutone  from  './aboutPageSec/Aboutone'
import AboutOne from './aboutPageSec/AboutOne';
import AboutTwo from './aboutPageSec/AboutTwo';
import AboutThree from './aboutPageSec/AboutThree';

function About() {
  const [bgIndex, setBgIndex] = useState(0);

  

  return (
    <>
      <Navbar />
      <Box>
      
        <AboutOne/>
        <AboutTwo/>
        <AboutThree/>



       
      </Box>
    </>
  );
}

export default About;
