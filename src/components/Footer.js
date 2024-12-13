import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, YouTube } from '@mui/icons-material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: 'white', pt: 6, pb: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" sx={{ textAlign: { xs: 'center', md: 'left' } }}>

          {/* Newsletter Subscription Section */}
          <Grid item xs={12} md={4} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Mail us to get your idea.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, gap: 1 }}>
              <Link
                href="mailto:info@codeixer.com"
                underline="none"
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    color: '#C8102E',
                  },
                }}
              >
               
              </Link>
              <Typography variant="body1" sx={{ color: '#C8102E', fontWeight: 'bold', fontSize: '1rem' }}>
                Email
              </Typography>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton href="https://www.facebook.com/primedrivelk?mibextid=LQQJ4d" target="_blank" aria-label="Facebook" sx={iconButtonStyle}>
                <Facebook />
              </IconButton>
              {/* <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter" sx={iconButtonStyle}>
                <Twitter />
              </IconButton> */}
              <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube" sx={iconButtonStyle}>
                <YouTube />
              </IconButton>
              {/* <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn" sx={iconButtonStyle}>
                <LinkedIn />
              </IconButton> */}
            </Box>
          </Grid>

          {/* Our Service Section */}
          <Grid item xs={12} md={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Service
            </Typography>
            <Link href="/" underline="none" sx={linkStyle}>Head Lamps</Link>
            <Link href="/" underline="none" sx={linkStyle}>Break Lights</Link>
            <Link href="/" underline="none" sx={linkStyle}>Bumpers</Link>
            <Link href="/" underline="none" sx={linkStyle}>Interior Parts</Link>
            {/* <Link href="/" underline="none" sx={linkStyle}></Link> */}
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" underline="none" sx={linkStyle}>Terms Of Service</Link>
            <Link href="/" underline="none" sx={linkStyle}>Latest News</Link>
            <Link href="/" underline="none" sx={linkStyle}>General Inquiries</Link>
            <Link href="/" underline="none" sx={linkStyle}>Case Studies</Link>
            <Link href="/contact" underline="none" sx={linkStyle}>Contact Us</Link>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>0777201951
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>info@codeixer.com</Typography>
            <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)', my: 2 }}></Box>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              269 high level road
              ,<br />
              Vijerama, Sri Lanka
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Links and Copyright */}
        <Box
          sx={{
            borderTop: '1px solid #444',
            mt: 4,
            pt: 2,
            textAlign: 'center',
            color: '#bbb',
            fontSize: '0.875rem',
          }}
        >
          <Typography variant="body2" color="white" gutterBottom>
            © 2024 Codeixer | All Rights Reserved
          </Typography>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 1 }}>
            <Link href="/" underline="none" sx={bottomLinkStyle}>Terms & Conditions</Link>
            <Link href="/" underline="none" sx={bottomLinkStyle}>Privacy Policy</Link>
            <Link href="/" underline="none" sx={bottomLinkStyle}>Contact Us</Link>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
}

// Styles for the links and social media icons
const linkStyle = {
  display: 'block',
  color: '#bbb',
  mb: 1,
  fontSize: '1rem',
  '&:hover': {
    color: 'white',
    textDecoration: 'underline',
  },
};

const iconButtonStyle = {
  color: '#bbb',
  '&:hover': {
    color: 'white',
  },
};

const bottomLinkStyle = {
  color: '#bbb',
  fontSize: '0.875rem',
  '&:hover': {
    color: 'white',
  },
};

export default Footer;
