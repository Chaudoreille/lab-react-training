import React from 'react';
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(1);
  const decrement = (nb) => Math.ceil(nb / 2);
  const increment = (nb) => nb * 2;

  const log = (message) => {
    console.log(message);
    return message;
  };

  const handleDec = () => setCounter(decrement);
  const handleInc = () => setCounter(increment);
  const print = () => setCounter(log);

  return (
    <div className="container">
      <button onClick={handleDec}>-</button>
      <p>{counter.toLocaleString('fullwide')}</p>
      <button onClick={handleInc}>+</button>
      <button onClick={print}>Print</button>
    </div>
  );
}

export default Counter;
