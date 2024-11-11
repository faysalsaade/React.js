import Tweet from "./components/tweet";
//
import { React, useState } from "react";
import Classtweet from "./components/Class tweet";
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < -10 && count > 10) {
      return;
    }
    setCount(count - 1);
  };
  const decrement = () => {
    if (count < -10 && count > 10) {
      return;
    }
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      {count}
    </div>
  );
}

export default App;
