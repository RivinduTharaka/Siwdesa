import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './project2.css'; // Custom CSS for Swiper

// Import Images
import SuzukiBefore1 from '../../images/SAZUKI/3.jpg';
import SuzukiBefore2 from '../../images/SAZUKI/4.jpg';
import SuzukiBefore3 from '../../images/SAZUKI/2.jpg';
import SuzukiBefore4 from '../../images/SAZUKI/1.jpg';

import EveryBefore1 from '../../images/SAZUKI/7.jpg';
import EveryBefore2 from '../../images/SAZUKI/8.jpg';
import EveryBefore3 from '../../images/SAZUKI/5.jpg';
import EveryBefore4 from '../../images/SAZUKI/6.jpg';

import AquaBefore1 from '../../images/SAZUKI/13.jpg';
import AquaBefore2 from '../../images/SAZUKI/12.jpg';
import AquaBefore3 from '../../images/SAZUKI/11.jpg';
import AquaBefore4 from '../../images/SAZUKI/10.jpg';

import BMWBefore1 from '../../images/SAZUKI/53.jpg';
import BMWBefore2 from '../../images/SAZUKI/52.jpg';
import BMWBefore3 from '../../images/SAZUKI/50.jpg';
import BMWBefore4 from '../../images/SAZUKI/51.jpg';

function Projects2() {
    const projects = [
        {
            vehicle: { name: 'BMW', model: '520d' },
            images: [
                BMWBefore1,
                BMWBefore2,
                BMWBefore3,
                BMWBefore4,
            ],
        },
        {
            vehicle: { name: 'Suzuki', model: 'Spacia' },
            images: [
                SuzukiBefore1,
                SuzukiBefore2,
                SuzukiBefore3,
                SuzukiBefore4,
            ],
        },
        {
            vehicle: { name: 'Suzuki', model: 'Every' },
            images: [
                EveryBefore1,
                EveryBefore2,
                EveryBefore3,
                EveryBefore4,
            ],
        },
        {
            vehicle: { name: 'Toyota', model: 'Aqua' },
            images: [
                AquaBefore1,
                AquaBefore2,
                AquaBefore3,
                AquaBefore4,
            ],
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: 'white',
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
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'black',
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
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}
                        >
                            {project.vehicle.name}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ color: 'white', textAlign: 'center', fontStyle: 'italic' }}
                        >
                            {project.vehicle.model}
                        </Typography>
                    </Box>

                    {/* Right Side (Swiper) */}
                    <Box sx={{ width: '80%', backgroundColor: 'black' }}>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={4}
                            spaceBetween={10} // Add gap between slides
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
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
                                            height: '300px',
                                            objectFit: 'cover',
                                            margin: '4px',
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
