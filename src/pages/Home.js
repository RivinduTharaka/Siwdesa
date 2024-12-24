import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';

import backgroundImage1 from '../images/Image_9-scaled.jpg';
import backgroundImage2 from '../images/Image_37-scaled.jpg';

import Navbar from '../components/Navbar';
import Secone from './homePagesec/Secone';
import Sectwo from './homePagesec/Sectwo';
import Secthree from './homePagesec/Secthree';
import Secfour from './homePagesec/Secfour';
import SecFive from './homePagesec/SecFive';
import ContactUsHome from './homePagesec/ContactUsHome';

function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  const pages = [
    {
      backgroundImage: backgroundImage1,
      title: "Drive with Confidence & Repair with Care",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
      buttonText: "Contact Us",
    },
    {
      backgroundImage: backgroundImage2,
      title: "Keep Your Car Running Smoothly & Safely",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Learn More",
    },
  ];

  return (
    <>
      <Navbar />
      <Box>
        {/* First Section - Background Image Carousel */}
        <Secone />
        <Sectwo />
        <Secthree />
        <Secfour />
        <SecFive />
        <ContactUsHome />

      </Box>
    </>
  );
}

export default Home;
