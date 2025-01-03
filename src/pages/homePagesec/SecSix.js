import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import lorry from "../../images/lorry-removebg-preview1-removebg-preview.png";

function SecSix() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "300px",
        background: "linear-gradient(135deg, rgb(255, 0, 0) 50%, #000000 50%)",
        color: "#ffffff",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        marginBottom:"50px"
      }}
    >
      {/* Left Section - Image */}
      <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
        <Box
          component="img"
          src={lorry}
          alt="Lorry"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Grid>

      {/* Right Section - Content */}
      <Grid item xs={6} display="flex" flexDirection="column" alignItems="flex-start" marginLeft={"10px"}>
        <Typography variant="h6" gutterBottom>
          24/7 Roadside Recovery 
        </Typography>
        <Typography variant="body1" gutterBottom>
          With guaranteed safety and affordable rates
        </Typography>
        <Typography variant="h5"sx={{ fontWeight: "bold" }}>
          CALL: (+94) 76 644 6464
        </Typography>
      </Grid>
    </Box>
  );
}

export default SecSix;
