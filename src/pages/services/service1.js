import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import AccidentRepairContent1 from './accident-repair'
import SparePartsContent from './spareparts';



function Service1() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
        //   backgroundColor: '#000',
          color: '#fff',
          padding: '20px',
          position: 'relative',
          overflow: 'hidden',
          height: '200px',
          marginTop: '80px',
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            height: '100%',
            textAlign: 'center', // Center-align for smaller screens
          }}
        >
          {/* Left Button (Accident Repair) */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'red',
                color: '#fff',
                fontWeight: 'bold',
                width: '100%',
                height: '100%',
                fontSize: '2.2rem',
                textAlign: 'center',
              }}
              onClick={() => setSelectedComponent('accidentRepair')}
            >
              ACCIDENT REPAIR
            </Button>
          </Grid>

          {/* Red Angled Divider */}
          <Grid
            item
            xs={12}
            md={1}
            sx={{
              position: 'relative',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Box
              sx={{
                width: '10px',
                backgroundColor: 'black',
                transform: 'skew(-20deg)',
                height: '420%',
                position: 'absolute',
                top: '-100%',
                left: '50%',
              }}
            />
          </Grid>

          {/* Right Button (Spare Parts) */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'red',
                color: '#fff',
                fontWeight: 'bold',
                width: '100%',
                height: '100%',
                fontSize: '2.2rem',
                textAlign: 'center',
              }}
              onClick={() => setSelectedComponent('spareParts')}
            >
              SPARE PARTS
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Dynamic Content Section */}
      <Box sx={{ padding: '20px' }}>
        {selectedComponent === 'accidentRepair' && <AccidentRepairContent1 />}
        {selectedComponent === 'spareParts' && <SparePartsContent />}
        {!selectedComponent && (
          <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px' }}>
            Please select a service to view more details.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Service1;
