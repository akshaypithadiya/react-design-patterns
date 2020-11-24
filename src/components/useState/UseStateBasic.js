import React, { useState } from "react";

const UseStateBasic = () => {
  const [text, setText] = useState("default text");

  const changeText = () => {
    setText("new text");
  };

  return (
    <div>
      <h1>useState Basic</h1>
      <h2>{text}</h2>
      <button type="button" onClick={changeText}>
        update text
      </button>
    </div>
  );
};

export default UseStateBasic;
