import moment from "moment";
import { useEffect, useState } from "react";

const useCountdown = (targetDate: Date) => {
  // const countDownDate = new Date(targetDate).getTime();
  const countDownDate = moment(targetDate).unix() * 1000;

  // const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
  const [countDown, setCountDown] = useState(
    countDownDate - moment().unix() * 1000
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - moment().unix() * 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const isDateElapsed = moment() > moment(targetDate);
  if (isDateElapsed) return [0, 0, 0, 0, 0];

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;
  const millisecondsInMonth = millisecondsInDay * 30; // Assuming a month is 30 days for simplicity

  const months = Math.floor(countDown / millisecondsInMonth);
  const days = Math.floor(
    (countDown % millisecondsInMonth) / millisecondsInDay
  );
  const hours = Math.floor(
    (countDown % millisecondsInDay) / millisecondsInHour
  );
  const minutes = Math.floor(
    (countDown % millisecondsInHour) / millisecondsInMinute
  );
  const seconds = Math.floor(
    (countDown % millisecondsInMinute) / millisecondsInSecond
  );

  return [months, days, hours, minutes, seconds];
};

export { useCountdown };
