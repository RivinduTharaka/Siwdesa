import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { Slide } from "@mui/material";

function Service4() {
    const features = [
        {
            title: "Fast & Dependable",
            description: "Our expert team ensures your vehicle gets back on the road swiftly with unmatched reliability.",
        },
        {
            title: "State-of-the-Art Workshop",
            description: "Equipped to handle everything from minor fixes to major repairs, our facilities are second to none.",
        },
        {
            title: "Exceptional Craftsmanship",
            description: "We focus on delivering results that not only meet but exceed your expectations, ensuring long-lasting quality.",
        },
        {
            title: "Paint Warranty",
            description: "Confidence in our work is reflected in our warranty, ensuring the durability and top-notch quality of our services.",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                py: 8,
                px: 4,
                marginBottom:10
            }}
        >
            {/* Title Section */}
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontWeight: "bold",
                    mb: 5,
                    color: "#C8102E", // Red for emphasis
                    textTransform: "uppercase",
                    letterSpacing: 2,
                }}
            >
                Why Choose Us for Repairs
            </Typography>
            <Typography
                variant="body1"
                align="center"
                sx={{
                    mb: 5,
                    color: "#333", // Black for text contrast
                    maxWidth: "800px",
                    mx: "auto",
                }}
            >
                We pride ourselves on providing premium repair solutions. Our focus is on delivering reliable, efficient, and high-quality services tailored to discerning vehicle owners.
            </Typography>

            {/* Features Section */}
            <Grid container spacing={4} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Slide
                            direction={index % 2 === 0 ? "left" : "right"}
                            in={true}
                            timeout={800 + index * 300}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    px: 3,
                                    py: 2,
                                    borderLeft: `6px solid ${
                                        index % 2 === 0 ? "#0078D4" : "#F06400"
                                    }`, // Alternating between blue and orange
                                    backgroundColor:
                                        index % 2 === 0
                                            ? "rgba(0, 120, 212, 0.1)"
                                            : "rgba(240, 100, 0, 0.1)", // Soft blue and orange
                                    borderRadius: 2,
                                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "12px",
                                        height: "12px",
                                        backgroundColor:
                                            index % 2 === 0 ? "#0078D4" : "#F06400", // Alternating icons
                                        borderRadius: "50%",
                                    }}
                                />
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "bold",
                                            mb: 1,
                                            color: index % 2 === 0 ? "#0078D4" : "#F06400",
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#333", // Black for text
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Slide>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Service4;
