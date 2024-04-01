import React, { useState } from 'react';
import './DayNight.css'; // Import CSS file for styling (create this file)

function DayNight() {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  return (
    <div className={`container ${isDay ? 'day' : 'night'}`}>
      <button onClick={toggleDayNight}>
        {isDay ? 'Switch to Night Mode' : 'Switch to Day Mode'}
      </button>
      <h1>Welcome to {isDay ? 'Day' : 'Night'} Mode</h1>
    </div>
  );
}

export default DayNight;
