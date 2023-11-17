import { useState, useEffect } from "react";

function Time() {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    // Set a static value for randomTime (e.g., 5000 milliseconds)
    const randomTime = 5000;

    // Get the current time
    const now = new Date();

    // Subtract the static random time from the current time
    const newTime = new Date(now.getTime() - randomTime);

    // Update the state with the new time
    setCurrentTime(newTime);

    // Optionally, you can use setInterval to update the time every second
    const intervalId = setInterval(() => {
      // Use the functional form of setCurrentTime to ensure you have the latest state
      setCurrentTime((prevTime) => new Date(prevTime.getTime() - 1000));
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // No need to include currentTime in the dependency array

  // Helper function to format the time difference
  const formatTime = (diff) => {
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Approximate months
    const years = Math.floor(months / 12); // Approximate years

    return {
      years: years % 12,
      months: months % 30,
      days: days % 24,
      hours: hours % 60,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  };

  // Format the time difference
  const timeDifference = currentTime
    ? new Date().getTime() - currentTime.getTime()
    : 0;
  const formattedTime = formatTime(timeDifference);

  return (
    <div>
      {currentTime && (
        <p>
          Time Difference: {formattedTime.years} years, {formattedTime.months}{" "}
          months, {formattedTime.days} days, {formattedTime.hours} hours,{" "}
          {formattedTime.minutes} minutes, {formattedTime.seconds} seconds
        </p>
      )}
    </div>
  );
}

export default Time;
