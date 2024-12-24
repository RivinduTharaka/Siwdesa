import React from 'react';
import { Box, Typography, Button, Grid , List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import bg from "../../images/image9.jpg"; // Update with your actual image path
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Secfour() {
  return (
    <Box sx={{ padding: '60px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' ,  '@media (max-width: 600px)': {
      marginTop: '-100px', // Move slightly up on mobile
    },}}>
      <Grid container spacing={7} sx={{ width: '1200px', alignItems: 'center' }}>

      <Grid item xs={12} md={6}>
          <Box>
            <img src={bg} alt="Accident Repair" style={{ width: '100%' }} />
          </Box>
        </Grid>

        
        <Grid item xs={12} md={6}>
        <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#000',
              }}
            >
              WHY CHOOSE <span style={{ color: '#e00000' }}>SAZUKI</span>
            </Typography>

            {/* List of Features */}
            <List>
              {[
                'Fully equipped workshop',
                'Fast & reliable accident repairs',
                'Quality workmanship',
                'Excellent customer service',
                '2-years warranty on all paint works',
                'Importation of genuine spares',
              ].map((text, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#e00000' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#000',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
       
      </Grid>
    </Box>
  );
}

export default Secfour;
