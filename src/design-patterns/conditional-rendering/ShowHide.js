import React, { useEffect, useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Show/Hide</h1>
      <button type="button" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div>
      <h2>window size : {size}px</h2>
    </div>
  );
};

export default ShowHide;
