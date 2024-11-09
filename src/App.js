import Tweet from "./components/tweet";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setcount] = useState(0);
  return (
    <div className="app">
      <Tweet
        name="faysal"
        message="hello form faysal"
        likes="Numbers of likes is 10k"
      />
      <Tweet
        name="fifi"
        message="hello form fifi"
        likes="Numbers of likes is 3k"
      />
      <Tweet
        name="fafi"
        message="hello form fafi"
        likes="Numbers of likes is 100M"
      />
      <button
        onClick={function () {
          setcount(count + 1);
        }}
      >
        fif
      </button>
      {count}
    </div>
  );
}

export default App;
//       <button onClick={() => setcount(count + 1)}>fif</button>
