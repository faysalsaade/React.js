// import Tweet from "./components/tweet";
// //
// 1 - slay
// 2 - avangard
// 3 - no glory
// 4 - brodyaga
// 5- kaminw
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

//

import { React, useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [posts, setpost] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
    });
  });
  return <div>app</div>;
};
export default App;
