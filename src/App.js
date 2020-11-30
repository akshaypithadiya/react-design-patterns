import React from "react";
//useState
//import UseStateBasic from "./design-patterns/useState/UseStateBasic";
//import UseStateArray from "./design-patterns/useState/UseStateArray";
//import UseStateObject from "./design-patterns/useState/UseStateObject";
//import UseStateCounter from "./design-patterns/useState/UseStateCounter";

//useEffect
//import UseEffectBasics from "./design-patterns/useEffect/UseEffectBasics";
//import UseEffectCleanUp from "./design-patterns/useEffect/UseEffectCleanUp";
//import UseEffectFetchData from "./design-patterns/useEffect/UseEffectFetchData";

//conditional-rendering
//import MultipleReturns from "./design-patterns/conditional-rendering/MultipleReturns";
//import ShortCircuit from "./design-patterns/conditional-rendering/ShortCircuit";
import ShowHide from "./design-patterns/conditional-rendering/ShowHide";

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
    <UseEffectFetchData />

    //conditional-rendering
    <MultipleReturns />
    <ShortCircuit />
    */}
      <ShowHide />
    </div>
  );
};

export default App;
