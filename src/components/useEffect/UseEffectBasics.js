import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `useEffect Basics (${value})`;
    }
  }, [value]);
  console.log("render compoent");
  return (
    <div>
      <h1>useEffect Basics</h1>
      <h2>{value}</h2>
      <button type="button" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </div>
  );
};

export default UseEffectBasics;
