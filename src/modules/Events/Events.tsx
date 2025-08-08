import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import EventCard from "./EventCard";
import {WEDDING_EVENTS} from "@utils/constants";

const Events = () => {
  return (
    <Box className="">
      <Box className="text-center text-2xl font-dancing-script my-10">
        Join us in celebrating these beautiful moments of love, tradition, and togetherness.
      </Box>
      <Grid container spacing={2} className="">
        {WEDDING_EVENTS.map((event) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} key={event.name} sx={{display: "flex", justifyContent: "center"}}>
            <EventCard {...event} />
          </Grid>
        ))}
      </Grid>
      <Box className="text-center text-xl font-brandon-regular my-10">
        Each event is a cherished memory in our journey. We look forward to celebrating with you!
      </Box>
    </Box>
  );
};

export default Events;
