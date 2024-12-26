import React, { createContext } from "react";
import ComponentB from "./ComponentB";

const usercontext = createContext;
const ComponentA = () => {
  return (
    <div>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
