import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import AboutOne from './aboutPageSec/AboutOne';
import AboutTwo from './aboutPageSec/AboutTwo';
import AboutThree from './aboutPageSec/AboutThree';
import AboutFour from './aboutPageSec/AboutFour';
import AboutFive from './aboutPageSec/AboutFive';

function About() {
  const [bgIndex, setBgIndex] = useState(0);

  

  return (
    <>
      <Navbar />
      <Box>
      
        <AboutOne/>
        <AboutFour/>
        <AboutFive/>
    
        <AboutTwo/>
        <AboutThree/>
    


       
      </Box>
    </>
  );
}

export default About;
