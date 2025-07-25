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

const Hero = () => {
  const dispatch = useAppDispatch();
  const { websiteTypeId } = useAppSelector((state) => state.common);

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
          <Box className="h-full text-center flex items-center">
            <span className="text-3xl">
              Our forever begins on February 08 — and we want you there with us!
              🌟
            </span>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  if (websiteTypeId === 1) return TYPE_1;
  else if (websiteTypeId === 2) return TYPE_2;
  else return TYPE_1;
};

export default Hero;
