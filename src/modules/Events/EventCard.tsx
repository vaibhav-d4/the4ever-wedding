import {Box, Fade} from "@mui/material";
import {BACKDROP_BLUR} from "@utils/constants";
import clsx from "clsx";
import {useInView} from "@utils/hooks/useInView";

interface EventCardProps {
  name: string;
  image: string;
  quote: string;
  info: string;
}

const CARD_MAX_WIDTH = 395;
const IMAGE_HEIGHT = 200;

const EventCard = ({name, image, quote, info}: EventCardProps) => {
  const [ref, inView] = useInView({threshold: 0.1});
  return (
    <Fade in={inView} timeout={1000}>
      <div ref={ref}>
        <Box
          sx={{
            maxWidth: CARD_MAX_WIDTH,
            minWidth: 0
          }}
          className={clsx(
            "shadow-2xl flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl bg-white/40 hover:cursor-pointer w-full",
            `${BACKDROP_BLUR}`
          )}
        >
          <img
            src={image}
            alt={name}
            style={{
              height: IMAGE_HEIGHT,
              objectFit: "cover",
              objectPosition: "top"
            }}
            className="object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-t-2xl w-full"
          />
          <Box className="m-4 mt-6 tracking-wide flex flex-col gap-2">
            <Box className="font-semibold text-3xl mb-1 font-alice-regular text-black/80">{name}</Box>
            <Box className="font-great-vibes text-2xl text-primary tracking-wider mb-1">"{quote}"</Box>
            <Box className="text-sm text-gray-500 font-brandon-regular">{info}</Box>
          </Box>
        </Box>
      </div>
    </Fade>
  );
};

export default EventCard;
