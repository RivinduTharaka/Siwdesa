import React from 'react';
import { Box, Typography, Breadcrumbs, Link, Container, Grid, TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import idProtectionImage from '../images/Image_37-scaled.jpg'; // Replace with actual image path
import Navbar from '../components/Navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BackgroundImage from '../images/sazukihomeimg1.jpg'; // Import your image


function Contact() {
  return (
    <Box>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          // backgroundImage: `url(${BackgroundImage})`, // Set the background image
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BackgroundImage})`,

          backgroundRepeat: 'no-repeat', // Prevent image repetition
          backgroundSize: 'cover', // Ensure the image covers the entire box
          backgroundPosition: 'center', // Center the image
          color: '#fff', // White text
          height: '60vh', // 40% of the viewport height
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
            fontWeight: ' ',
            marginTop: '60px',
            fontSize: {
              xs: '3rem', // Font size for small screens
              sm: '3rem',   // Font size for medium screens
              md: '4rem', // Font size for larger screens
              lg: '5rem',   // Font size for extra-large screens
            },
          }}
        >

          Contact Us
        </Typography>
        {/* Downward Arrow */}
        <KeyboardArrowDownIcon
          sx={{
            fontSize: '3rem',
            marginTop: '20px',
          }}
        />
      </Box>

      {/* Contact Information and Form Section */}
      <Box sx={{ backgroundColor: '#0f0f0f' }}>
        <Container>
          <Grid container spacing={4} sx={{ py: 4 }}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: '#1c1b1b',
                  color: 'white',
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                  <PhoneIcon sx={{ fontSize: 40, color: '#C8102E', mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Phone</Typography>
                  <Typography variant="body2">+94 766 446 464</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                  <LocationOnIcon sx={{ fontSize: 40, color: '#C8102E', mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Location</Typography>
                  <Typography variant="body2" textAlign="center">
                    211/48, Colombo road Rattanapitiya, Boralesgamuwa, Sri Lanka, 10290
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                  <EmailIcon sx={{ fontSize: 40, color: '#C8102E', mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Email</Typography>
                  <Typography variant="body2">sazukiautoengineering@gmail.com</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
                Get In Touch
              </Typography>
              <Typography variant="body2" sx={{ mb: 4, color: '#aaaaaa' }}>
                In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    variant="outlined"
                    InputProps={{
                      startAdornment: <AccountCircleIcon color="" sx={{ mr: 1 }} />,
                    }}
                    sx={textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Email Address"
                    variant="outlined"
                    InputProps={{
                      startAdornment: <EmailIcon color="" sx={{ mr: 1 }} />,
                    }}
                    sx={textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Phone Number"
                    variant="outlined"
                    InputProps={{
                      startAdornment: <PhoneIcon color="" sx={{ mr: 1 }} />,
                    }}
                    sx={textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Subject"
                    variant="outlined"
                    InputProps={{
                      startAdornment: <EmailIcon color="" sx={{ mr: 1 }} />,
                    }}
                    sx={textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder="Enter your message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C8102E',
                      color: 'white',
                      borderRadius: 2,
                      px: 4,
                      py: 1,
                      '&:hover': {
                        backgroundColor: '#A00C23',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Embedded Google Map Section */}
      <Box sx={{ backgroundColor: '#0f0f0f', pb: 6, pt: 6 }}>
        <Container>

          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137672.5751812057!2d79.92554070905076!3d6.715087558613022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25be4386670d7%3A0x43bfc3daba8a43c7!2sSazuki%20Auto%20Engineering%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1735893344310!5m2!1sen!2slk" 
            width="100%"
            height="450px"
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
            sx={{
              border: 0,
              borderRadius: '8px',
            }}
          />
        </Container>
      </Box>
    </Box>
  );
}

// Custom styling for TextField
const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1c1b1b',
    color: 'white',
    borderRadius: 2,
    '& fieldset': {
      borderColor: '#333333',
    },
    '&:hover fieldset': {
      borderColor: '#C8102E',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#C8102E',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
};

export default Contact;
