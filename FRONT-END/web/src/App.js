import React, { useState } from "react";

import Header from "./Header";

function App() {
  let [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </>
  );
}

export default App;
