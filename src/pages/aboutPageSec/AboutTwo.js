import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import iconImage1 from '../../images/Audi.png';
import iconImage2 from '../../images/bnz.png';
import iconImage3 from '../../images/bmw.png';
import iconImage4 from '../../images/VW.png';
import iconImage5 from '../../images/peagout.png';
import iconImage6 from '../../images/volvo.png';
import iconImage7 from '../../images/porshe.png';

function LogoGrid() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d0d0d',
        py: 4,
        
      }}
    >
      <Container
        sx={{
          backgroundColor: '#1b1b1b',
          borderRadius: 2,
          
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Logo 1 */}
          <Grid item>
            <img
              src={iconImage1}
              alt="Audi Logo"
              style={{ width: 170 }}
            />
          </Grid>
          {/* Logo 2 */}
          <Grid item>
            <img
              src={iconImage2}
              alt="BNZ Logo"
              style={{ width: 100 }}
            />
          </Grid>
          {/* Logo 3 */}
          <Grid item>
            <img
              src={iconImage3}
              alt="BMW Logo"
              style={{ width: 170 }}
            />
          </Grid>
          {/* Logo 4 */}
          <Grid item>
            <img
              src={iconImage4}
              alt="VW Logo"
              style={{ width: 130 }}
            />
          </Grid>
          {/* Logo 5 */}
          <Grid item>
            <img
              src={iconImage5}
              alt="Another Logo"
              style={{ width: 150}}
            />
          </Grid>
          <Grid item>
            <img
              src={iconImage6}
              alt="Another Logo"
              style={{ width: 150}}
            />
          </Grid>
          <Grid item>
            <img
              src={iconImage7}
              alt="Another Logo"
              style={{ width: 150}}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LogoGrid;
