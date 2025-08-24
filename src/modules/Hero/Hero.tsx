import {useEffect} from "react";
import {Box, Grid} from "@mui/material";
import {
  CALENDAR_INVITE_LINK,
  HASHTAG,
  LOCATION_FULL_NAME,
  LOCATION_GOOGLE_LINK,
  MAIN_LOGO_IMAGE,
  MAX_WIDTH,
  VAIBHAV,
  WEDDING_DATE,
  YESHA,
  YESHA_AND_VAIBHAV
} from "@utils/constants";
import {useAppDispatch, useAppSelector} from "@utils/redux/hooks";
import {format} from "date-fns";
import {toUpper as _toUpper} from "lodash";
import {setWebsiteTypeId} from "@utils/redux/commonSlice";
import moment from "moment";
import {useCountdown} from "@utils/hooks/useCountdown";
import DateCountDown from "@components/DateCountDown";
import {Calendar, MapPin} from "lucide-react";

const Hero = () => {
  const dispatch = useAppDispatch();
  const {websiteTypeId} = useAppSelector((state) => state.common);

  const weddingDate = moment(WEDDING_DATE).toDate();
  // const isDateElapsed = moment() > moment(weddingDate);

  const [months, days, hours, minutes, seconds] = useCountdown(weddingDate);

  useEffect(() => {
    const storedId = localStorage.getItem("websiteTypeId");
    let id: number;
    if (storedId !== null) {
      id = Number(storedId);
      if (isNaN(id)) {
        id = 1;
      }
    } else if (websiteTypeId) {
      id = Number(websiteTypeId);
      if (isNaN(id)) {
        id = 1;
      }
    } else {
      id = 1;
    }
    dispatch(setWebsiteTypeId(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TYPE_1 = (
    <Box className="text-center flex flex-col gap-6 mb-10 justify-center items-center">
      {/* LOGO */}
      <Box className="flex justify-center gap-8 mt-4">
        <img src={MAIN_LOGO_IMAGE} alt="Logo" className="h-64" />
      </Box>

      {/* DATE */}
      <Box className="font-hannah text-5xl text-center">{_toUpper(format(WEDDING_DATE, "MMMM dd, yyyy"))}</Box>

      {/* Names */}
      <Box className="text-6xl font-malarkey">{YESHA_AND_VAIBHAV}</Box>
      <Box className="font-bold text-3xl -mt-2">{HASHTAG}</Box>
    </Box>
  );

  const TYPE_2 = (
    <Box className="mt-8 px-4 flex justify-center items-center">
      <Grid container spacing={1} className="w-full" sx={{maxWidth: MAX_WIDTH}}>
        <Grid size={{xs: 12, sm: 6}}>
          <Box className="flex justify-center items-center h-full">
            <img src={MAIN_LOGO_IMAGE} alt="logo-image" className="h-8/12" />
          </Box>
        </Grid>
        <Grid size={{xs: 12, sm: 6}}>
          <Box className="h-full text-center flex flex-col justify-center items-center gap-2">
            <Box className="text-xl text-black/80">WE'RE GETTING MARRIED</Box>
            <Box className="font-alice-regular mt-4 text-4xl md:text-5xl lg:text-6xl">
              {YESHA} <span className="text-primary">&</span> {VAIBHAV}
            </Box>
            {/* COUNTDOWN */}
            <Box className="mt-4 w-full">
              <DateCountDown months={months} days={days} hours={hours} minutes={minutes} seconds={seconds} />
            </Box>
            {/* DATE AND PLACE - Responsive layout */}
            <Box className="mt-12 w-full flex flex-col lg:flex-row lg:items-center lg:justify-around">
              <Box
                className="inline-block cursor-pointer px-2 py-1"
                onClick={() => window.open(CALENDAR_INVITE_LINK, "_blank")}
                title="Click to add this event to your calendar"
              >
                <span className="inline-block align-middle">
                  <Calendar className="" />
                </span>
                <span className="ml-2 text-xl inline-block align-middle underline decoration-dotted ">
                  {moment(WEDDING_DATE).format("MMMM DD, YYYY")}
                </span>
                <span className="block text-xs text-gray-500 mt-1 ">Click to add to calendar</span>
              </Box>
              {/* Divider only on large screens */}
              <Box className="hidden lg:block w-px h-10 bg-black/50 mx-8" />
              <Box
                className="inline-block mt-6 lg:mt-0 cursor-pointer px-2 py-1"
                onClick={() => window.open(LOCATION_GOOGLE_LINK, "_blank")}
                title="View location on Google Maps"
              >
                <span className="inline-block align-middle">
                  <MapPin />
                </span>
                <span className="text-xl ml-2 inline-block align-middle">{LOCATION_FULL_NAME}</span>
              </Box>
            </Box>
            {/* TEXT */}
            <Box className="mt-8 text-2xl">Counting down to our happily ever after ✨</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      {websiteTypeId === 1 ? <Box>{TYPE_1}</Box> : websiteTypeId === 2 ? <Box>{TYPE_2}</Box> : <Box>{TYPE_1}</Box>}
    </Box>
  );
};

export default Hero;
