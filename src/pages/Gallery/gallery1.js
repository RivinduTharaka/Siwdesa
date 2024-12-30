import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import image1 from '../../images/Image_37-scaled.jpg';
import image2 from '../../images/Image_37-scaled.jpg';
import image3 from '../../images/Image_37-scaled.jpg';
import image4 from '../../images/Image_37-scaled.jpg';
import image5 from '../../images/Image_37-scaled.jpg';
import image6 from '../../images/Image_37-scaled.jpg';
import image7 from '../../images/Image_37-scaled.jpg';

function Gallery1() {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <Box sx={{ padding: 3, marginTop: 6 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontSize: '3.0rem',
          color: 'white',
          textAlign: 'center',
          lineHeight: 1.2,
          mb: 5,
          backgroundColor: 'black',
          padding: 4,
        }}
      >
        Workshop Premises
      </Typography>
      <Box
        sx={{
          paddingX: { xs: 2, sm: 4, md: 5, lg: 10 }, // Responsive horizontal padding

        }}
      >
        <Grid container spacing={2}>
          {images.map((src, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                component="img"
                src={src}
                alt={`Gallery item ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1,
                  boxShadow: 3,
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)', // Slight zoom on hover
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)', // Elevated shadow on hover
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
  );
}

export default Gallery1;
