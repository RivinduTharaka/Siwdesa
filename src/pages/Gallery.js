import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import GalleryOne from './Gallery/gallery1';
import GalleryTwo from './Gallery/gallery2';
import GalleryThree from './Gallery/gallery3';


function Gallery() {
  const [bgIndex, setBgIndex] = useState(0);

  

  return (
    <>
      <Navbar />
      <Box>
      
        <GalleryOne/>
   
        <GalleryTwo/>
        <GalleryThree/>
     
    


       
      </Box>
    </>
  );
}

export default Gallery;
