import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Images for the Swiper
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

function AccidentRepair() {
    return (
        <Box sx={{ backgroundColor: '#fff', py: 5, px: 5 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Left Side Content */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            textTransform: 'uppercase',
                            color: '#000',
                        }}
                    >
                        SAZUKI Motors
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                            fontSize: {
                              xs: '24px', // Extra small screens (mobile)
                              sm: '40px', // Small
                              md:'40px  ',
                              lg: '40px'
                  
                  
                            }
                  
                  
                  
                        }}
                    >
                        PREMIUM <span style={{ color: '#C8102E' }}>ACCIDENT REPAIR</span> SERVICE
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, mb: 2 }}>
                        Having found SAZUKI – you have found the most trusted auto repair experts.
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, mb: 2 }}>
                        Have your accident repairs done with us, and you’ll never want to go anywhere else again. We treat cars like family, with quality you can trust and take the hassle out of your accident repair!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, mt: 2 }}>
                        We use high-end raw materials that include 3M, Wurth, and Debeer paints from Causeway with in-house color machines to match the color codes.
                    </Typography>
                </Grid>

                {/* Right Side Swiper */}
                <Grid item xs={12} md={6}>
                    <Swiper
                        // navigation
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        style={{
                            borderRadius: '10px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '400px',
                                    margin: '0 auto',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={image1}
                                    alt="Car Repair 1"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '400px',
                                    margin: '0 auto',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={image2}
                                    alt="Car Repair 2"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '400px',
                                    margin: '0 auto',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={image3}
                                    alt="Car Repair 3"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AccidentRepair;
