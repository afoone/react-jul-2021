import React, { useState } from "react";
// import {a as numerito, b} from './ejemploExport'

const Counter = () => {
  // para utilizar un estado usaremos la función (hook) useState
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;
