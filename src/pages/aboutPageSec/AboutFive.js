import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Images for the Swiper
import image1 from '../../images/image1.jpg'; // Replace with your actual image paths
import image2 from '../../images/image2.jpg';
import image3 from '../../images/whtwedo1.jpg';
import image4 from '../../images/whtwedo2.jpg';
import image5 from '../../images/whtwedo3.jpg';
import image6 from '../../images/whtwedo4.png';

function AboutFive() {
    return (
        <Box sx={{ backgroundColor: '#fff', py: 5, px: 10 }}>
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
                        Facilities We Offer
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                        }}
                    >
                        AT <span style={{ color: '#C8102E' }}>SAZUKI</span>
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
                        We are equipped with top-scale collision auto body repair machinery,
                        aluminum/metal dent pullers, MIG welding, and plastic welding.
                        Along with paint booths fortified with air dryers to carry out both water
                        and solvent-based painting.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: '#555', lineHeight: 1.8, mt: 2 }}
                    >
                        We use high-end raw materials that include 3M, Wurth, and Debeer paints
                        from Causeway with in-house color machines to match the color codes.
                    </Typography>
                </Grid>

                {/* Right Side Swiper */}
                <Grid item xs={12} md={6}>
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
                        autoplay={{
                            delay: 2000, // Auto-swipes every 2 seconds
                            disableOnInteraction: false, // Keeps autoplay running even after user interaction
                        }}
                        loop={true} // Enable looping
                        style={{
                            borderRadius: '10px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '400px', // Fixed width for the card
                                    height: '400px', // Fixed height for the card
                                    margin: '0 auto', // Center the image in the slide
                                    borderRadius: '10px',
                                    overflow: 'hidden', // Ensures the image does not overflow
                                }}
                            >
                                <img
                                    src={image1}
                                    alt="Car Repair 1"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover', // Ensures the image covers the container proportionally
                                    }}
                                />
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '400px', // Fixed width for the card
                                    height: '400px', // Fixed height for the card
                                    margin: '0 auto', // Center the image in the slide
                                    borderRadius: '10px',
                                    overflow: 'hidden', // Ensures the image does not overflow
                                }}
                            >
                                <img
                                    src={image2}
                                    alt="Car Repair 2"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover', // Ensures the image covers the container proportionally
                                    }}
                                />
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '400px', // Fixed width for the card
                                    height: '400px', // Fixed height for the card
                                    margin: '0 auto', // Center the image in the slide
                                    borderRadius: '10px',
                                    overflow: 'hidden', // Ensures the image does not overflow
                                }}
                            >
                                <img
                                    src={image3}
                                    alt="Car Repair 3"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover', // Ensures the image covers the container proportionally
                                    }}
                                />
                            </Box>
                        </SwiperSlide>


                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '400px', // Fixed width for the card
                                    height: '400px', // Fixed height for the card
                                    margin: '0 auto', // Center the image in the slide
                                    borderRadius: '10px',
                                    overflow: 'hidden', // Ensures the image does not overflow
                                }}
                            >
                                <img
                                    src={image4}
                                    alt="Car Repair 3"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover', // Ensures the image covers the container proportionally
                                    }}
                                />
                            </Box>
                        </SwiperSlide>


                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '400px', // Fixed width for the card
                                    height: '400px', // Fixed height for the card
                                    margin: '0 auto', // Center the image in the slide
                                    borderRadius: '10px',
                                    overflow: 'hidden', // Ensures the image does not overflow
                                }}
                            >
                                <img
                                    src={image5}
                                    alt="Car Repair 3"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover', // Ensures the image covers the container proportionally
                                    }}
                                />
                            </Box>
                        </SwiperSlide>



                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: '400px', // Fixed width for the card
                                    height: '400px', // Fixed height for the card
                                    margin: '0 auto', // Center the image in the slide
                                    borderRadius: '10px',
                                    overflow: 'hidden', // Ensures the image does not overflow
                                }}
                            >
                                <img
                                    src={image6}
                                    alt="Car Repair 3"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover', // Ensures the image covers the container proportionally
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

export default AboutFive;
