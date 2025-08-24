import {Box} from "@mui/material";

interface EventCardProps {
  name: string;
  image: string;
  quote: string;
  info: string;
}

const CARD_WIDTH = 395;
const CARD_HEIGHT = 420;
const IMAGE_HEIGHT = 220;

const EventCard = ({name, image, quote, info}: EventCardProps) => (
  <Box
    sx={{width: CARD_WIDTH, height: CARD_HEIGHT}}
    className="shadow-2xl flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl bg-white/40 backdrop-blur-md hover:cursor-pointer"
  >
    <img
      src={image}
      alt={name}
      style={{width: CARD_WIDTH, height: IMAGE_HEIGHT}}
      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-t-2xl shadow-xl"
    />
    <Box className="m-4 mt-6 tracking-wide flex flex-col gap-2">
      <Box className="font-semibold text-3xl mb-1 font-alice-regular text-black/80">{name}</Box>
      <Box className="font-great-vibes text-2xl text-primary tracking-wider mb-1">"{quote}"</Box>
      <Box className="text-sm text-gray-500 font-brandon-regular">{info}</Box>
    </Box>
  </Box>
);

export default EventCard;
