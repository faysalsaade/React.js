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

// import { React, useState, useEffect } from "react";
// import axios from "axios";
// const App = () => {
//   const [post, setpost] = useState({});
//   const [id, setId] = useState("");
//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => {
//         setpost(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <h1>{post.title}</h1>
//     </div>
//   );
// };
// export default App;

import { React, createContext } from "react";
import ComponentA from "./components/ComponentA";

export const usercontext = createContext();

const App = () => {
  return (
    <div>
      <usercontext.Provider value={"Faysal"}>
        <ComponentA />
      </usercontext.Provider>
    </div>
  );
};

export default App;
