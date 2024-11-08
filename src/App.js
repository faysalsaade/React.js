import React from "react";
import Tweet from "./components/tweet";
function App() {
  const style = {
    background: "red",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "80px",
  };
  return (
    <div style={style}>
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
