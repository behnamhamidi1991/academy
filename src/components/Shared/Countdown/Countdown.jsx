import React, { useEffect, useState } from "react";
import "./countdown.css";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "September, 29, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="countdown-wrapper">
      <div className="days">
        <span>{days < 10 ? "0" + days : days}</span> <span>Days</span>
      </div>
      <div className="hours">
        <span>{hours < 10 ? "0" + hours : hours}</span> <span>Hours</span>
      </div>
      <div className="minutes">
        <span> {minutes < 10 ? "0" + minutes : minutes}</span>{" "}
        <span>Minutes</span>
      </div>
      <div className="seconds">
        <span> {seconds < 10 ? "0" + seconds : seconds}</span>{" "}
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
