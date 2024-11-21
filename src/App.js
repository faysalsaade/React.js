// import Tweet from "./components/tweet";
// //
// import { React, useState } from "react";
// import Classtweet from "./components/Class tweet";
// function App() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     if (count < -9) {
//       return;
//     }
//     setCount(count - 1);
//   };
//   const decrement = () => {
//     if (count > 9) {
//       return;
//     }
//     setCount(count + 1);
//   };
//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>reset</button>
//       {count}
//     </div>
//   );
// }

// export default App;

import { React, useState } from "react";

const App = () => {
  const [name, setName] = useState({
    firstName: "faysal",
    lastName: "saadeh",
  });
  return (
    <div>
      <h1> my firstName is {name.firstName}</h1>
      <h1> my lastName is {name.lastName}</h1>
    </div>
  );
};

export default App;
