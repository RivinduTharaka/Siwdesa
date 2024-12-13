import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, TextField, MenuItem, IconButton, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Link } from '@mui/material';
import Navbar from '../components/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import { productsData } from './ProductPage'; // Import products data from ProductPage

function Products() {
  // Flatten the productsData to create a single array of products
  const allProducts = Object.values(productsData).flat();

  // State for search, dropdown filter, and premium popup dialog
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filtered products based on search term and selected brand
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand ? product.name.toLowerCase().includes(selectedBrand.toLowerCase()) : true;
    return matchesSearch && matchesBrand;
  });

  const brands = ['Benz', 'BMW', 'VOLVO', 'Audi', 'Porsche', 'Peugeot', 'Volkswagen'];

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
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, mt: 10 }}>
          All Products
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Browse our wide range of high-quality spare parts for all vehicle brands.
        </Typography>
      </Box>

      {/* Search and Dropdown Filter Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, py: 2, px: { xs: 2, md: 30 } }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search products by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon color="disabled" sx={{ mr: 1 }} />,
          }}
          sx={{
            backgroundColor: '#1c1b1b',
            borderRadius: 2,
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: '#333333',
              },
              '&:hover fieldset': {
                borderColor: '#C8102E',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#C8102E',
              },
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          }}
        />
        <TextField
          select
          fullWidth
          variant="outlined"
          label="Select Vehicle Model"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          sx={{
            backgroundColor: '#1c1b1b',
            borderRadius: 2,
            '& .MuiInputLabel-root': {
              color: '#97999c',
            },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: '#333333',
              },
              '&:hover fieldset': {
                borderColor: '#C8102E',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#C8102E',
              },
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          }}
        >
          <MenuItem value="">All Brands</MenuItem>
          {brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Products Display Section */}
      <Box sx={{ px: { xs: 2, md: 10 } }}>
        <Grid container justifyContent="center" spacing={1}>
          {filteredProducts.map((product, idx) => (
            <Grid item xs={6} sm={4} md={2} key={idx}>
              <Card
                sx={{
                  maxWidth: 230,
                  backgroundColor: '#1b1b1b',
                  color: 'white',
                  borderRadius: 2,
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                  border: '2px solid transparent',
                  transition: 'transform 0.3s, border 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    border: '2px solid white',
                  },
                  margin: 'auto',
                  my: 1,
                }}
              >
                <ImageSlider images={product.images} alt={product.name} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#C8102E', fontSize: '1rem' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', mb: 1 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleOpenPopup(product)}
                    sx={{
                      backgroundColor: '#C8102E',
                      color: 'white',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '0.75rem',
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
      </Box>

      {/* Premium Popup Dialog */}
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
            border: '1px solid #948d8d', // White border for premium popup
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
          Product Purchase
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

// ImageSlider Component
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
        sx={{ padding: 1, objectFit: 'contain', backgroundColor: '#333', borderRadius: '8px' }}
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

export default Products;
