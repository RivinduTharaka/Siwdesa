// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products'; // Main products page
import Contact from './pages/ContactUs';
import { Box } from '@mui/material';
import ProductPage from './pages/ProductPage'; // Brand-specific products page

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/whatwedo" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} /> {/* Route for all products */}
            <Route path="/products/:brand" element={<ProductPage />} /> {/* Dynamic route for brand products */}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
