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

// import { React, useState } from "react";

// const App = () => {
//   const [items, setItems] = useState([]);
//   const addItems = () => {
//     setItems([
//       ...items,
//       {
//         id: items.length,
//         value: Math.floor(Math.random() * 10) + 1,
//       },
//     ]);
//   };
//   return (
//     <div>
//       <button onClick={addItems}> add a number</button>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import { React, useState, useEffect } from "react";

const App = () => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const loadMousePosition = (e) => {
    console.log("mouse event");
    setx(e.clientX);
    sety(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.);
  return (
    <div>
      <h1>x - {x}</h1>
      <h1>y - {y}</h1>
    </div>
  );
};

export default App;
