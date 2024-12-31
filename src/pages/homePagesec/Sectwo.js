import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import bg from "../../images/image3.jpg"; // Update with your actual image path
import { Link } from 'react-router-dom'; 

function Sectwo() {
  return (
    <Box sx={{ padding: '60px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' ,  '@media (max-width: 600px)': {
      marginTop: '-50px', // Move slightly up on mobile
    },}}>
      <Grid container spacing={4} sx={{ width: '1200px', alignItems: 'center' }}>

      <Grid item xs={12} md={6}>
          <Box>
            <img src={bg} alt="Accident Repair" style={{ width: '100%' }} />
          </Box>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ backgroundColor: '#e00000', color: '#fff', display: 'inline-block', padding: '5px 10px', borderRadius: '3px', marginBottom: '10px', fontSize: '14px' }}>
              Since <Typography component="span" fontWeight="bold">2013</Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              We Are Accident Repair Experts
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', lineHeight: 1.4, marginBottom: '20px' }}>
              WE ARE <span style={{ color: '#e00000' }}>BEST</span> AT WHAT WE DO
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px', lineHeight: 1.6 }}>
              "We Put You Back on the Road in No Time." By swiftly executing necessary repairs, we live up to our commitment and have earned our reputation as the best in the business.
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#e00000', ':hover': { backgroundColor: '#b00000' } }}
              component={Link} // Use Link component
              to="/about" // Route to the About Us page
            >
              LEARN MORE
            </Button>
          </Box>
        </Grid>
       
      </Grid>
    </Box>
  );
}

export default Sectwo;
