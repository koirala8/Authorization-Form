import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

  return () => {
  clearInterval(intervalId);
};
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  return (
    <>
      <h1>Time: {time}</h1>
      <input type="text" name={name} onChange = {handleChange}/>
    </>
  );
}
