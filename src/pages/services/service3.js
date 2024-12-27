import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { Grow } from "@mui/material";

function Service3() {
    const steps = [
        {
            step: "Step 01",
            title: "Submit Your Inquiry",
            description: "Reach out to us with your vehicle's details and service needs via call, email, or chat.",
        },
        {
            step: "Step 02",
            title: "Detailed Evaluation",
            description: "Our team will analyze your vehicle's requirements and provide an accurate cost breakdown.",
        },
        {
            step: "Step 03",
            title: "Repair Process",
            description: "Once approved, we'll carry out the repair process with precision and care.",
        },
        {
            step: "Step 04",
            title: "Completion & Handover",
            description: "We ensure the job is completed to perfection before handing it over to you.",
        },
    ];

    return (
        <Box
            sx={{
                // backgroundColor: "rgb(0,0,0,0.)",
                color: "black",
                py: 8,
                px: 4,
            }}
        >
            {/* Title Section */}
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontWeight: "bold",
                    mb: 5,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                }}
            >
                How It Works
            </Typography>

            {/* Steps Section */}
            <Grid container spacing={4} justifyContent="center">
                {steps.map((step, index) => (
                    <Grow
                        in={true}
                        timeout={1000 + index * 300}
                        key={index}
                    >
                        <Grid item xs={12} sm={6} md={3}>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    border: "2px solid #C8102E",
                                    borderRadius: 3,
                                    p: 3,
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        backgroundColor: "rgba(255, 0, 0, 0.12)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: "#C8102E",
                                        mb: 1,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {step.step}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        mb: 2,
                                    }}
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grow>
                ))}
            </Grid>
        </Box>
    );
}

export default Service3;
