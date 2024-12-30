import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import One12 from './Projects/Project1';
import One1 from './Projects/Project2';


function Projects() {
  const [bgIndex, setBgIndex] = useState(0);

  

  return (
    <>
      <Navbar />
      <Box>
      <One12/>
      
      <One1/>
      
     
    


       
      </Box>
    </>
  );
}

export default Projects;
