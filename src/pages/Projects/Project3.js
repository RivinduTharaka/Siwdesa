import React from 'react';
import { Box, Typography } from '@mui/material';

function Project3() {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        margin: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 2,
          color: '#e00000', // Red color for title
        }}
      >
        Excellence in Vehicle Transformation
      </Typography>

      <Box
        sx={{
          backgroundColor: '#000', // Black background for the content box
          padding: 3,
          borderRadius: 2,
          color: '#fff', // White text
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            marginBottom: 2,
            color: '#ffa500', // Orange text for emphasis
          }}
        >
          Our commitment to excellence ensures that every vehicle we work on receives the highest level of care and expertise. From small scratches to extensive body repairs, we take pride in our ability to restore vehicles to their original condition.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: 'white', // Blue for supporting text
          }}
        >
          "Our team of professionals delivers top-notch craftsmanship, ensuring that your vehicle looks as good as new."
        </Typography>
      </Box>
    </Box>
  );
}

export default Project3;
