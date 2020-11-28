import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    //return () => {
    //  console.log("cleanup");
    //  window.removeEventListener("resize", checkSize);
    //};
  }, []);
  console.log("render");
  return (
    <div>
      <h1>useEffect CleanUp</h1>
      <h2>window {size} px</h2>
    </div>
  );
};

export default UseEffectCleanUp;
