import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import BackgroundImage from '../../images/sazukihomeimg1.jpg'; // Import your image
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import image1 from '../../images/Image_37-scaled.jpg';
import image2 from '../../images/Image_37-scaled.jpg';
import image3 from '../../images/Image_37-scaled.jpg';
import image4 from '../../images/Image_37-scaled.jpg';
import image5 from '../../images/Image_37-scaled.jpg';
import image6 from '../../images/Image_37-scaled.jpg';
import image7 from '../../images/Image_37-scaled.jpg';

function Project1() {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat', // Prevent image repetition
          backgroundSize: 'cover', // Ensure the image covers the entire box
          backgroundPosition: 'center', // Center the image
          color: '#fff', // White text
          height: '60vh', // 60% of the viewport height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Main Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: '',
            marginTop: '60px',
            fontSize: {
              xs: '3rem', // Font size for small screens
              sm: '3rem',   // Font size for medium screens
              md: '4rem', // Font size for larger screens
              lg: '5rem',   // Font size for extra-large screens
            },
          }}
        >
          Workspaces
        </Typography>

        {/* Downward Arrow */}
        <KeyboardArrowDownIcon
          sx={{
            fontSize: '3rem',
            marginTop: '20px',
          }}
        />
      </Box>

      <Box sx={{ padding: 3, marginTop: 6 }}>
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
    </>
  );
}

export default Project1;
