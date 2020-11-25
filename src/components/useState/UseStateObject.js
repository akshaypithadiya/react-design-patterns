import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "akshay",
    age: 22,
    message: "random message",
  });

  //const [name, setName] = useState("akshay");
  //const [age, setAge] = useState(22);
  //const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    setPerson({ ...person, message: "new message" });
    //setMessage("new message");
  };
  return (
    <div>
      <h1>useState Object</h1>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      {/*
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      */}
      <button type="button" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
};
export default UseStateObject;
