import React, { useState } from "react";

// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const text = "";
  const [isError, setIsError] = useState(false);
  //const firstValue = text || "hello world";
  //const secondValue = text && "hello world";
  return (
    <div>
      {/*
      <h2>first value = {firstValue}</h2>
      <h2>second value = {secondValue}</h2>
      <h2>{text || "akshay"}</h2>
      {text && <h2>text eval to true - hello</h2>}
      {!text && <h2>text eval to false - hello</h2>}
      */}
      <h1>akshay</h1>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>there is error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
      <button type="button" onClick={() => setIsError(!isError)}>
        Toggle
      </button>
    </div>
  );
};

export default ShortCircuit;
