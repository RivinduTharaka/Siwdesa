import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Link,
} from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

// Import images for each product card (BMW)
import bmwProduct1 from '../images/ImagesPrime/BMW_Lights/2008-bmw-5-series.png';
import bmwProduct2 from '../images/ImagesPrime/BMW_Lights/2008-bmw-5-series(2).png';
import bmwProduct3 from '../images/ImagesPrime/BMW_Lights/2009 BMW 3-Series.png';
import bmwProduct4 from '../images/ImagesPrime/BMW_Lights/2012 BMW 5-Series.png';
import bmwProduct5 from '../images/ImagesPrime/BMW_Lights/2012 BMW 5-Series(2).png';
import bmwProduct6 from '../images/ImagesPrime/BMW_Lights/2012 BMW X1.png';
import bmwProduct7 from '../images/ImagesPrime/BMW_Lights/2012 BMW X1(2).png';
import bmwProduct8 from '../images/ImagesPrime/BMW_Lights/2013 BMW 5 Series.png';
import bmwProduct9 from '../images/ImagesPrime/BMW_Lights/2015 BMW 5 Series(2).png';
import bmwProduct10 from '../images/ImagesPrime/BMW_Lights/2016 2017 2018 2019 BMW 7 Series G11 G12 740i 750i LH Headlight LED Complete.png';
import bmwProduct11 from '../images/ImagesPrime/BMW_Lights/2016 BMW 5 Series .png';
import bmwProduct12 from '../images/ImagesPrime/BMW_Lights/2016 BMW 5 Series  (2).png';
import bmwProduct13 from '../images/ImagesPrime/BMW_Lights/2016_bmw_x1_rearlight.jpg';
import bmwProduct14 from '../images/ImagesPrime/BMW_Lights/2015 BMW 5 Series.png';
import bmwProduct15 from '../images/ImagesPrime/BMW_Lights/BMW X1 Right Headlight(2016-2019).png';
import bmwProduct16 from '../images/ImagesPrime/BMW_Lights/BMW X5 Headlight(2016-19).png';
import bmwProduct17 from '../images/ImagesPrime/BMW_Lights/2016_bmw_x1_rearlight.jpg';
import bmwProduct18 from '../images/ImagesPrime/BMW_Lights/bmw-g11-g12-7-series-2016-2019-laser-light.png';
import bmwProduct19 from '../images/ImagesPrime/BMW_Lights/bmw-g11-g12-7-series-2016-2019-laser-light(2).png';
import bmwProduct20 from '../images/ImagesPrime/BMW_Lights/taillight-right-inner-part-for-bmw-f11.jpg';

// Import images for each product card (Mercedes)
import mercProduct3 from '../images/ImagesPrime/BENZ_Lights/2017-Mercedes-Benz-E-Class-E220d rearlight.jpg';
import mercProduct4 from '../images/ImagesPrime/BENZ_Lights/c-class-w205-2014-2015-2016-2017-2018.jpg';
import mercProduct5 from '../images/ImagesPrime/BENZ_Lights/headlights Xenon Daylight LED DRL look Mercedes-Benz s class W221 year.jpg';
import mercProduct6 from '../images/ImagesPrime/BENZ_Lights/Mercedes - Benz S Class W223 Digital Light Headlights 2020.jpg';
import mercProduct7 from '../images/ImagesPrime/BENZ_Lights/Mercedes Classe C W205 Facelift Phase 2 (2018-2021).jpg';
import mercProduct8 from '../images/ImagesPrime/BENZ_Lights/mercedes-benz-e-class-2002-2006-rear.jpg';
import mercProduct9 from '../images/ImagesPrime/BENZ_Lights/mercedes-benz-e-class-2009-2013-rearlight.jpg';
import mercProduct10 from '../images/ImagesPrime/BENZ_Lights/mercedes-benz-e-classheadlamp.jpg';

