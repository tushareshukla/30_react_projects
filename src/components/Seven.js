import React, { useEffect } from "react";
import { useState } from "react";
export default function Seven() {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
        return clearInterval();
      }, 1000);
    }
  }, [time]);
  return <div>ChaderMod only this much time is left: {time}</div>;
}
