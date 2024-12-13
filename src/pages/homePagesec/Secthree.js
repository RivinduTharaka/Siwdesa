import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import iconImage1 from '../../images/bmw.png';
import iconImage2 from '../../images/bnz.png';
import iconImage3 from '../../images/Audi.png';
import iconImage4 from '../../images/VW.png';
import iconImage5 from '../../images/peagout.png';
import iconImage6 from '../../images/volvo.png';
import iconImage7 from '../../images/porshe.png';

function Secthree() {
  const navigate = useNavigate();

  const handleViewProducts = (brand) => {
    navigate(`/products/${brand}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#0d0d0d',
        color: 'white',
        py: 8,
        px: { xs: 4, md: '5%' },
        textAlign: 'center',
      }}
    >
      {/* Section Header */}
      <Typography variant="h6" sx={{ color: '#C8102E', mb: 1, fontWeight: 'bold' }}>
        <span
          style={{
            width: '40px',
            height: '2px',
            backgroundColor: '#C8102E',
            display: 'inline-block',
            marginRight: '8px',
          }}
        ></span>
       Our Expertise 
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', mb: 6, fontSize: { xs: '1.8rem', md: '2.8rem' } }}
      >
        Quality  <span style={{ fontStyle: 'italic', fontWeight: '300' }}> Spare Parts</span>
      </Typography>

      {/* Service Cards */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 10 }}>
        {/* Card for each brand */}
        {[
          {
            brand: 'BMW',
            image: iconImage1,
            description: 'Explore a wide range of premium spare parts tailored for BMW vehicles.',
            width: 300,
          },
          {
            brand: 'Mercedes',
            image: iconImage2,
            description: 'Discover genuine spare parts designed to maintain the luxury of Mercedes-Benz.',
            width: 190,
          },
          {
            brand: 'Audi',
            image: iconImage3,
            description: 'High-quality spare parts for Audi vehicles, enhancing performance and durability.',
            width: 280,
          },
          {
            brand: 'Volkswagen',
            image: iconImage4,
            description: 'Reliable Volkswagen spare parts for every model, ensuring safety and efficiency.',
            width: 220,
          },
          {
            brand: 'Peugeot',
            image: iconImage5,
            description: 'Original Peugeot parts to keep your vehicle performing at its best.',
            width: 300,
          },
          {
            brand: 'Volvo',
            image: iconImage6,
            description: 'Durable and reliable parts for Volvo, ensuring safety and performance.',
            width: 240,
          },
          {
            brand: 'Porsche',
            image: iconImage7,
            description: 'Premium Porsche parts crafted for performance and luxury.',
            width: 250,
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              onClick={() => handleViewProducts(item.brand)}
              sx={{
                backgroundColor: '#1b1b1b',
                padding: 4,
                borderRadius: 2,
                textAlign: 'left',
                position: 'relative',
                boxShadow: '0px 4px 15px rgba(0,0,0,0.4)',
                width: { xs: '90%', sm: '80%', md: '80%' },
                height: 180,
                margin: '0 auto',
                marginBottom: 5,
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  backgroundColor: '#C8102E', // Change background color to red on hover
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 20px rgba(0,0,0,0.6)',
                },
                '&:hover .view-products-text': {
                  color: 'black', // Change text color to black on hover
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 50,
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box component="img" src={item.image} alt={`${item.brand} Icon`} sx={{ width: `${item.width}px` }} />
              </Box>
              <Box sx={{ mt: 5 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', color: 'white', mb: 1, fontSize: { xs: '1rem', md: '1.8rem' } }}
                >
                  {item.brand}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
                  {item.description}
                </Typography>
                <Button
                  variant="text"
                  className="view-products-text"
                  sx={{
                    color: '#C8102E',
                    fontWeight: 'bold',
                    fontSize: 16,
                    transition: 'color 0.3s ease',
                  }}
                >
                  View Products <ArrowForwardIosIcon sx={{ fontSize: 'medium' }} />
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Secthree;
