import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import {
  HASHTAG,
  LOCATION_FULL_NAME,
  MAIN_LOGO_IMAGE,
  VAIBHAV,
  WEDDING_DATE,
  YESHA,
  YESHA_AND_VAIBHAV,
} from "@utils/constants";
import { useAppDispatch, useAppSelector } from "@utils/redux/hooks";
import { format } from "date-fns";
import { toUpper as _toUpper } from "lodash";
import { setWebsiteTypeId } from "@utils/redux/commonSlice";
import moment from "moment";
import { useCountdown } from "@utils/hooks/useCountdown";
import DateCountDown from "@components/DateCountDown";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  const dispatch = useAppDispatch();
  const { websiteTypeId } = useAppSelector((state) => state.common);

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
      <Box className="font-hannah text-5xl text-center">
        {_toUpper(format(WEDDING_DATE, "MMMM dd, yyyy"))}
      </Box>

      {/* Names */}
      <Box className="text-6xl font-malarkey">{YESHA_AND_VAIBHAV}</Box>
      <Box className="font-bold text-3xl -mt-2">{HASHTAG}</Box>
    </Box>
  );

  const TYPE_2 = (
    <Box>
      <Grid container spacing={1} className="mt-4">
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box className="flex justify-center items-center h-full">
            <img src={MAIN_LOGO_IMAGE} alt="logo-image" className="h-8/12" />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box className="h-full text-center flex flex-col justify-center items-center gap-2">
            <Box className="text-xl text-black/80">WE'RE GETTING MARRIED</Box>
            <Box className="font-alice-regular mt-4 text-4xl md:text-5xl lg:text-6xl">
              {YESHA} <span className="text-blue-300">&</span> {VAIBHAV}
            </Box>
            {/* COUNTDOWN */}
            <Box className="mt-4 w-full">
              <DateCountDown
                months={months}
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            </Box>
            {/* DATE AND PLACE */}
            <Box className="mt-12 flex items-center justify-around w-full">
              <Box className="flex">
                <Calendar />
                <span className="ml-2 text-xl">
                  {moment(WEDDING_DATE).format("MMMM DD, YYYY")}
                </span>
              </Box>
              <Box className="w-px h-8 bg-black/50" />
              <Box className="flex">
                <MapPin />
                <span className="text-xl ml-2">{LOCATION_FULL_NAME}</span>
              </Box>
            </Box>
            {/* TEXT */}
            <Box className="mt-8 text-2xl">
              Join us for a day filled with love, laughter, and celebration
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      {websiteTypeId === 1 ? (
        <Box>{TYPE_1}</Box>
      ) : websiteTypeId === 2 ? (
        <Box>{TYPE_2}</Box>
      ) : (
        <Box>{TYPE_1}</Box>
      )}
    </Box>
  );
};

export default Hero;
