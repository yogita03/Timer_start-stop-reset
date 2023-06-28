import React, { useState, useEffect } from 'react';
import './components/timer.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let id = null;

    if (start) {
      id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } 
    else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [time,start]);

  const startStopHandler = () => {
    setStart((prevIsActive) => !prevIsActive);
  };

  const resetHandler = () => {
    setTime(0);
    setStart(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <center>
    <div className='timer'>
      <div className='container'>
        <div className='timer_container'>
      <h3>Timer</h3>
      <div>{formatTime(time)}</div>
      <button className='stop' onClick={startStopHandler}>{start ? 'Stop' : 'Start'}</button>
      <button className='restart' onClick={resetHandler}>Reset</button>
    </div>
    </div>
    </div>
    </center>
  );
};

export default App;
