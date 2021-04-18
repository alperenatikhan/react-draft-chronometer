import React, { useState, useRef, useEffect } from "react";
import "./style.css";

export default function App() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount(c => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  const refreshHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(c => 0);
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p> {`${Math.floor((600 - count) / 60)} : ${(600 - count) % 60}`}</p>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Pause</button>
      <button onClick={refreshHandler}>Stop</button>
    </div>
  );
}
