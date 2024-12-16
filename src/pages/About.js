import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
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
