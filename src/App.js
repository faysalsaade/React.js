import Tweet from "./components/tweet";
import "./App.css";
import { React, useState } from "react";
import Classtweet from "./components/Class tweet";
function App() {
  const [Users, setUsers] = useState([
    {
      name: "faysal",
      message: "hello form faysal",
    },
    {
      name: "fafi",
      message: "hello form fafi",
    },
    {
      name: "fifi",
      message: "hello form fifi",
    },
  ]);
  return (
    <div className="app">
      {Users.map((user) => (
        <Tweet
          key={user.name}
          name={user.name}
          message={user.message}
          likes={(user.likes = "Numbers of likes ")}
        />
      ))}
      <Classtweet />
    </div>
  );
}

export default App;