// Import images for each product card (Audi)
import audiProduct1 from '../images/ImagesPrime/AUDI_Lights/2008 Audi Q7 Headlight.jpg';
import audiProduct2 from '../images/ImagesPrime/AUDI_Lights/2016 2017 2018 Audi Q3 Tail Light.png';
import audiProduct3 from '../images/ImagesPrime/AUDI_Lights/AUDI A4 HEADLIGHT LEFT DRIVER 2017 2018 2019.jpg';
import audiProduct4 from '../images/ImagesPrime/AUDI_Lights/audi A4 rear light.png';
import audiProduct5 from '../images/ImagesPrime/AUDI_Lights/Audi A5 FULL LED Headlights 20161.jpg';
import audiProduct6 from '../images/ImagesPrime/AUDI_Lights/AUDI A6 HEADLIGHT RIGHT PASSENGER 2016 2017 2018.jpg';
import audiProduct7 from '../images/ImagesPrime/AUDI_Lights/AUDI A8 HEADLIGHT LEFT DRIVER 2015 2016 2017 2018.jpg';
import audiProduct8 from '../images/ImagesPrime/AUDI_Lights/AUDI A8 HEADLIGHT RIGHT PASSENGER 2015 2016 2017 2018.jpg';
import audiProduct9 from '../images/ImagesPrime/AUDI_Lights/AUDI Q3 HEADLIGHT LEFT DRIVER 2016 2017.jpg';
import audiProduct10 from '../images/ImagesPrime/AUDI_Lights/Audi Q3 Sportback2020.jpg';
import audiProduct11 from '../images/ImagesPrime/AUDI_Lights/Audi Q7 Facelift Led Headlamp Q7 Head Light Led.jpg';
import audiProduct12 from '../images/ImagesPrime/AUDI_Lights/audi-q5-headlight-left-driver-2021-2022-2023.jpg';
import audiProduct13 from '../images/ImagesPrime/AUDI_Lights/AUDI-Q7-headlights-04.jpg';

// Import images for each product card (Volvo)
import volvoProduct1 from '../images/ImagesPrime/Volvo_Lights/2019_volvo_v90.jpg';
import volvoProduct2 from '../images/ImagesPrime/Volvo_Lights/rear_tail_light_xc40_2018_to_2022.png';
import volvoProduct3 from '../images/ImagesPrime/Volvo_Lights/Volvo V60 and V60 Plug-In Hybrid .jpg';
import volvoProduct4 from '../images/ImagesPrime/Volvo_Lights/Volvo XC90 - Headlight .jpg';

// Import images for each product card (VW)
import vwProduct1 from '../images/ImagesPrime/VW_Lights/2005-Touareg-Headlight.jpg';
import vwProduct2 from '../images/ImagesPrime/VW_Lights/2015_volkswagen_golf_r_.jpg';
import vwProduct3 from '../images/ImagesPrime/VW_Lights/2019 Volkswagen Tiguan.jpg';
import vwProduct4 from '../images/ImagesPrime/VW_Lights/Volkswagen Atlas SE.png';
import vwProduct5 from '../images/ImagesPrime/VW_Lights/Volkswagen Passat 2015.jpg';
import vwProduct6 from '../images/ImagesPrime/VW_Lights/Volkswagen PASSAT B8 2014.jpg';
import vwProduct7 from '../images/ImagesPrime/VW_Lights/Volkswagen TOUAREG Intelligent AHL Xenon headlights 2014.jpg';
import vwProduct8 from '../images/ImagesPrime/VW_Lights/VW JETTA 2014.jpg';
import vwProduct9 from '../images/ImagesPrime/VW_Lights/VOLKSWAGEN TAOS HEADLIGHT RIGHT PASSENGER 2022 2023.jpg';
import vwProduct10 from '../images/ImagesPrime/VW_Lights/VOLKSWAGEN TIGUAN HEADLIGHT RIGHT 2018 2019 2020 2021.jpg';

