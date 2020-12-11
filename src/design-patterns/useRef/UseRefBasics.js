import React, { useRef, useEffect } from "react";

// preserves values
// does not trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <div>
      <h1>useRef</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        &nbsp;
        <button type="submit">submit</button>
        <div ref={divContainer}>Hello!</div>
      </form>
    </div>
  );
};

export default UseRefBasics;
