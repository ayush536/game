import { useState } from "react";

import "./Counter.css"

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (value) => {
    setCounter(value + counter);
  };

  const multCounter = () => {
    setCounter((0 + counter) * 2);
  };

  return (
    <>
      <h3>COUNTER : {counter}</h3>
      <button onClick={() => handleCounter(1)}>ADD</button>
      <button onClick={() => handleCounter(-1)}>SUB</button>
      <button onClick={() => multCounter()}>DOUBLE</button>
      <div className="ayu">
          <h2>Ayuhs</h2></div>
    </>
  );
}
