import {Box} from "@mui/material";
import {DAYS_LABEL, HOURS_LABEL, MINUTES_LABEL, MONTHS_LABEL, SECONDS_LABEL} from "@utils/constants";

interface IDateCountDown {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DateCountDown = ({months, days, hours, minutes, seconds}: IDateCountDown) => {
  const displayView = () => {
    if (months > 0)
      return [
        {value: months, label: MONTHS_LABEL},
        {value: days, label: DAYS_LABEL},
        {value: hours, label: HOURS_LABEL}
      ];
    else if (months === 0 && days > 0)
      return [
        {value: days, label: DAYS_LABEL},
        {value: hours, label: HOURS_LABEL},
        {value: minutes, label: MINUTES_LABEL}
      ];
    else if (days === 0)
      return [
        {value: hours, label: HOURS_LABEL},
        {value: minutes, label: MINUTES_LABEL},
        {value: seconds, label: SECONDS_LABEL}
      ];
    else
      return [
        {value: months, label: MONTHS_LABEL},
        {value: days, label: DAYS_LABEL},
        {value: hours, label: HOURS_LABEL}
      ];
  };

  return (
    <Box className="flex justify-center items-center">
      <Box className="flex items-center w-full justify-around">
        {displayView().map(({value, label}, index) => (
          <Box key={index} className="flex items-center">
            <Box className="text-center">
              <Box className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-black/10 shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl">
                <Box className="text-6xl md:text-6xl lg:text-7xl font-alice-regular text-primary font-bold leading-none">
                  {value}
                </Box>
                <Box className="text-sm md:text-base lg:text-lg text-black/80 font-bold mt-2 uppercase tracking-wider">
                  {label}
                </Box>
              </Box>
            </Box>

            {/* Divider - only show if not the last item */}
            {/* {index < displayView().length - 1 && (
              <Box className="mx-3 md:mx-4 lg:mx-6 flex items-center">
                <Box className="w-px h-20 md:h-16 lg:h-20 bg-black/50"></Box>
              </Box>
            )} */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DateCountDown;
