import React, { useState } from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import backgroundImage1 from '../../images/homeimge.jpg';

function Secone() {
    const [bgIndex, setBgIndex] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate

    const pages = [
        {
            backgroundImage: backgroundImage1,
            title: "Precision. Performance. Perfection & Your Destination for Quality Parts",
            subtitle: "Quality You Can Trust, Performance You Deserve.\nYour Journey Starts with the Right Parts",
            buttonText: "Contact Us",
        },
    ];

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                backgroundImage: `url(${pages[bgIndex].backgroundImage})`,
                backgroundSize: 'cover',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                mt: -2,
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 5%',
                    fontSize: '0.875rem',
                    zIndex: 3,
                }}
            >
                {/* Top Information Bar - Add icons and information here */}
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'linear-gradient(to right, rgba(23, 10, 10, 1), rgba(23, 10, 10, 0.7) 50%, rgba(255, 0, 0, 0) 95%)',
                    zIndex: 1,
                }}
            />

            {/* Content Section */}
            <Container sx={{ position: 'relative', zIndex: 2, padding: { xs: 3, md: '50px' } }}>
                {/* Modified "Most Trusted Spareparts Dealer" Section */}
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 45, md: 35 },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3.5rem' },
                            color: 'transparent',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1rem',
                            WebkitTextStroke: '1px white',
                            display: 'inline-block',
                        }}
                    >
                        Most Trusted European Spareparts Dealer
                    </Typography>
                </Box>

                {/* Original Content */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 5,
                        maxWidth: { xs: '90%', md: '60%' },
                        bottom: { xs: 80, md: 6 },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                            lineHeight: 1.2,
                            mb: 2,
                            color: 'white',
                        }}
                    >
                        {pages[bgIndex].title.split(" & ")[0]} <br />
                        <span style={{ fontStyle: 'italic', fontWeight: '300' }}>{pages[bgIndex].title.split(" & ")[1]}</span>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 3,
                            fontSize: { xs: '0.9rem', md: '1.25rem' },
                            lineHeight: 1.5,
                            color: 'rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        {pages[bgIndex].subtitle.split('\n')[0]} <br />
                        {pages[bgIndex].subtitle.split('\n')[1]}
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                      
                        onClick={() => navigate('/contact')} // Navigate to the Contact Us page
                        sx={{
                            borderRadius: '50px',
                            paddingX: 5,
                            fontWeight: 'bold',
                            fontSize: { xs: '0.7rem', md: '1rem' },
                        }}
                    >
                        {pages[bgIndex].buttonText}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Secone;
