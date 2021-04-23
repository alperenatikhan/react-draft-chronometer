import React, { useState, useRef, useEffect } from "react";
import "./style.css";

export default function App() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const [session, setSession] = useState(25);
  const [breaking, setBreaking] = useState(5);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount(c => c + 1), 1000);
    
    return sessionTimer;
  };

const sessionTimer = (count, session) => {
if (count < session*60){
return `${Math.floor(((session * 60) - count) / 60)} : ${(60 - count) % 60}` ;
}else{
return "00:00"
}
}


const breakingTimer =(count,breaking) => {

if (count < breaking*60){
return `${Math.floor(((breaking * 60) - count) / 60)} : ${(60 - count) % 60}`
}else{
return "00:00"
}
}


  const breakingHandler = (event) =>{

    if (event.target.value == "+"){
  setBreaking((prevState) => prevState+1);
}else if (event.target.value == "-"){
  setBreaking((prevState) => prevState-1);
    }

  }

  const sessionHandler = (event) => {
    if (event.target.value == "+"){
  setSession((prevState) => prevState+1);
    }else if (event.target.value == "-"){
  setSession((prevState) => prevState-1);
    }
  }

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
      <h1>Chronometer Draft</h1>
      <div id= "break-display"><h3> Break </h3> <button value="+" onClick= {breakingHandler}>+</button> <button value= "-" onClick = {breakingHandler}>-</button><h4> {breaking} </h4></div>
      <div id ="session-display"><h3> Session </h3> <button  value= "+" onClick= {sessionHandler}>+</button> <button value="-" onClick={sessionHandler}>-</button> <h4> {session} </h4></div>
      <div id="session-chronometer"><p> {sessionTimer(count,session)? sessionTimer(count,session): "00:00" }</p> <p> Session Timer </p> </div>
    <div id="break-chronometer"> <p> {breakingTimer(count,breaking)}</p> <p> Break Timer </p> </div>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Pause</button>
      <button onClick={refreshHandler}>Stop</button>
    </div>
  );
}
