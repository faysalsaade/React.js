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
    firstName: "",
    lastName: "",
  });
  return <div></div>;
};

export default App;
