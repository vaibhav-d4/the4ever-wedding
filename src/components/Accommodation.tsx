import React from 'react';
import {Box, Grid} from '@mui/material';
import {ACCOMMODATION_INFO} from '@utils/constants';

const Accommodation: React.FC = () => {
  return (
    <Box className="by-10">
      <Box className="text-center text-4xl px-4">Travel & Accomodation</Box>
      <Box className="text-center text-2xl font-dancing-script my-10 px-4">
        💫 A Celebration of Love in the Heart of Bhopal
      </Box>
      <Grid container spacing={6} className="px-4" justifyContent="center">
        {ACCOMMODATION_INFO.map((event) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} key={event.id} sx={{display: 'flex', justifyContent: 'center'}}>
            <Box className="border rounded-lg p-6 shadow-2xl max-w-md bg-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-brandon-bold mb-4 font-semibold">{event.title}</h2>
              <p className="text-base font-brandon-regular">{event.description}</p>
            </Box>
          </Grid>
        ))}
        {/* Add an empty Grid item to center the last event on md screens if there are exactly 3 events */}
        {ACCOMMODATION_INFO.length === 3 && (
          <Grid size={{md: 4}} sx={{display: {xs: 'none', md: 'block', lg: 'none'}}} />
        )}
      </Grid>
    </Box>
  );
};

export default Accommodation;
