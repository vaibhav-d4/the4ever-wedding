import moment from "moment";
import {useEffect, useState} from "react";

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(getReturnValues(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getReturnValues(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const isDateElapsed = moment() > moment(targetDate);
  if (isDateElapsed) return [0, 0, 0, 0, 0];

  return timeLeft;
};

const getReturnValues = (targetDate: Date) => {
  const now = moment();
  const end = moment(targetDate);
  if (now > end) return [0, 0, 0, 0, 0];

  let months = end.diff(now, "months");
  const afterMonths = now.clone().add(months, "months");
  let days = end.diff(afterMonths, "days");
  const afterDays = afterMonths.clone().add(days, "days");
  const hours = end.diff(afterDays, "hours");
  const afterHours = afterDays.clone().add(hours, "hours");
  const minutes = end.diff(afterHours, "minutes");
  const afterMinutes = afterHours.clone().add(minutes, "minutes");
  const seconds = end.diff(afterMinutes, "seconds");

  // If the day of the month matches, show full months and zero days
  if (now.date() === end.date()) {
    months += 1;
    days = 0;
  }

  return [months, days, hours, minutes, seconds];
};

export {useCountdown};
