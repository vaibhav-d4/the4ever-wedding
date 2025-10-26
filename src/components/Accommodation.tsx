import React from 'react';
import { Box, Grid } from '@mui/material';
import {
  ACCOMMODATION_INFO,
  CALENDAR_INVITE_LINK,
  LOCATION_FULL_NAME,
  LOCATION_GOOGLE_LINK,
  LOCATION_NAME,
  WEDDING_DATE,
} from '@utils/constants';
import { Calendar, MapPin } from 'lucide-react';
import { logCalendarClick } from '@utils/analytics';
import moment from 'moment';

// Helper to render the description while highlighting LOCATION_NAME occurrences
const renderWithHighlight = (text: string) => {
  if (!text || !LOCATION_NAME) return text;
  return text.split(LOCATION_NAME).flatMap((part, i, arr) =>
    i === arr.length - 1
      ? [part]
      : [
          part,
          <span key={i} className='text-wedding-blue-500'>
            {LOCATION_NAME}
          </span>,
        ]
  );
};

const Accommodation: React.FC = () => {
  return (
    <Box className='by-10'>
      <Box className='text-center text-4xl px-4'>Travel & Accomodation</Box>
      <Box className='text-center text-2xl font-dancing-script my-10 px-4'>
        💫 A Celebration of Love in the Heart of Bhopal
      </Box>
      <Grid container spacing={6} className='px-4' justifyContent='center'>
        {ACCOMMODATION_INFO.map((event) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={event.id}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box className='border rounded-lg p-6 shadow-2xl max-w-md bg-white/10 backdrop-blur-sm'>
              <h2 className='text-2xl font-brandon-bold mb-4 font-semibold'>
                {event.title}
              </h2>
              <p className='text-base font-brandon-regular'>
                {renderWithHighlight(event.description)}
              </p>
            </Box>
          </Grid>
        ))}
        {/* Add an empty Grid item to center the last event on md screens if there are exactly 3 events */}
        {ACCOMMODATION_INFO.length === 3 && (
          <Grid
            size={{ md: 4 }}
            sx={{ display: { xs: 'none', md: 'block', lg: 'none' } }}
          />
        )}
      </Grid>
      <Box className='flex flex-col md:flex-row justify-center items-center gap-0 md:gap-24 mt-16'>
        <Box
          className='inline-block cursor-pointer px-2 py-1'
          onClick={() => {
            window.open(CALENDAR_INVITE_LINK, '_blank');
            logCalendarClick();
          }}
          title='Click to add this event to your calendar'
        >
          <span className='inline-block align-middle'>
            <Calendar className='' />
          </span>
          <span className='ml-2 text-xl inline-block align-middle underline decoration-dotted underline-offset-2'>
            {moment(WEDDING_DATE).format('MMMM DD, YYYY')}
          </span>
          <span className='block text-xs text-gray-500 mt-1 text-center'>
            Click to add to calendar
          </span>
        </Box>
        <Box
          className='mt-6 md:mt-0 text-center cursor-pointer max-w-fit p-2'
          onClick={() => window.open(LOCATION_GOOGLE_LINK, '_blank')}
          title='View location'
        >
          <span className='inline-block align-middle'>
            <MapPin />
          </span>
          <span className='text-xl ml-2 inline-block align-middle underline decoration-dotted underline-offset-2'>
            {LOCATION_FULL_NAME}
          </span>
          <span className='block text-xs text-gray-500 mt-1 '>
            View the venue on Google Maps
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Accommodation;
