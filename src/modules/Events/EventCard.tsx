import {useState} from "react";
import {Box, Fade} from "@mui/material";
import {BACKDROP_BLUR} from "@utils/constants";
import {useInView} from "@utils/hooks/useInView";
import EventDetailsModal from "@components/EventDetailsModal";
import clsx from "clsx";

interface EventCardProps {
  name: string;
  image: string;
  eventImage: string;
  quote: string;
  info: string;
}

const CARD_MAX_WIDTH = 395;
const IMAGE_HEIGHT = 200;

const EventCard = ({name, image, quote, info, eventImage}: EventCardProps) => {
  const [ref, inView] = useInView({threshold: 0.1});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
            onClick={handleOpen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpen();
            }}
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
              <Box className="text-xs text-gray-300 font-brandon-regular mt-2 text-right">More details →</Box>
            </Box>
          </Box>
        </div>
      </Fade>
      <EventDetailsModal open={open} onClose={handleClose} maxWidth={700}>
        <div className={clsx("flex flex-col md:flex-row items-center gap-8 w-full")}>
          {/* Image on left for desktop, top for mobile */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
            <img
              src={eventImage}
              alt={name}
              className="rounded-2xl  w-full max-w-xs md:max-w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          {/* Content on right for desktop, below for mobile */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
            <div className="font-semibold text-3xl mb-2 font-alice-regular text-black/90 text-center md:text-left">
              {name}
            </div>
            <div className="font-great-vibes text-2xl text-primary tracking-wider mb-3 text-center md:text-left">
              "{quote}"
            </div>
            <div className="text-base text-gray-700 font-brandon-regular text-center md:text-left">{info}</div>
          </div>
        </div>
      </EventDetailsModal>
    </>
  );
};

export default EventCard;
