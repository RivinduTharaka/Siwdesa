import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; // Correct import for Navigation
import './project2.css'; // Import custom CSS for Swiper

// Import Images
import AudiBefore1 from '../../images/A1png.png';
import AudiBefore2 from '../../images/A2.png';
import AudiBefore3 from '../../images/A3.png';
import AudiBefore4 from '../../images/A4.png';
import AudiAfter1 from '../../images/A5.png';
import AudiAfter2 from '../../images/A6.png';
import AudiAfter3 from '../../images/A7.png';
import AudiAfter4 from '../../images/A8.png';

function Projects2() {
  const projects = [
    {
      vehicle: { name: 'Audi', model: 'Q7' },
      images: [
        AudiBefore1,
        AudiBefore2,
        AudiBefore3,
        AudiBefore4,
        AudiAfter1,
        AudiAfter2,
        AudiAfter3,
        AudiAfter4,
      ],
    },
    {
      vehicle: { name: 'BMW', model: '316i' },
      images: [
        AudiBefore1,
        AudiBefore2,
        AudiBefore3,
        AudiBefore4,
        AudiAfter1,
        AudiAfter2,
        AudiAfter3,
        AudiAfter4,
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        color: '#fff',
        padding: {
          xs: 2, // Extra-small devices (phones)
          sm: 3, // Small devices (tablets)
          md: 5, // Medium devices (desktops)
          lg: 10, // Large devices
        },
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 4,
            border: '1px solid #fff',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              backgroundColor: '#e00000',
              width: '20%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {project.vehicle.name}
            </Typography>
            <Typography variant="h6">{project.vehicle.model}</Typography>
          </Box>

          {/* Right Side (Swiper) */}
          <Box sx={{ width: '80%', backgroundColor: 'black' }}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={4} // Default for large screens
              breakpoints={{
                320: { slidesPerView: 1 }, // For small phones
                480: { slidesPerView: 2 }, // For larger phones
                768: { slidesPerView: 3 }, // For tablets
                1024: { slidesPerView: 4 }, // For desktops
              }}
              navigation
            >
              {project.images.map((image, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <Box
                    component="img"
                    src={image}
                    alt={`Slide ${imgIndex}`}
                    sx={{
                      width: '100%',
                      height: '300px', // Increased height for better visibility
                      objectFit: 'cover',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Projects2;
