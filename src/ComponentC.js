import { React, useContext } from "react";
import { Usercontext, familycontext } from "./App";

const ComponentC = () => {
  const user = useContext(Usercontext);
  const family = useContext(familycontext);
  return (
    <div>
      <h1>
        My Name Is {user} And My Family Is {family}
      </h1>
    </div>
  );
};

export default ComponentC;
