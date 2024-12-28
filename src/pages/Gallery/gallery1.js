import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';
import image1 from '../../images/Image_37-scaled.jpg';
import image2 from '../../images/Image_9-scaled.jpg';
import image3 from '../../images/Image_37-scaled.jpg';
import image4 from '../../images/Image_37-scaled.jpg';
import image5 from '../../images/Image_37-scaled.jpg';

function Gallery1() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    let timeoutIds = [];
    images.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleImages((prev) => [...prev, images[index]]);
      }, index * 500);
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [images]);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4f4f9', textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#333' }}>
        Workshop Gallery
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {visibleImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={`Workshop ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  animation: 'fadeIn 1s ease-out',
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Gallery1;
