import React from 'react';
import { Box, Typography, Container, Grid, Card, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import backgroundImage from '../../images/Image_37-scaled.jpg'; // Replace with your actual background image path

function ContactUsHome() {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          height: '20vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundImage: 'linear-gradient(to right, rgba(23, 10, 10, 1), rgba(23, 10, 10, 0.7) 50%, rgba(255, 0, 0, 0) 95%)',
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
          {/* Title */}
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
            Contact Us
          </Typography>

          {/* Divider Line */}
          <Box
            sx={{
              width: '100px',
              height: '2px',
              backgroundColor: '#C8102E',
              mt: 2,
            }}
          />
        </Box>
      </Box>

      {/* Contact Information and Map Section */}
      <Box sx={{ backgroundColor: '#0f0f0f', color: 'white', pb: 6 }}>
        <Container>
          <Grid container spacing={4}>
            {/* Left side: Contact Cards stacked vertically */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Phone Card */}
                <Card
                  sx={{
                    backgroundColor: '#1c1b1b',
                    color: 'white',
                    p: 2,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 30, color: '#C8102E', mr: 2 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Phone</Typography>
                    <Link href="tel:+94777201951" sx={{ color: 'white', textDecoration: 'none' }}>
                      <Typography variant="body2">0777201951</Typography>
                    </Link>
                  </Box>
                </Card>

                {/* Location Card */}
                <Card
                  sx={{
                    backgroundColor: '#1c1b1b',
                    color: 'white',
                    p: 2,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 30, color: '#C8102E', mr: 2 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Location</Typography>
                    <Typography variant="body2" textAlign="center">
                      269, high level road, Vijerama , Sri Lanka

                    </Typography>
                  </Box>
                </Card>

                {/* Email Card */}
                <Card
                  sx={{
                    backgroundColor: '#1c1b1b',
                    color: 'white',
                    p: 2,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <EmailIcon sx={{ fontSize: 30, color: '#C8102E', mr: 2 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Email</Typography>
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@widoor.com" target="_blank" sx={{ color: 'white', textDecoration: 'none' }}>
                      <Typography variant="body2"></Typography>
                    </Link>
                  </Box>
                </Card>
              </Box>
            </Grid>

            {/* Right side: Google Map */}
            <Grid item xs={12} md={6}>
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126730.07807650274!2d79.82933011962597!3d6.857257752825193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnMjYuMSJOIDc5wrA1NCczMi43IkU!5e0!3m2!1sen!2slk!4v1680916340342!5m2!1sen!2slk"
                width="100%"
                height="300px"
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
                sx={{
                  border: 0,
                  borderRadius: '8px',
                }}
              />

            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default ContactUsHome;
