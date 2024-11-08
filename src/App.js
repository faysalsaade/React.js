import React from "react";
import Tweet from "./components/tweet";
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
