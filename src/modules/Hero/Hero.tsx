import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import {
  HASHTAG,
  MAIN_LOGO_IMAGE,
  WEDDING_DATE,
  YESHA_AND_VAIBHAV,
} from "@utils/constants";
import { useAppDispatch, useAppSelector } from "@utils/redux/hooks";
import { format } from "date-fns";
import { toUpper as _toUpper } from "lodash";
import { setWebsiteTypeId } from "@utils/redux/commonSlice";
import moment from "moment";
import { useCountdown } from "@utils/hooks/useCountdown";
import DateCountDown from "@components/DateCountDown";

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
      <Grid container spacing={2} className="">
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box className="flex justify-center items-center h-full">
            <img src={MAIN_LOGO_IMAGE} alt="logo-image" className="h-11/12" />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box className="h-full text-center flex flex-col justify-center items-center gap-2">
            <Box className="text-3xl">
              From “Yes!” to “I Do” - We are getting marrried and the final
              countdown has begun! 💞
            </Box>
            <Box className="mt-8">
              <DateCountDown
                months={months}
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
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
