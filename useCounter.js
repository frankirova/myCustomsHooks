import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(1)
  }

  return { counter, increment, decrement, reset };
};
