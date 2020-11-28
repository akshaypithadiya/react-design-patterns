import React from "react";
//useState
//import UseStateBasic from "./components/useState/UseStateBasic";
//import UseStateArray from "./components/useState/UseStateArray";
//import UseStateObject from "./components/useState/UseStateObject";
//import UseStateCounter from "./components/useState/UseStateCounter";
//useEffect
//import UseEffectBasics from "./components/useEffect/UseEffectBasics";
//import UseEffectCleanUp from "./components/useEffect/UseEffectCleanUp";
import UseEffectFetchData from "./components/useEffect/UseEffectFetchData";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/*
    //useState
    <UseStateBasic />
    <UseStateArray />
    <UseStateObject />
    <UseStateCounter />  
    //useEffect
    <UseEffectBasics />
    <UseEffectCleanUp />
    */}
      <UseEffectFetchData />
    </div>
  );
};

export default App;