// Product data with image arrays for each product card
export const productsData = {
  BMW: [
    { name: '2008 BMW 5 Series', description: 'Headlight for 2008 BMW 5 Series.', price: '', images: [bmwProduct1, bmwProduct2] },
    { name: '2009 BMW 3 Series', description: 'Headlight for 2009 BMW 3 Series.', price: '', images: [bmwProduct3] },
    { name: '2012 BMW 5 Series', description: 'Headlight for 2012 BMW 5 Series.', price: '', images: [bmwProduct4, bmwProduct5] },
    { name: '2012 BMW X1', description: 'Headlight for 2012 BMW X1.', price: '', images: [bmwProduct6, bmwProduct7] },
    { name: '2013 BMW 5 Series', description: 'Headlight for 2013 BMW 5 Series.', price: '', images: [bmwProduct8] },
    { name: '2015 BMW 5 Series', description: 'Headlight for 2015 BMW 5 Series.', price: '', images: [bmwProduct9] },
    { name: 'BMW 7 Series G11 G12', description: 'Headlight LED for BMW 7 Series G11 G12.', price: '', images: [bmwProduct10] },
    { name: '2016 BMW 5 Series', description: 'Headlight for 2016 BMW 5 Series.', price: '', images: [bmwProduct11, bmwProduct12] },
    { name: '2016 BMW X1', description: 'Rear light for 2016 BMW X1.', price: '', images: [bmwProduct13] },
    { name: '2015 BMW 5 Series', description: 'Headlight for 2015 BMW 5 Series.', price: '', images: [bmwProduct14] },
    { name: 'BMW X1 Headlight', description: 'Right Headlight for BMW X1 (2016-2019).', price: '', images: [bmwProduct15] },
    { name: 'BMW X5 Headlight', description: 'Headlight for BMW X5 (2016-19).', price: '', images: [bmwProduct16] },
    { name: '2016 BMW X1 Rear Light', description: 'Rear light for 2016 BMW X1.', price: '', images: [bmwProduct17] },
    { name: 'BMW 7 Series Laser Light', description: 'Laser light for BMW 7 Series (2016-2019).', price: '', images: [bmwProduct18, bmwProduct19] },
    { name: 'BMW F11 Tail Light', description: 'Tail light for BMW F11.', price: '', images: [bmwProduct20] },
  ],
  Mercedes: [
    { name: '2017 Mercedes-Benz E-Class E220d', description: 'Rear light for 2017 Mercedes-Benz E-Class E220d.', price: '', images: [mercProduct3] },
    { name: 'C-Class W205 (2014-2018)', description: 'Headlights for Mercedes C-Class W205 (2014-2018).', price: '', images: [mercProduct4] },
    { name: 'Xenon Daylight LED DRL', description: 'Xenon Daylight LED DRL headlights for Mercedes.', price: '', images: [mercProduct5] },
    { name: 'S Class W223 Digital Light (2020)', description: 'Digital Light Headlights for Mercedes S Class W223.', price: '', images: [mercProduct6] },
    { name: 'Classe C W205 Facelift (2018-2021)', description: 'Facelift Phase 2 for Mercedes Classe C W205.', price: '', images: [mercProduct7] },
    { name: 'Mercedes-Benz E-Class (2002-2006) Rear', description: 'Rear light for Mercedes-Benz E-Class (2002-2006).', price: '', images: [mercProduct8] },
    { name: 'Mercedes-Benz E-Class (2009-2013) Rear', description: 'Rear light for Mercedes-Benz E-Class (2009-2013).', price: '', images: [mercProduct9] },
    { name: 'Mercedes-Benz E-Class Headlamp', description: 'Headlamp for Mercedes-Benz E-Class.', price: '', images: [mercProduct10] },
  ],
  Audi: [
    { name: '2008 Audi Q7 Headlight', description: 'Headlight for 2008 Audi Q7.', price: '', images: [audiProduct1] },
    { name: 'Audi Q3 Tail Light (2016-2018)', description: 'Tail light for Audi Q3 (2016-2018).', price: '', images: [audiProduct2] },
    { name: 'Audi A4 Headlight Left Driver (2017-2019)', description: 'Left headlight for Audi A4 (2017-2019).', price: '', images: [audiProduct3] },
    { name: 'Audi A4 Rear Light', description: 'Rear light for Audi A4.', price: '', images: [audiProduct4] },
    { name: 'Audi A5 Full LED Headlights (2016)', description: 'Full LED headlights for Audi A5 (2016).', price: '', images: [audiProduct5] },
    { name: 'Audi A6 Headlight Right Passenger (2015-2016)', description: 'Right passenger headlight for Audi A6 (2015-2016).', price: '', images: [audiProduct6] },
    { name: 'Audi A8 Headlight Left Driver (2015-2018)', description: 'Left driver headlight for Audi A8 (2015-2018).', price: '', images: [audiProduct7] },
    { name: 'Audi A8 Headlight Right Passenger (2015-2018)', description: 'Right passenger headlight for Audi A8 (2015-2018).', price: '', images: [audiProduct8] },
    { name: 'Audi Q3 Headlight Left Driver (2016-2017)', description: 'Left driver headlight for Audi Q3 (2016-2017).', price: '', images: [audiProduct9] },
    { name: 'Audi Q3 Sportback (2020)', description: 'Sportback tail light for Audi Q3 (2020).', price: '', images: [audiProduct10] },
    { name: 'Audi Q7 Facelift LED Headlamp', description: 'LED headlamp for Audi Q7 Facelift.', price: '', images: [audiProduct11] },
    { name: 'Audi Q5 Headlight Left Driver (2021-2023)', description: 'Left driver headlight for Audi Q5 (2021-2023).', price: '', images: [audiProduct12] },
    { name: 'Audi Q7 Headlights', description: 'Headlights for Audi Q7.', price: '', images: [audiProduct13] },
  ],
  Volvo: [
    { name: '2019 Volvo V90 Headlight', description: 'Headlight for 2019 Volvo V90.', price: '', images: [volvoProduct1] },
    { name: 'Volvo XC40 Tail Light (2018-2022)', description: 'Tail light for Volvo XC40 (2018-2022).', price: '', images: [volvoProduct2] },
    { name: 'Volvo V60 Plug-In Hybrid Headlight', description: 'Headlight for Volvo V60 and V60 Plug-In Hybrid.', price: '', images: [volvoProduct3] },
    { name: 'Volvo XC90 Headlight', description: 'Headlight for Volvo XC90.', price: '', images: [volvoProduct4] },
  ],
  Volkswagen: [
    { name: '2005 Touareg Headlight', description: 'Headlight for 2005 VW Touareg.', price: '', images: [vwProduct1] },
    { name: '2015 Volkswagen Golf R', description: 'Headlight for 2015 VW Golf R.', price: '', images: [vwProduct2] },
    { name: '2019 Volkswagen Tiguan', description: 'Headlight for 2019 VW Tiguan.', price: '', images: [vwProduct3] },
    { name: 'Volkswagen Atlas SE', description: 'Tail light for Volkswagen Atlas SE.', price: '', images: [vwProduct4] },
    { name: 'Volkswagen Passat 2015', description: 'Headlight for Volkswagen Passat 2015.', price: '', images: [vwProduct5] },
    { name: 'Volkswagen PASSAT B8 2014', description: 'Headlight for Volkswagen PASSAT B8 2014.', price: '', images: [vwProduct6] },
    { name: 'Volkswagen TOUAREG Intelligent AHL Xenon Headlights', description: 'AHL Xenon Headlights for VW Touareg.', price: '', images: [vwProduct7] },
    { name: 'VW JETTA 2014', description: 'Headlight for VW JETTA 2014.', price: '', images: [vwProduct8] },
    { name: 'Volkswagen TAOS Headlight Right Passenger', description: 'Right passenger headlight for Volkswagen TAOS.', price: '', images: [vwProduct9] },
    { name: 'Volkswagen TIGUAN Headlight Right 2018-2019', description: 'Right headlight for Volkswagen TIGUAN (2018-2019).', price: '', images: [vwProduct10] },
  ],
};

