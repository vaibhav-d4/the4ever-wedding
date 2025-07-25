import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  DAYS_LABEL,
  HOURS_LABEL,
  MINUTES_LABEL,
  MONTHS_LABEL,
  SECONDS_LABEL,
} from "@utils/constants";

interface IDateCountDown {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DateCountDown = ({
  months,
  days,
  hours,
  minutes,
  seconds,
}: IDateCountDown) => {
  const theme = useTheme();
  const belowMd = useMediaQuery(theme.breakpoints.down("md"));

  const displayView = () => {
    if (months > 0)
      return [
        { value: months, label: MONTHS_LABEL },
        { value: days, label: DAYS_LABEL },
        { value: hours, label: HOURS_LABEL },
      ];
    else if (months === 0 && days > 0)
      return [
        { value: days, label: DAYS_LABEL },
        { value: hours, label: HOURS_LABEL },
        { value: minutes, label: MINUTES_LABEL },
      ];
    else if (days === 0)
      return [
        { value: hours, label: HOURS_LABEL },
        { value: minutes, label: MINUTES_LABEL },
        { value: seconds, label: SECONDS_LABEL },
      ];
    else
      return [
        { value: months, label: MONTHS_LABEL },
        { value: days, label: DAYS_LABEL },
        { value: hours, label: HOURS_LABEL },
      ];
  };

  return (
    <Box className="">
      <Grid container spacing={2}>
        {displayView().map(({ value, label }, index, self) => (
          <Grid
            size={4}
            key={index}
            className={`${index !== self.length - 1 ? "border-r-3" : ""} px-4`}
          >
            <Box className="">
              <Box className="text-4xl font-alice-regular">{value}</Box>
              <Box className="text-4xl">{label}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DateCountDown;
