import React from "react";
import Basic from "@/conponents/Basic";
import Hook from "../conponents/Hook";

const App: React.FC = () => {
  return (
    <>
      <h1>Wellcome to IT.BRU</h1>
      <p>Hello Typescript</p>

      <Basic initVal="1" />

      <Hook initHook="1" />
    </>
  );
};

export default App;
