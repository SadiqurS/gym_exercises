import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import sadiqurgym from '../assets/images/sadiqurgym.png';
const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Sadiqur's Fitness Committee</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Unlock Your <br />
      True Potential
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" fontStyle="italic">
    "It's a shame for a man to grow old without seeing the beauty <br/> and strength of which his body is capable." ~ Socrates
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={sadiqurgym} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;