function ProductPage() {
  const { brand } = useParams(); // Get the brand from the URL
  const products = productsData[brand] || []; // Filter products based on the brand

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ backgroundColor: '#0d0d0d', minHeight: '100vh', color: 'white', pb: 5 }}>
      <Navbar />
      <Box sx={{ textAlign: 'center', py: 5, color: '#C8102E' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, mt: 10 }}>{brand} Products</Typography>
        <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Choose from our range of high-quality spare parts for {brand} vehicles
        </Typography>
      </Box>

      <Grid container spacing={1} justifyContent="center">
        {products.map((product, idx) => (
          <Grid item xs={6} sm={6} md={2.5} key={idx}>
            <Card
              sx={{
                maxWidth: 280,
                backgroundColor: '#1b1b1b',
                color: 'white',
                borderRadius: 2,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                border: '2px solid transparent',
                transition: 'border 0.3s, box-shadow 0.3s',
                '&:hover': {
                  border: '2px solid white',
                },
                margin: 'auto',
                my: 1,
              }}
            >
              <ImageSlider images={product.images} alt={product.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#C8102E' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleOpenPopup(product)}
                  sx={{
                    backgroundColor: '#C8102E',
                    color: 'white',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#a00b1d' },
                  }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Premium Dialog Popup */}
      {/* Premium Dialog Popup */}
<Dialog
  open={openPopup}
  onClose={handleClosePopup}
  sx={{
    '& .MuiPaper-root': {
      backgroundImage: 'linear-gradient(145deg, #1f1f1f, #333)',
      color: 'white',
      borderRadius: '16px',
      padding: '20px',
      // boxShadow: '0px 8px 24px rgba(200, 16, 46, 0.6)',
      border: '1px solid #948d8d', // Added white border
    },
  }}
>
  <DialogTitle
    sx={{
      fontWeight: 'bold',
      fontSize: '24px',
      textAlign: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      pb: 2,
    }}
  >
    Premium Purchase
  </DialogTitle>
  <DialogContent sx={{ textAlign: 'center', pt: 3 }}>
    <Typography variant="h6" sx={{ mb: 3 }}>
      You are purchasing: <strong>{selectedProduct?.name}</strong>
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)' }}>
      Contact us at the number below to finalize your purchase:
    </Typography>
    <Typography
      variant="h5"
      sx={{
        mt: 2,
        fontWeight: 'bold',
        color: '#C8102E',
        // textShadow: '0px 2px 5px rgba(255, 255, 255, 0.5)',
      }}
    >
      <Link href="tel:+94777201951" sx={{ color: 'inherit', textDecoration: 'none' }}>
      +94777201951
      </Link>
    </Typography>
  </DialogContent>
  <DialogActions sx={{ justifyContent: 'center', pt: 2 }}>
    <Button
      onClick={handleClosePopup}
      sx={{
        backgroundColor: '#C8102E',
        color: 'white',
        borderRadius: '20px',
        fontWeight: 'bold',
        px: 4,
        '&:hover': { backgroundColor: '#a00b1d' },
      }}
    >
      Close
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  );
}

function ImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        height="140"
        image={images[currentIndex]}
        alt={alt}
        sx={{ padding: 2, objectFit: 'contain', backgroundColor: '#333', borderRadius: '8px' }}
      />
      {images.length > 1 && (
        <>
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { backgroundColor: 'rgba(200, 16, 46, 0.5)' },
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { backgroundColor: 'rgba(200, 16, 46, 0.5)' },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </>
      )}
    </Box>
  );
}

export default ProductPage;
