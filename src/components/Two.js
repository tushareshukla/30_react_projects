import { useState } from "react";
import React from "react";

export default function Two() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrememnt</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
