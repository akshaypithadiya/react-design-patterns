import React from "react";
//import UseStateBasic from "./components/useState/UseStateBasic";
//import UseStateArray from "./components/useState/UseStateArray";
//import UseStateObject from "./components/useState/UseStateObject";
import UseStateCounter from "./components/useState/UseStateCounter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/*
    <UseStateBasic />
    <UseStateArray />
    <UseStateObject />
    */}
      <UseStateCounter />
    </div>
  );
};

export default App;
