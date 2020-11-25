import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const resetValue = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h1>useState Counter</h1>
      <h2>{value}</h2>
      <button className="btn" type="button" onClick={() => setValue(value + 1)}>
        increase
      </button>
      <button className="btn" type="button" onClick={() => setValue(value - 1)}>
        decrease
      </button>
      <button className="btn" type="button" onClick={resetValue}>
        reset
      </button>
      <h2>{value}</h2>
      <button className="btn" type="button" onClick={complexIncrease}>
        complex increase
      </button>
    </>
  );
};
export default UseStateCounter;
