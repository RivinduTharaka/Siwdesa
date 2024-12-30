import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import prgOne from './Projects/Project1';



function Gallery() {
  const [bgIndex, setBgIndex] = useState(0);

  

  return (
    <>
      <Navbar />
      <Box>
      
        <prgOne/>
      
      </Box>
    </>
  );
}

export default Gallery;
