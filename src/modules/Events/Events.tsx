import {Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import EventCard from './EventCard';
import {WEDDING_EVENTS} from '@utils/constants';
import GradientDivider from '@components/GradientDivider';

const Events = () => {
  return (
    <Box className="mt-10 mb-20">
      <GradientDivider title="Events" className="text-5xl lg:text-7xl font-malarkey" />
      <Box className="text-center text-2xl font-dancing-script my-10 px-4">
        Join us in celebrating these beautiful moments of love, tradition, and togetherness.
      </Box>
      <Grid container spacing={6} className="px-4" justifyContent="center">
        {WEDDING_EVENTS.map((event) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} key={event.name} sx={{display: 'flex', justifyContent: 'center'}}>
            <EventCard {...event} />
          </Grid>
        ))}
        {/* Add an empty Grid item to center the last event on md screens if there are exactly 3 events */}
        {WEDDING_EVENTS.length === 3 && <Grid size={{md: 4}} sx={{display: {xs: 'none', md: 'block', lg: 'none'}}} />}
      </Grid>
      <Box className="text-center text-xl font-brandon-regular my-20 px-4">
        Each event is a cherished memory in our journey. We look forward to celebrating with you!
      </Box>
    </Box>
  );
};

export default Events;
