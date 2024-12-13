import React from 'react';
import { Box, Typography, Breadcrumbs, Link, Container, Grid, TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import idProtectionImage from '../images/Image_37-scaled.jpg'; // Replace with actual image path
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <Box>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${idProtectionImage})`, // Replace with actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          position: 'relative',
          textAlign: 'center',
          mb: 4,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Breadcrumbs */}
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ color: 'white', fontSize: '0.875rem', mb: 1 }}
          >
            <Link component={NavLink} to="/" color="inherit" underline="hover">
              Home
            </Link>
            <Typography color="inherit">Contact Us</Typography>
          </Breadcrumbs>

          {/* Title */}
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
            Contact Us
          </Typography>

          {/* Divider Line */}
          <Box
            sx={{
              width: '50px',
              height: '2px',
              backgroundColor: '#C8102E',
              mt: 2,
            }}
          />
        </Box>
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
                  <Typography variant="body2">+94 777 201 951</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                  <LocationOnIcon sx={{ fontSize: 40, color: '#C8102E', mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Location</Typography>
                  <Typography variant="body2" textAlign="center">
                    269, high level road, Vijerama, Sri Lanka
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                  <EmailIcon sx={{ fontSize: 40, color: '#C8102E', mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Email</Typography>
                  <Typography variant="body2"></Typography>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126730.07807650274!2d79.82933011962597!3d6.857257752825193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnMjYuMSJOIDc5wrA1NCczMi43IkU!5e0!3m2!1sen!2slk!4v1680916340342!5m2!1sen!2slk"
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
