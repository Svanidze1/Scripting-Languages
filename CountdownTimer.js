import React, { useState, useEffect } from 'react';


const getNextOccurrence = (hour, minute) => {
  const now = new Date();
  const nextOccurrence = new Date();

  nextOccurrence.setHours(hour, minute, 0, 0);

  
  if (nextOccurrence <= now) {
    nextOccurrence.setDate(nextOccurrence.getDate() + 1);
  }

  return nextOccurrence;
};

const CountdownTimer = ({ hour, minute }) => {
  const calculateTimeLeft = () => {
    const nextDeparture = getNextOccurrence(hour, minute);
    const difference = nextDeparture - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
      {Object.keys(timeLeft).length ? (
        <span>
          {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      ) : (
        <span>Departed</span>
      )}
    </div>
  );
};

export default CountdownTimer;
