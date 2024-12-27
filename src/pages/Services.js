import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import ServicesOne from './services/service1';
import AccidentRepair from './services/accident-repair';
import Service2 from './services/service2';
import Service3 from './services/service3';
import Service4 from './services/service4';
import SecSix from './homePagesec/SecSix';


function Services() {
  const [bgIndex, setBgIndex] = useState(0);

  

  return (
    <>
      <Navbar />
      <Box>
      
        <ServicesOne/>
        <AccidentRepair/>
        <Service2/>
        <Service3/>
        <Service4/>
        <SecSix/>
       
    


       
      </Box>
    </>
  );
}

export default Services;
