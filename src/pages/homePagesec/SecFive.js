import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CarIcon from '../../images/car (2).png';
import CarPolishIcon from '../../images/car (5).png';
import ScratchIcon from '../../images/car (6).png';
import SeatIcon from '../../images/car (7).png';

// Service details
const services = [
  { 
    title: 'Exterior wash', 
    icon: CarIcon, 
    description: 'Consectetur adipiscing elit, sed do eiusmod tempo.' 
  },
  { 
    title: 'Safe polishing', 
    icon: CarPolishIcon, 
    description: 'Consectetur adipiscing elit, sed do eiusmod tempo.' 
  },
  { 
    title: 'Quality products', 
    icon: ScratchIcon, 
    description: 'Consectetur adipiscing elit, sed do eiusmod tempo.' 
  },
  { 
    title: 'Interior cleaning', 
    icon: SeatIcon, 
    description: 'Consectetur adipiscing elit, sed do eiusmod tempo.' 
  },
];

function SecFive() {
  return (
    <Box
      sx={{
        py: 5,
        px: 2,
        marginBottom: 10,
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{
              borderLeft: index > 0 ? '1px solid #fff' : 'none', // Add left border to all but the first box
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Display the icon image */}
              <Box sx={{ mb: 2 }}>
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  style={{ width: '60px', height: '60px' }} // Adjust size as needed
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 , color:'red'}}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ maxWidth: 200 }}>
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SecFive;
