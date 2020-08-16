import React from "react";
import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <Lottery title="Mini Pool" maxValue={50} maxBall={5} />
      <Lottery title="Super Bowl" maxValue={10} maxBall={1} />
    </div>
  );
}

export default App;
