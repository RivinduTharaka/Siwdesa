import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

// Import icons as images
import ChassisIcon from '../../images/chassis.png';
import VoltmeterIcon from '../../images/voltmeter.png';
import PadIcon from '../../images/diagnostics.png';
import RepairIcon from '../../images/tools.png';

function Service2() {
  const services = [
    { icon: ChassisIcon, title: 'General repair' },
    { icon: VoltmeterIcon, title: 'Electrical services' },
    { icon: PadIcon, title: 'Engine diagnostics' },
    { icon: RepairIcon, title: 'Body repair' },
  ];

  return (
    <Box sx={{ padding: '50px', backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif' }}>
      <Box sx={{ marginBottom: '40px' }}>
       
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Reliable and quality car repair services
        </Typography>
        <Typography sx={{ color: '#555', lineHeight: 1.8, marginBottom: '10px' }}>
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </Typography>
        <Typography sx={{ color: '#555', lineHeight: 1.8 }}>
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                style={{
                  width: '50px',
                  height: '50px',
                  marginBottom: '10px',
                }}
              />
              <Typography variant="h6" sx={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>
                {service.title}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: '24px', color: '#f57c00' }}>
                →
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Service2;
