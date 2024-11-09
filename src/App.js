import Tweet from "./components/tweet";
import "./App.css";
import { useState } from "react";
function App() {
  const [Users, setUsers] = useState([
    {
      name: "faysal",
      message: "hello form faysal",
      likes: "Numbers of likes ",
    },
    {
      name: "fafi",
      message: "hello form fafi",
      likes: "Numbers of likes ",
    },
    {
      name: "fifi",
      message: "hello form fifi",
      likes: "Numbers of likes ",
    },
  ]);
  return (
    <div className="app">
      {Users.map((user) => (
        <Tweet
          key={user.name}
          name={user.name}
          message={user.message}
          likes={user.likes}
        />
      ))}
      {/* <button
        onClick={function () {
          setcount(count + 1);
        }}
      >
        + 1
      </button>
      <button
        onClick={function () {
          setcount(count - 1);
        }}
      >
        - 1
      </button>
      <button
        onClick={function () {
          setcount(0);
        }}
      >
        reset
      </button>
      {count} */}
    </div>
  );
}

export default App;
//       <button onClick={() => setcount(count + 1)}>fif</button>
