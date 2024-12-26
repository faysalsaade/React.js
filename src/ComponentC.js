import React, { createContext } from "react";
import { Usercontext, familycontext } from "./App";

const ComponentC = () => {
  return (
    <div>
      <Usercontext.Consumer>
        {(user) => {
          return (
            <familycontext.Consumer>
              {(family) => {
                return (
                  <h1>
                    my name is {user} and my family is {family}
                  </h1>
                );
              }}
            </familycontext.Consumer>
          );
        }}
      </Usercontext.Consumer>
    </div>
  );
};

export default ComponentC;
