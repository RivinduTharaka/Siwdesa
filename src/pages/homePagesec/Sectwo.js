import React from 'react';
import { Typography, Box, Grid, useMediaQuery } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BuildIcon from '@mui/icons-material/Build';
import { useTheme } from '@mui/material/styles';
import image1 from '../../images/Image_9-scaled.jpg';
import image2 from '../../images/synchronized-movement-production-line-captured-dynamic-red-grey-shades-reflecting-coordinated-factory-.jpg';
import image3 from '../../images/red-black-background-with-pattern-circles-words-red.jpg';

function Sectwo() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: 6,
        px: { xs: 4, md: '5%' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
      }}
    >
      {/* Images Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
          gridTemplateRows: { xs: 'repeat(2, 1fr)', md: '1fr 1fr' },
          gap: 2,
          maxWidth: { xs: '100%', md: '50%' },
          mr: { md: 5 },
        }}
      >
        {/* Image 1 */}
        <Box
          component="img"
          src={image1}
          alt="Mechanic working"
          sx={{
            borderRadius: 2,
            width: '100%',
            height: { xs: 'auto', md: '100%' },
            objectFit: 'cover',
            gridColumn: { md: '1 / 2' },
            gridRow: { md: '1 / 3' },
          }}
        />
        {/* Image 2 */}
        <Box
          component="img"
          src={image2}
          alt="Car engine repair"
          sx={{
            borderRadius: 2,
            width: '100%',
            height: { xs: 'auto', md: '100%' },
            objectFit: 'cover',
            gridColumn: { md: '2 / 3' },
            gridRow: { md: '1 / 2' },
          }}
        />
        {/* Image 3 - only displayed in desktop view */}
        {!isMobileView && (
          <Box
            component="img"
            src={image3}
            alt="Mechanic in workshop"
            sx={{
              borderRadius: 2,
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              objectFit: 'cover',
              gridColumn: { md: '2 / 3' },
              gridRow: { md: '2 / 3' },
            }}
          />
        )}
      </Box>

      {/* Text Content Section */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          mt: { xs: 6, md: 0 },
          pl: { md: 4 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            lineHeight: 1.2,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            fontSize: { xs: '1.8rem', md: '2.8rem' },
          }}
        >
          <span>
            Restoring Your Vehicle{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>, One Part at a Time</span>
          </span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: { xs: '100%', md: '80%' },
          }}
        >
          Providing top-notch spare parts to keep your journey smooth and your vehicle in peak condition. Our commitment is your vehicle's performance.
        </Typography>

        <Grid container spacing={4} justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#C8102E',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <BuildIcon fontSize="large" />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', ml: 2 }}>
                Modern Workshop
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mt: 1,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Equipped with advanced diagnostic tools and genuine spare parts to meet your vehicle’s needs. From repairs to upgrades, we’ve got you covered.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#C8102E',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <AccessTimeIcon fontSize="large" />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', ml: 2 }}>
                Continues Support
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mt: 1,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Always here when you need us. Our experts are available around the clock to assist with inquiries, orders, or troubleshooting.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Sectwo;
