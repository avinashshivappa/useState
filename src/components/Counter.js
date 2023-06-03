import React, { useState, useEffect } from "react";
import "../styles/Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [plusCounter, setPlusCounter] = useState(0);
  const [minusCounter, setMinusCounter] = useState(0);

  useEffect(() => {
    console.log("you clicked PLUS");
  }, [plusCounter]);

  // console.log("property 1 => ", counter, " property 2 => ", setCounter);
  useEffect(() => {
    console.log("YOu clicked MINUS");
  }, [minusCounter]);

  // console.log("counterValue", counter);
  function resetCounterValue() {
    setCounter(0);
  }

  function decreaseCounterValue() {
    setCounter((prevState) => prevState - 1);
    // setCounter(counter - 1);
    setMinusCounter(minusCounter - 1);
  }

  function increaseCounterValue() {
    setCounter((prevState) => prevState + 1);
    // setCounter(counter + 1);
    setPlusCounter(plusCounter + 1);
  }

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <div className="buttons">
        <button className="minus" onClick={decreaseCounterValue}>
          -
        </button>
        <button className="reset" onClick={resetCounterValue}>
          Reset
        </button>
        <button className="plus" onClick={increaseCounterValue}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
