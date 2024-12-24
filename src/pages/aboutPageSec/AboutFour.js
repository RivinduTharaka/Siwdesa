import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Vision Icon
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Mission Icon
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Values Icon

const features = [
  {
    title: 'VISION',
    icon: <VisibilityIcon sx={{ fontSize: 40, color: '#C8102E' }} />,
    description: "To be Sri Lanka’s no 1, trusted auto repair service provider.",
  },
  {
    title: 'MISSION',
    icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#C8102E' }} />,
    description: "To provide affordable, reliable, and trustworthy auto repair services and to put you back on the road in no time.",
  },
  {
    title: 'VALUES',
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#C8102E' }} />,
    description: "Integrity, Quality of service, Transparency, Time efficacy",
  },
];

function AboutFour() {
  return (
    <Box
      sx={{
        backgroundColor: '#F9F9F9',
        py: 5,
        px: 3,
        textAlign: 'center',
      }}
    >
      <Grid container spacing={5}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 4,
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                },
                
              }}
            >
              {/* Icon */}
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#000',
                  mb: 2,
                }}
              >
                {feature.title}
              </Typography>
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: '#555',
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AboutFour;
